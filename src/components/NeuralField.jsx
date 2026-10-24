import { useEffect, useRef } from 'react'

// Ambient "neural network" behind the hero: drifting nodes that link up near each other and lean toward the cursor.
export default function NeuralField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const pointer = { x: -9999, y: -9999 }
    let w = 0, h = 0, nodes = [], frame = 0, running = true

    function resize() {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random(),
      }))
    }

    function color(t, a) {
      // magenta → orange → amber, matching the portrait's neon ring
      const stops = [[255, 46, 147], [255, 106, 61], [255, 176, 32]]
      const i = t < 0.5 ? 0 : 1
      const k = t < 0.5 ? t * 2 : (t - 0.5) * 2
      const c = stops[i].map((v, j) => Math.round(v + (stops[i + 1][j] - v) * k))
      return `rgba(${c[0]},${c[1]},${c[2]},${a})`
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const max = 130
      for (const n of nodes) {
        const dx = pointer.x - n.x, dy = pointer.y - n.y
        const d = Math.hypot(dx, dy)
        if (d < 200) { n.vx += dx / d * 0.012; n.vy += dy / d * 0.012 }
        n.vx *= 0.985; n.vy *= 0.985
        n.vx += (Math.random() - 0.5) * 0.02; n.vy += (Math.random() - 0.5) * 0.02
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < max) {
            ctx.strokeStyle = color((a.hue + b.hue) / 2, (1 - d / max) * 0.35)
            ctx.lineWidth = 0.8
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = color(n.hue, 0.9)
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
      }
      if (running && !reduced) frame = requestAnimationFrame(draw)
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
    }
    function onLeave() { pointer.x = pointer.y = -9999 }
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      cancelAnimationFrame(frame)
      if (running) draw()
    })

    resize()
    draw()
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="neural-field" aria-hidden="true" />
}

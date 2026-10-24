// Small animated SVG illustrations for the expertise cards. Motion lives in _illustrations.scss.
function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="var(--c1)" />
        <stop offset=".55" stopColor="var(--c2)" />
        <stop offset="1" stopColor="var(--c3)" />
      </linearGradient>
    </defs>
  )
}

function Agents() {
  const sats = [[40, 34], [200, 30], [36, 126], [204, 130]]
  return (
    <svg viewBox="0 0 240 160" className="illo illo--agents">
      <Defs id="g-agents" />
      {sats.map(([x, y], i) => (
        <path key={i} d={`M120 80 Q ${x} 80 ${x} ${y}`} className="illo__flow" style={{ '--i': i }} stroke="url(#g-agents)" />
      ))}
      {sats.map(([x, y], i) => (
        <g key={`s${i}`} className="illo__sat" style={{ '--i': i }}>
          <rect x={x - 22} y={y - 13} width="44" height="26" rx="8" className="illo__box" />
          <text x={x} y={y + 4} textAnchor="middle" className="illo__label">{['search', 'memory', 'api', 'eval'][i]}</text>
        </g>
      ))}
      <circle cx="120" cy="80" r="30" fill="url(#g-agents)" className="illo__core" />
      <circle cx="120" cy="80" r="42" className="illo__halo" stroke="url(#g-agents)" />
      <text x="120" y="85" textAnchor="middle" className="illo__core-label">agent</text>
    </svg>
  )
}

function Rag() {
  return (
    <svg viewBox="0 0 240 160" className="illo illo--rag">
      <Defs id="g-rag" />
      {[0, 1, 2, 3].map(i => (
        <g key={i} className="illo__doc" style={{ '--i': i }}>
          <rect x={18} y={22 + i * 30} width="54" height="22" rx="5" className="illo__box" />
          <line x1="26" x2={58 - i * 4} y1={33 + i * 30} y2={33 + i * 30} className="illo__line" />
        </g>
      ))}
      <path d="M86 30 L150 62 L150 98 L86 130 Z" className="illo__funnel" stroke="url(#g-rag)" />
      <text x="118" y="84" textAnchor="middle" className="illo__label">rerank</text>
      <path id="rag-path" d="M72 80 H210" className="illo__track" />
      {[0, 1, 2].map(i => <circle key={i} r="4" fill="url(#g-rag)" className="illo__packet" style={{ '--i': i }}><animateMotion dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" path="M72 80 H196" /></circle>)}
      <rect x="168" y="58" width="56" height="44" rx="12" fill="url(#g-rag)" className="illo__core" />
      <text x="196" y="85" textAnchor="middle" className="illo__core-label">LLM</text>
    </svg>
  )
}

function FullStack() {
  const layers = ['UI · React', 'API · Node.js', 'Services · Java']
  return (
    <svg viewBox="0 0 240 160" className="illo illo--stack">
      <Defs id="g-stack" />
      {layers.map((l, i) => (
        <g key={l} className="illo__layer" style={{ '--i': i }}>
          <path d={`M120 ${22 + i * 38} L200 ${44 + i * 38} L120 ${66 + i * 38} L40 ${44 + i * 38} Z`} className="illo__plate" stroke="url(#g-stack)" />
          <text x="120" y={48 + i * 38} textAnchor="middle" className="illo__label">{l}</text>
        </g>
      ))}
      <line x1="120" x2="120" y1="30" y2="138" className="illo__beam" stroke="url(#g-stack)" />
    </svg>
  )
}

function Platform() {
  const tiles = []
  for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) tiles.push([c, r])
  return (
    <svg viewBox="0 0 240 160" className="illo illo--platform">
      <Defs id="g-platform" />
      {tiles.map(([c, r], i) => (
        <rect key={i} x={22 + c * 41} y={24 + r * 40} width={c === 0 && r === 0 ? 74 : 32} height="30" rx="7"
              className="illo__tile" style={{ '--i': (c + r * 2) % 7 }} />
      ))}
      <rect x="22" y="24" width="196" height="110" rx="12" className="illo__frame" stroke="url(#g-platform)" />
    </svg>
  )
}

const map = { agents: Agents, rag: Rag, fullstack: FullStack, platform: Platform }

export default function Illustration({ id }) {
  const C = map[id]
  return <div className="illo-wrap" aria-hidden="true"><C /></div>
}

import { useEffect, useState } from 'react'
import Icon from './Icon'

const links = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Writing' },
]

export default function Nav() {
  const [theme, setTheme] = useState('dark')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark')
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--progress', max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('main section[id]').forEach(s => io.observe(s))
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (e) { /* storage unavailable */ }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__progress" aria-hidden="true" />
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label="Arijeet Mukherjee — home" onClick={() => setOpen(false)}>
          <span className="nav__mark">AM</span>
          <span className="nav__name">Arijeet Mukherjee</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a href="#contact" className="btn btn--primary btn--sm nav__cta">Let’s talk</a>
          <button className="icon-btn nav__burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

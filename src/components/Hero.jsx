import { useEffect, useState } from 'react'
import NeuralField from './NeuralField'
import Icon from './Icon'
import { profile } from '../data/profile'

const orbit = ['LLMs', 'MCP', 'RAG', 'Agents', 'React', 'Java', 'Node.js']

function RotatingWord({ words }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % words.length), 2600)
    return () => clearInterval(t)
  }, [words.length])
  return (
    <span className="rotator" aria-live="polite">
      {words.map((w, k) => (
        <span key={w} className={`rotator__word ${k === i ? 'is-on' : ''}`} aria-hidden={k !== i}>{w}</span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <NeuralField />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="pill" data-reveal>
            <span className="pill__dot" /> Building Agentic AI @ {profile.company}
          </p>
          <h1 id="hero-title" className="hero__title" data-reveal style={{ '--d': '80ms' }}>
            Hi, I’m {profile.firstName}.<br />
            I engineer <span className="text-gradient">intelligent software</span> that ships.
          </h1>
          <p className="hero__sub" data-reveal style={{ '--d': '160ms' }}>
            I build <RotatingWord words={profile.rotatingRoles} />
          </p>
          <p className="hero__lead" data-reveal style={{ '--d': '220ms' }}>{profile.intro}</p>
          <div className="hero__ctas" data-reveal style={{ '--d': '280ms' }}>
            <a href="#work" className="btn btn--primary">See my work <Icon name="arrow" size={18} /></a>
            <a href={profile.socials[0].href} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={18} /> Connect on LinkedIn
            </a>
          </div>
          <dl className="hero__stats" data-reveal style={{ '--d': '340ms' }}>
            {profile.stats.map(s => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" data-reveal style={{ '--d': '200ms' }}>
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <img src={profile.portrait} alt="Arijeet Mukherjee, AI Engineer and Software Development Engineer at ServiceNow" width="880" height="880" fetchpriority="high" />
            <ul className="portrait__orbit" aria-hidden="true">
              {orbit.map((o, i) => <li key={o} style={{ '--i': i, '--n': orbit.length }}><span>{o}</span></li>)}
            </ul>
          </div>
          <div className="float-card float-card--agent" aria-hidden="true">
            <div className="float-card__head"><span className="dot dot--ok" /> agent.run()</div>
            <code>3 tools called · validated</code>
            <div className="float-card__bar"><span /></div>
          </div>
          <div className="float-card float-card--loc" aria-hidden="true">
            <Icon name="pin" size={16} /> {profile.location}
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About"><span /></a>
    </section>
  )
}

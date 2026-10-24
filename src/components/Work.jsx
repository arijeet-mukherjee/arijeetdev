import SectionHead from './SectionHead'
import Icon from './Icon'
import { mockups } from './Mockups'
import { featured, projects } from '../data/profile'

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHead id="work-title" eyebrow="Selected work" title="Things I’ve built">
          Enterprise AI at ServiceNow, product engineering at Dassault Systèmes, and the client products that started it all.
        </SectionHead>

        <div className="featured">
          {featured.map((f, i) => {
            const Mock = mockups[f.visual]
            return (
              <article key={f.id} className={`feature ${i % 2 ? 'feature--flip' : ''}`} data-reveal>
                <div className="feature__visual"><Mock /></div>
                <div className="feature__copy">
                  <p className="feature__meta"><span>{f.org}</span><span>{f.period}</span></p>
                  <h3>{f.title}</h3>
                  <p>{f.summary}</p>
                  <ul className="checks">
                    {f.points.map(p => <li key={p}><Icon name="check" size={16} />{p}</li>)}
                  </ul>
                  <ul className="tags">{f.tags.map(t => <li key={t}>{t}</li>)}</ul>
                </div>
              </article>
            )
          })}
        </div>

        <h3 className="subhead" data-reveal>Client & independent products</h3>
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.title} className="project" data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
              <div className="project__img">
                <img src={p.image} alt={`${p.title} — ${p.kind} built by Arijeet Mukherjee`} loading="lazy" width="1200" height="726" />
              </div>
              <div className="project__body">
                <p className="project__kind">{p.kind}</p>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <div className="project__links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer"><Icon name="external" size={16} /> Live</a>
                  <a href={p.source} target="_blank" rel="noopener noreferrer"><Icon name="code" size={16} /> Source</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import SectionHead from './SectionHead'
import { experience, stack } from '../data/profile'

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container experience">
        <div>
          <SectionHead id="experience-title" eyebrow="Experience" title="The path so far" />
          <ol className="timeline">
            {experience.map((e, i) => (
              <li key={e.role + e.company} className={`timeline__item ${e.current ? 'is-current' : ''}`} data-reveal style={{ '--d': `${i * 60}ms` }}>
                <span className="timeline__dot" aria-hidden="true" />
                <p className="timeline__period">{e.period} · {e.place}</p>
                <h3>{e.role} <span>@ {e.company}</span></h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="stack" aria-labelledby="stack-title" data-reveal>
          <h3 id="stack-title">Toolkit</h3>
          {stack.map(g => (
            <div key={g.group} className="stack__group">
              <p>{g.group}</p>
              <ul className="tags tags--lg">{g.items.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
          <div className="stack__edu">
            <p>Education</p>
            <strong>Maulana Abul Kalam Azad University of Technology</strong>
            <span>West Bengal (formerly WBUT)</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

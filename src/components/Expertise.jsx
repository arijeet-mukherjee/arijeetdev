import SectionHead from './SectionHead'
import Illustration from './Illustration'
import { expertise } from '../data/profile'
import { spotlight } from '../hooks/useSpotlight'

export default function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHead id="expertise-title" eyebrow="Expertise" title="What I build">
          From autonomous agents to the platforms they run on — I work across the whole stack of AI-native software.
        </SectionHead>
        <div className="cards cards--2">
          {expertise.map((e, i) => (
            <article key={e.id} className="card card--spot" onPointerMove={spotlight} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <Illustration id={e.id} />
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <ul className="tags">{e.tags.map(t => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

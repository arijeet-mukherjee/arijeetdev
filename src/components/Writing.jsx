import SectionHead from './SectionHead'
import Icon from './Icon'
import { writing, writingUrl } from '../data/profile'
import { spotlight } from '../hooks/useSpotlight'

export default function Writing() {
  return (
    <section className="section" id="writing" aria-labelledby="writing-title">
      <div className="container">
        <SectionHead id="writing-title" eyebrow="Writing" title="Notes on building with AI">
          I write about AI agents, RAG and what AI means for engineering — for 1.6K+ followers on LinkedIn.
        </SectionHead>
        <div className="cards cards--4">
          {writing.map((w, i) => (
            <a key={w.title} href={writingUrl} target="_blank" rel="noopener noreferrer" className="card card--spot post" onPointerMove={spotlight} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="post__tag">{w.tag}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <span className="post__foot">{w.reach} <Icon name="arrow" size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

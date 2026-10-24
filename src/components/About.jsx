import SectionHead from './SectionHead'
import Icon from './Icon'
import { principles } from '../data/profile'

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__intro">
          <SectionHead id="about-title" eyebrow="About" title={<>AI is changing the bottleneck. <span className="text-gradient">Engineering still decides the outcome.</span></>} />
          <div className="about__body" data-reveal>
            <p>
              I’m a Software Development Engineer at <strong>ServiceNow</strong>, part of the Strategic Portfolio Management
              organization. I work at the intersection of enterprise applications, AI and modern full-stack engineering —
              building intelligent agents, AI skills, workflow orchestration and LLM-powered experiences that help large
              organizations plan and deliver work.
            </p>
            <p>
              Before that I was an R&amp;D Engineer at <strong>Dassault Systèmes</strong>, and before that I ran a freelance
              studio that shipped 20+ web and mobile products for clients. I’m most excited about AI-native software, where
              agents, automation and human–AI collaboration change how work gets done.
            </p>
          </div>
        </div>
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.title} className="principle" data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="principle__num">0{i + 1}</span>
              <h3><Icon name="spark" size={14} /> {p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

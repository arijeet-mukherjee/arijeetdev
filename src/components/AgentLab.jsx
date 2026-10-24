import { useEffect, useState } from 'react'
import SectionHead from './SectionHead'
import Icon from './Icon'
import { agentSteps } from '../data/profile'

export default function AgentLab() {
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setStep(s => (s + 1) % agentSteps.length), 2600)
    return () => clearInterval(t)
  }, [paused])

  const current = agentSteps[step]

  return (
    <section className="section section--lab" id="agent-lab" aria-labelledby="lab-title">
      <div className="container">
        <SectionHead id="lab-title" eyebrow="Agent Lab" title={<>How I build AI agents that <span className="text-gradient">actually work</span></>}>
          A chatbot answers questions. An agent completes tasks. Production agents live or die on the system around the model —
          here’s the loop I design for.
        </SectionHead>

        <div className="lab" data-reveal onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <ol className="lab__steps" role="tablist" aria-label="Agent pipeline stages">
            {agentSteps.map((s, i) => (
              <li key={s.id}>
                <button
                  role="tab"
                  aria-selected={i === step}
                  className={`lab__step ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}
                  onClick={() => { setStep(i); setPaused(true) }}
                >
                  <span className="lab__index">{i < step ? <Icon name="check" size={14} /> : String(i + 1).padStart(2, '0')}</span>
                  <span className="lab__step-text">
                    <strong>{s.label}</strong>
                    <span>{s.detail}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="console" role="tabpanel" aria-live="polite">
            <div className="console__bar">
              <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
              <span className="console__title">agent-runtime — trace</span>
            </div>
            <div className="console__flow" aria-hidden="true">
              {agentSteps.map((s, i) => (
                <span key={s.id} className={`console__node ${i <= step ? 'is-lit' : ''} ${i === step ? 'is-current' : ''}`}>{s.label.split(' ')[0]}</span>
              ))}
            </div>
            <div className="console__body">
              <p className="console__prompt"><span>user ›</span> Which projects in my portfolio are at risk this quarter? Draft a status update.</p>
              {agentSteps.slice(0, step + 1).map((s, i) => (
                <p key={s.id} className={`console__line ${i === step ? 'is-typing' : ''}`}>
                  <span className="console__tag">{String(i + 1).padStart(2, '0')}</span>{s.log}
                </p>
              ))}
              {step === agentSteps.length - 1 && (
                <div className="console__answer">
                  <strong>3 projects flagged</strong> — budget variance above 12% and two blocked dependencies. Draft update ready for review.
                </div>
              )}
            </div>
            <div className="console__foot">
              <span>Stage {step + 1}/{agentSteps.length}: <strong>{current.label}</strong></span>
              <span className="console__meter"><span style={{ width: `${((step + 1) / agentSteps.length) * 100}%` }} /></span>
            </div>
          </div>
        </div>
        <p className="lab__note" data-reveal>Illustrative trace — a simplified model of the agent loop, not production data.</p>
      </div>
    </section>
  )
}

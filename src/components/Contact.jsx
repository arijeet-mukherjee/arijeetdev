import Icon from './Icon'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact" data-reveal>
          <div className="contact__orb" aria-hidden="true" />
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s build something <span className="text-gradient">intelligent.</span></h2>
          <p>Open to conversations about AI engineering, agentic systems, full-stack products and speaking or writing collaborations.</p>
          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg"><Icon name="mail" size={18} /> {profile.email}</a>
          </div>
          <ul className="socials">
            {profile.socials.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer me" aria-label={s.label}><Icon name={s.icon} size={20} /></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

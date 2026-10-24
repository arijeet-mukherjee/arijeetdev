import { companies } from '../data/profile'

export default function Marquee() {
  const row = [...companies, ...companies]
  return (
    <div className="marquee" aria-label="Companies I have worked with">
      <p className="marquee__label">Engineering experience at</p>
      <div className="marquee__track">
        <ul>
          {row.map((c, i) => <li key={i} aria-hidden={i >= companies.length}>{c}</li>)}
        </ul>
      </div>
    </div>
  )
}

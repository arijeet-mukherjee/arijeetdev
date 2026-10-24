export default function SectionHead({ id, eyebrow, title, children }) {
  return (
    <header className="section-head" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-head__lead">{children}</p>}
    </header>
  )
}

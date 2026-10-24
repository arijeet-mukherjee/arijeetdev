import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. Designed &amp; engineered in Kolkata.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

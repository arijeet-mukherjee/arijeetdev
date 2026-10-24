import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Expertise from './components/Expertise'
import AgentLab from './components/AgentLab'
import Work from './components/Work'
import Experience from './components/Experience'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'
import './styles/main.scss'

export default function App() {
  useReveal()
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <AgentLab />
        <Work />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

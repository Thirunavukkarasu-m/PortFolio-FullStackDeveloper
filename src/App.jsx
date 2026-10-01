import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import TechMarquee from './components/TechMarquee'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Process from './components/Process'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' } })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t) }, [])
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const move = (e) => { document.documentElement.style.setProperty('--mx', e.clientX + 'px'); document.documentElement.style.setProperty('--my', e.clientY + 'px') }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <>
      <div className={`loader ${loading ? '' : 'done'}`} aria-hidden={!loading}><div className="loader-tm">TM</div><div className="small text-muted">THIRUNAVUKKARASU M</div></div>
      <div className="cursor-glow" aria-hidden="true" />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero /><About /><Skills /><TechMarquee /><Projects /><Architecture /><Process /><Experience /><Education /><Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

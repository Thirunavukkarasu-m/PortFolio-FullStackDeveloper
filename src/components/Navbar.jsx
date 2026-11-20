import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { RESUME_PATH } from '../config'
// "experience" section holds Training & Certification (no job experience is claimed)
const links = [['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['education','Education'],['contact','Contact']]
export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => { const f = () => setScrolled(scrollY > 20); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  const go = (e, id) => { e.preventDefault(); setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container d-flex align-items-center justify-content-between py-2" aria-label="Main">
        <a href="#home" className="brand" onClick={(e) => go(e, 'home')}>THIRUNAVUKKARASU M</a>
        <button className="burger d-lg-none" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([id, l]) => <a key={id} href={`#${id}`} className={`ulink ${active === id ? 'active' : ''}`} aria-current={active === id ? 'true' : undefined} onClick={(e) => go(e, id)}>{l}</a>)}
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a className="btn-accent" href={RESUME_PATH} download>Download Resume</a>
        </div>
      </nav>
    </header>
  )
}

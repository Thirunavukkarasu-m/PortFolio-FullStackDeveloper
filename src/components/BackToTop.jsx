import { useEffect, useState } from 'react'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 500); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return <button className={`btt ${show ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
}

import { useEffect, useRef } from 'react'
// anim: fade-up | fade-left | fade-right | scale-in
export default function Reveal({ anim = 'fade-up', delay = 0, className = '', children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${anim} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

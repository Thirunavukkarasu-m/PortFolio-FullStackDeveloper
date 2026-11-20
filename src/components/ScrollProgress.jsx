import { useEffect, useState } from 'react'
export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { const h = document.documentElement.scrollHeight - innerHeight; setP(h > 0 ? (scrollY / h) * 100 : 0) }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return <div className="progress-bar-top" style={{ width: p + '%' }} role="progressbar" aria-label="Scroll progress" aria-valuenow={Math.round(p)} />
}

import { marquee } from '../data/skills'
export default function TechMarquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-label="Technologies">
      <div className="track">{items.map((t, i) => <span key={i} aria-hidden={i >= marquee.length}>{t}</span>)}</div>
    </div>
  )
}

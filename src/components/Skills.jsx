import { useState } from 'react'
import { skills } from '../data/skills'
import Reveal from '../Reveal'
export default function Skills() {
  const cats = Object.keys(skills)
  const [cat, setCat] = useState(cats[0])
  return (
    <section id="skills" className="sec alt">
      <div className="container">
        <Reveal><h2 className="sec-title">Skills</h2></Reveal>
        <div className="d-flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Skill categories">
          {cats.map((c) => <button key={c} role="tab" aria-selected={cat === c} className={`pill ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <Reveal anim="scale-in"><ul className="chips big" role="tabpanel">{skills[cat].map((s) => <li key={s}>{s}</li>)}</ul></Reveal>
      </div>
    </section>
  )
}

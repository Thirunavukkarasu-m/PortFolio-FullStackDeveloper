import { useState, useCallback } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from '../Reveal'
const filters = [['all','ALL'],['frontend','FRONTEND'],['fullstack','FULL STACK'],['python','PYTHON']]
export default function Projects() {
  const [f, setF] = useState('all')
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const list = projects.filter((p) => f === 'all' || p.categories.includes(f))
  return (
    <section id="projects" className="sec">
      <div className="container">
        <Reveal><h2 className="sec-title">Projects</h2></Reveal>
        <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter projects">
          {filters.map(([k, l]) => <button key={k} className={`pill ${f === k ? 'active' : ''}`} aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>)}
        </div>
        <div className="row g-4">{list.map((p, i) => <ProjectCard key={p.id} p={p} index={i} onOpen={setOpen} />)}</div>
      </div>
      {open && <ProjectModal p={open} onClose={close} />}
    </section>
  )
}

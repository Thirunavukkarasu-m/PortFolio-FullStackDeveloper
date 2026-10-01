import { useEffect, useRef } from 'react'
import { Visual } from './ProjectCard'
const S = ({ t, children }) => <div className="mb-3"><h4 className="h6 grad-t">{t}</h4>{children}</div>
export default function ProjectModal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'; ref.current?.focus()
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label={p.title} tabIndex={-1} ref={ref} onClick={(e) => e.stopPropagation()}>
        <button className="x" aria-label="Close" onClick={onClose}>✕</button>
        <span className="tag">{p.label}</span><h3 className="mt-2">{p.title}</h3>
        <div className="row g-4 mt-1">
          <div className="col-lg-5"><Visual id={p.id} />
            {p.flow && <ol className="flow">{p.flow.map((f) => <li key={f}>{f}</li>)}</ol>}
            {p.tree && <pre className="tree">{p.tree.join('\n')}</pre>}
          </div>
          <div className="col-lg-7">
            <S t="Problem"><p className="small">{p.problem}</p></S>
            <S t="Solution"><p className="small">{p.solution}</p></S>
            <S t="Features"><ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></S>
            <S t="Technologies"><ul className="chips sm">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul></S>
            <S t="Development Approach"><p className="small">{p.approach}</p></S>
            <S t="Challenges"><p className="small">{p.challenges}</p></S>
            <S t="Result"><p className="small">{p.result}</p></S>
            <div className="d-flex gap-2"><a className="btn-ghost sm" href={p.github} target="_blank" rel="noreferrer">GitHub</a>{p.liveDemo && <a className="btn-ghost sm" href={p.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

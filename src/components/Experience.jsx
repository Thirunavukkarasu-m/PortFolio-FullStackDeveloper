import { training } from '../data/experience'
import Reveal from '../Reveal'
// Id "experience" matches the nav link. No job experience is claimed; this is training & certification.
export default function Experience() {
  return (
    <section id="experience" className="sec alt">
      <div className="container">
        <Reveal><h2 className="sec-title">Training &amp; Certification</h2></Reveal>
        <div className="row g-4">{training.map((t, i) => (
          <Reveal key={t.title} delay={i * 100} className="col-md-6"><div className="card-x h-100"><span className="tag">{t.extra}</span><h3 className="h5 mt-2">{t.title}</h3><p className="text-muted small mb-1">{t.detail}</p><p className="mb-0 small">{t.org}</p><p className="mb-0 small text-muted">{t.date}</p></div></Reveal>
        ))}</div>
      </div>
    </section>
  )
}

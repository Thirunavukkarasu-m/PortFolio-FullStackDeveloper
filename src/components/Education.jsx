import { education } from '../data/experience'
import Reveal from '../Reveal'
export default function Education() {
  return (
    <section id="education" className="sec">
      <div className="container">
        <Reveal><h2 className="sec-title">Education</h2></Reveal>
        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal key={e.degree} anim="fade-right" delay={i * 100}>
              <div className="edu"><span className="dot" aria-hidden="true" />
                <div className="card-x"><span className="tag">{e.years}</span><h3 className="h5 mt-2">{e.degree}</h3><p className="mb-1">{e.school}</p><p className="mb-0 text-muted small">{e.score}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

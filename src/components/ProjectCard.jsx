import Reveal from '../Reveal'

export function Visual({ id }) {
  if (id === 1)
    return (
      <div className="vis">
        <div className="vrow">
          <b>Mon</b>
          <span>Hall A</span>
          <span>Hall B</span>
        </div>

        <div className="vrow">
          <b>Tue</b>
          <span>Hall C</span>
          <span className="on">Hall A</span>
        </div>

        <div className="vrow">
          <b>Wed</b>
          <span className="on">Hall B</span>
          <span>Hall C</span>
        </div>
      </div>
    )

  // DEVNOVA
  if (id === 2)
    return (
      <div className="vis devnova-image">
        <img
          src="/images/devnova-dashboard.png"
          alt="DevNova Full-Stack Technology Blogging Platform"
        />
      </div>
    )

  if (id === 3)
    return (
      <div className="vis">
        <div className="d-flex gap-2 mb-2">
          {['Total', 'Active', 'Depts'].map((x) => (
            <span key={x} className="kpi">
              {x}
            </span>
          ))}
        </div>

        {[70, 50, 85].map((w, i) => (
          <div
            key={i}
            className="bar"
            style={{ width: w + '%' }}
          />
        ))}
      </div>
    )

  if (id === 4)
    return (
      <div className="vis">
        <div className="slots">
          {Array.from({ length: 12 }, (_, i) => (
            <i
              key={i}
              className={
                [1, 5, 6, 10].includes(i)
                  ? 'tk'
                  : i === 3
                  ? 'sel'
                  : ''
              }
            >
              P{i + 1}
            </i>
          ))}
        </div>
      </div>
    )

  if (id === 5)
    return (
      <div className="vis d-flex gap-2">
        <div className="flex-fill">
          <div
            className="bar"
            style={{ width: '90%' }}
          />
          <div
            className="bar"
            style={{ width: '60%' }}
          />
        </div>

        <div className="cartbox">
          Cart
          <br />
          3
        </div>
      </div>
    )

  return (
    <div className="vis text-center">
      <div className="conv">
        100 <small>USD</small>
      </div>

      <div className="swap">⇅</div>

      <div className="conv">
        — <small>INR</small>
      </div>
    </div>
  )
}

export default function ProjectCard({ p, index, onOpen }) {
  return (
    <Reveal
      delay={(index % 3) * 80}
      className="col-md-6 col-xl-4"
    >
      <article
        className={`card-x h-100 pcard ${
          p.featured ? 'featured' : ''
        }`}
      >
        <Visual id={p.id} />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="num">
            {String(p.id).padStart(2, '0')}
          </span>

          <span className="tag">
            {p.label}
          </span>
        </div>

        <h3 className="h5 mt-2">
          {p.title}
        </h3>

        <p className="text-muted small">
          {p.description}
        </p>

        <ul className="chips sm">
          {p.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <ul className="feat">
          {p.features.slice(0, 4).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="d-flex flex-wrap gap-2 mt-auto pt-2">
          <a
            className="btn-ghost sm"
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {p.liveDemo && (
            <a
              className="btn-ghost sm"
              href={p.liveDemo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}

          <button
            className="btn-accent sm"
            onClick={() => onOpen(p)}
          >
            View Details
          </button>
        </div>
      </article>
    </Reveal>
  )
}
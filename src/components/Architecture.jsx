import Reveal from '../Reveal'
const layers = [['Frontend',['React.js','HTML','CSS','Bootstrap','JavaScript']],['REST API',[]],['Backend',['Django','Flask','Python']],['Database',['PostgreSQL','MySQL']],['Tools',['Git','GitHub','Postman']]]
export default function Architecture() {
  return (
    <section id="architecture" className="sec alt">
      <div className="container">
        <Reveal><h2 className="sec-title">Full Stack Capabilities</h2></Reveal>
        <div className="arch">
          {layers.map(([t, items], i) => (
            <Reveal key={t} delay={i * 100} anim="scale-in">
              {i > 0 && <div className="arrow" aria-hidden="true">↓</div>}
              <div className={`card-x text-center ${items.length ? '' : 'api'}`}><b>{t}</b><ul className="chips sm center mb-0 mt-2">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

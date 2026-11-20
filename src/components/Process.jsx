import Reveal from '../Reveal'
const steps = [['01','Understand'],['02','Design'],['03','Develop'],['04','Test & Deploy']]
export default function Process() {
  return (
    <section id="process" className="sec">
      <div className="container">
        <Reveal><h2 className="sec-title">How I Build Applications</h2></Reveal>
        <ol className="timeline">{steps.map(([n, t], i) => <Reveal key={n} delay={i * 120} anim={i % 2 ? 'fade-left' : 'fade-right'}><li><span className="num">{n}</span><b>{t}</b></li></Reveal>)}</ol>
      </div>
    </section>
  )
}

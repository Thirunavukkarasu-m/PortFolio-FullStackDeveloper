import Reveal from '../Reveal'
const build = ['Responsive Web Applications','CRUD Applications','REST API Integrated Applications','Database-driven Applications','Booking Platforms','Automation Systems']
const stats = [['6+','Projects'],['2','Development Tracks'],['Frontend','React.js'],['Backend','Python']]
export default function About() {
  return (
    <section id="about" className="sec">
      <div className="container">
        <Reveal><h2 className="sec-title">About Me</h2></Reveal>
        <div className="row g-4">
          <Reveal anim="fade-right" className="col-lg-7">
            <p>I am a Computer Science Engineering graduate focused on frontend development and Python full stack development, with hands-on work in React.js, JavaScript, HTML, CSS, Bootstrap, Python, Django, Flask, REST APIs, SQL, MySQL and PostgreSQL.</p>
            <p className="text-muted">I build CRUD applications, integrate REST APIs, and develop database-driven applications with state management, LocalStorage persistence, authentication and responsive design. I debug carefully and use Git/GitHub and Postman day to day.</p>
            <h3 className="h5 mt-4">What I Build</h3>
            <ul className="chips">{build.map((b) => <li key={b}>{b}</li>)}</ul>
          </Reveal>
          <Reveal anim="fade-left" className="col-lg-5">
            <div className="row g-3">{stats.map(([n, l]) => <div className="col-6" key={l}><div className="card-x text-center"><div className="stat">{n}</div><div className="text-muted small">{l}</div></div></div>)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

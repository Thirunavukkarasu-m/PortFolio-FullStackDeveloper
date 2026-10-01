import { RESUME_PATH, PROFILE_IMG } from '../config'
const badges = ['React','Python','HTML','CSS','JavaScript','Django','Flask','SQL']
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grid-bg" aria-hidden="true" /><div className="glow" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 hero-text">
            <p className="eyebrow su s1">Frontend Developer | Python Full Stack Developer</p>
            <h1 className="su s2">Hi, I'm <span className="grad">Thirunavukkarasu M</span></h1>
            <h2 className="h4 text-muted su s3">Frontend Developer &amp; Python Full Stack Developer</h2>
            <p className="lead-p su s3">Computer Science Engineering graduate focused on building responsive, component-based web applications with React.js, JavaScript, HTML5, CSS3 and Bootstrap, along with backend applications using Python, Django and Flask.</p>
            <div className="d-flex flex-wrap gap-3 su s4">
              <a href="#projects" className="btn-accent" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>View My Projects</a>
              <a href={RESUME_PATH} download className="btn-ghost">Download Resume</a>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="profile-img" src={PROFILE_IMG} alt="Portrait of Thirunavukkarasu M" width="160" height="170" />
            <div className="code-card" role="img" aria-label="Stylised code editor showing a developer profile object">
              <div className="dots"><i /><i /><i /></div>
<pre>{`const dev = {
  name: "Thirunavukkarasu M",
  frontend: ["React", "JavaScript"],
  backend: ["Python", "Django", "Flask"],
  data: ["PostgreSQL", "MySQL"],
}`}</pre>
              {badges.map((b, i) => <span key={b} className={`fbadge fb${i}`} aria-hidden="true">{b}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-ind" aria-hidden="true"><span /></div>
    </section>
  )
}

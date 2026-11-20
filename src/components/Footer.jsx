import { EMAIL, GITHUB_PROFILE, LINKEDIN } from '../config'
export default function Footer() {
  return (
    <footer className="foot">
      <div className="container text-center">
        <div className="brand mb-1">THIRUNAVUKKARASU M</div>
        <p className="text-muted small">Frontend Developer | Python Full Stack Developer</p>
        <div className="d-flex justify-content-center gap-3 mb-3"><a className="ulink" href={GITHUB_PROFILE}>GitHub</a><a className="ulink" href={LINKEDIN}>LinkedIn</a><a className="ulink" href={`mailto:${EMAIL}`}>Email</a></div>
        <p className="small text-muted mb-2">© 2026 Thirunavukkarasu M. Built with React.js.</p>
        <button className="btn-ghost sm" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
      </div>
    </footer>
  )
}

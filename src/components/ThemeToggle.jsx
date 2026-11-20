export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {['dark', 'light'].map((t) => (
        <button key={t} className={theme === t ? 'active' : ''} aria-pressed={theme === t} onClick={() => setTheme(t)}>{t === 'dark' ? 'Dark' : 'Light'}</button>
      ))}
    </div>
  )
}

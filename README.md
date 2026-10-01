# Thirunavukkarasu M — Portfolio

Responsive React portfolio for a Frontend Developer and Python Full Stack Developer: dark/light theme, six projects with filtering and a details modal, skills, full-stack architecture, training, education and a mailto contact form.

## Features
Sticky navbar with active-section indicator, scroll progress, back-to-top, loading screen, IntersectionObserver scroll animations (respects `prefers-reduced-motion`), theme persisted in LocalStorage, SEO and Open Graph meta, accessible focus states and ARIA labels.

## Tech stack
React 18, Vite, Bootstrap 5, custom CSS. No other UI libraries.

## Structure
```
src/components/   section and UI components
src/data/         projects.js, skills.js, experience.js
src/styles/       global.css, animations.css
src/config.js     email, phone, resume path, GitHub and LinkedIn URLs
public/resume/    put your resume PDF here
```

## Commands
```
npm install
npm run dev
npm run build
npm run preview
```

## Customise
- **Resume:** save your PDF as `public/resume/Thirunavukkarasu_M_Resume.pdf` (or edit `RESUME_PATH` in `src/config.js`).
- **Profile photo:** replace `public/profile.svg` with your photo; if it is a .jpg/.png, update `PROFILE_IMG` in `src/config.js`.
- **GitHub / LinkedIn profile:** edit `GITHUB_PROFILE` and `LINKEDIN` in `src/config.js`.
- **Project links:** replace `"#"` in `src/data/projects.js` (marked with comments). Projects with `liveDemo: null` hide the Live Demo button.
- **Email:** the two resumes list different emails. Set `EMAIL` in `src/config.js` to your preferred one; it is used everywhere.

## Deploy
- **Vercel / Netlify:** import the repo; build command `npm run build`, output `dist`.
- **GitHub Pages:** `npm run build`, then publish the `dist` folder (e.g. with the `gh-pages` package or a GitHub Actions workflow). `base: './'` is already set.

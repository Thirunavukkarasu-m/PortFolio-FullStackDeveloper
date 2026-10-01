# Thirunavukkarasu M — Portfolio

A responsive personal portfolio website built with **React and Vite**, showcasing my skills, projects, education, training, and experience as a **Frontend Developer and Python Full Stack Developer**.

🌐 **Portfolio:** https://thirunavukkarasu-m.github.io/My-Portfolio/

## ✨ Features

* Responsive design for desktop, tablet, and mobile
* Dark / Light theme toggle
* Sticky navigation bar
* Active section indicator
* Scroll progress indicator
* Back-to-top button
* Loading screen
* Scroll-based animations using IntersectionObserver
* Respects `prefers-reduced-motion`
* Projects section with filtering
* Project details modal
* Skills and technology sections
* Full-stack architecture section
* Education and training sections
* Contact form with **EmailJS**
* GitHub and LinkedIn profile links
* Resume download
* SEO and Open Graph meta tags
* Accessible focus states and ARIA labels
* Theme preference stored using LocalStorage

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Bootstrap 5
* Vite

### Services & Tools

* EmailJS
* Git
* GitHub
* VS Code

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── profile.svg
│   └── resume/
│       └── Thirunavukkarasu_M_Resume.pdf
│
├── src/
│   ├── components/
│   │   └── section and UI components
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   │
│   ├── config.js
│   └── ...
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Thirunavukkarasu-m/PortFolio-FullStackDeveloper.git
```

### 2. Navigate to the project

```bash
cd PortFolio-FullStackDeveloper
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on the local development server shown in your terminal.

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## ⚙️ Customization

### Resume

Place your resume PDF inside:

```text
public/resume/Thirunavukkarasu_M_Resume.pdf
```

The resume path can be updated in:

```text
src/config.js
```

### Profile Photo

Replace the existing profile image inside the `public` folder.

If you use a different image filename or format, update the corresponding `PROFILE_IMG` value in:

```text
src/config.js
```

### GitHub & LinkedIn

Update your profile URLs in:

```text
src/config.js
```

### Email & Contact Information

Update your email, phone number, and location in:

```text
src/config.js
```

The contact form uses **EmailJS** to send messages directly from the portfolio.

### Projects

Project information is maintained in:

```text
src/data/projects.js
```

Update project titles, descriptions, technologies, GitHub repositories, and live demo URLs there.

## 📧 Contact Form

The portfolio uses **EmailJS** for the contact form.

The form collects:

* Name
* Email
* Message

After successful submission, the message is sent through the configured EmailJS service.

> EmailJS credentials should be stored using environment variables for production deployments rather than hardcoding configuration values in source files.

## 🌐 Deployment

This project can be deployed to platforms such as:

* GitHub Pages
* Netlify
* Vercel

### Production Build

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

For deployment platforms such as Netlify or Vercel:

```text
Build command: npm run build
Output directory: dist
```

## 📄 License

This project is a personal portfolio website created by **Thirunavukkarasu M**.

You are welcome to use the project structure and ideas for learning, but please replace personal information, images, links, and content with your own.

---

### 👨‍💻 About Me

**Thirunavukkarasu M**
Frontend Developer | Python Full Stack Developer

* 💻 React & JavaScript
* 🐍 Python & Django
* 🗄️ PostgreSQL
* 🔗 REST APIs
* 🌐 Responsive Web Development
* 🚀 Open to Software Development Opportunities

**Portfolio:**
https://thirunavukkarasu-m.github.io/My-Portfolio/

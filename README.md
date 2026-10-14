# Nishie Groe — Software Engineer Portfolio

<img width="406" height="137" alt="image" src="https://github.com/user-attachments/assets/421bde2d-5fed-47b2-bdef-208495b2980b" />

Welcome to the personal portfolio of **Nishie Groe**, a Full-Stack Software Engineer at **USG** specializing in React, Micro-Frontends, AWS, CI/CD, and UI/UX. This site showcases my experience, skills, and contact information.

## 🚀 About Me

- **Name:** Nishie Groe
- **Role:** Full-Stack Software Engineer
- **Experience:** 7+ years
- **Location:** Lake in the Hills, IL
- **Specialties:** React, TypeScript, Java, AWS, Micro-Frontends, UI/UX, CI/CD

I am passionate about building performant, accessible web applications and leading teams to deliver impactful solutions.

---

## 🛠️ Tech Stack

- **Languages:** JavaScript, TypeScript, Java, Python, SQL, Lua
- **Frameworks/Libraries:** React, Redux, Next.js, Angular, Node.js, Express, Cypress, Jest
- **Cloud & DevOps:** AWS, Docker, Jenkins, Drone CI/CD
- **Databases:** PostgreSQL, MySQL, MongoDB
- **Other Tools:** MUI, Grafana, Jira, Git

## 💼 Employment History

### USG (2025 - Present)
- Full-Stack Developer (Chicago, IL)

### John Deere (2017 - 2024)
- Senior Software Engineer (2022 - 2024)
  - Led UI/UX modernization, created ReactJS Micro-Frontends, and improved CI/CD pipelines.
  - Conducted international knowledge transfer and upskilled teams on ReactJS and UI/UX best practices.
  - Migrated legacy systems to AWS and modern web stacks.
- Software Engineer (2017 - 2022)
  - Optimized SDLC, improved team productivity, and migrated applications to AWS.
  - Led SSO migrations and decommissioned legacy applications for efficiency.

## 🧭 How the site is built

- **Pages:** Home, Projects, one page per project, Experience, Resume and Contact, each at its own URL
  (React Router). There is no in-page scrolling navigation: every link goes to a real page, which opens
  at the top with focus on its heading.
- **Content:** all copy lives in `src/data/content.ts`. Add a project by adding an entry to `projects`
  (screenshots go in `public/` as `.webp`) and a matching route in `pageMeta`.
- **Build:** `npm run build` runs Vite, then `scripts/write-route-pages.ts` writes a real
  `index.html` for every page (with its own title and description) plus `sitemap.xml`.
- **Accessibility:** skip link, landmarks, one `h1` per page, visible focus, no motion, and colors
  that pass WCAG AA in light and dark mode. See `THEME_GUIDE.md` before changing colors.

---

## 📦 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/nishiegroe/NishieGroePersonalWebsite.git
   cd NishieGroePersonalWebsite
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

---

## 📝 Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint codebase
- `npm run compress:og` — Compress Open Graph image
- `npm run compress:profile` — Compress profile picture
- `npm run compress:photos` — Compress portfolio photos

---

## 📄 License

This project is for personal portfolio use. Feel free to reference the code for learning purposes.

---

## 📬 Contact

- **Email:** [NishieGroe@gmail.com](mailto:NishieGroe@gmail.com)
- **Phone:** [(815) 219-9863](tel:815-219-9863)
- **LinkedIn:** [Nishie Groe](https://www.linkedin.com/in/nishie-groe/)
- **Website:** [https://nishiegroe.com](https://nishiegroe.com)

---

## 🌐 Live Site

[https://nishiegroe.com](https://nishiegroe.com)

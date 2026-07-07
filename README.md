# Sayyed Ahmed Hussain — Developer Portfolio

A dark, 3D-animated portfolio built with React, Three.js (via React Three
Fiber + Drei), GSAP-friendly scroll reveals (Framer Motion), and Tailwind
CSS v4. Showcases four MERN-stack projects with a draggable carousel and
detailed case-study modals.

## Stack

- **React 19 + Vite** — app shell and dev server
- **Three.js / @react-three/fiber / @react-three/drei** — hero galaxy scene, floating orbs, rotating 3D shape
- **@react-three/postprocessing** — bloom on the hero scene
- **Framer Motion** — scroll reveals, page transitions, tilt cards, typed text
- **Tailwind CSS v4** — utility styling, theme tokens in `src/index.css`
- **react-icons** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. The site is a single page — every nav link
scrolls to a section (`#about`, `#skills`, `#projects`, `#experience`,
`#contact`).

## Project structure

```
src/
  components/     UI sections and shared pieces (Navbar, Hero, About, ...)
  three/          React Three Fiber scenes (HeroScene, RotatingShape)
  data/           Content: projects.js, skills.js, experience.js
  hooks/          useMousePosition, useIsMobile
  index.css       Tailwind v4 theme tokens (colors, fonts, keyframes)
```

## Customizing content

Everything you'll want to personalize lives in `src/data/`:

- **`projects.js`** — your 4 (or more) projects. Add a new object to the
  array and it automatically appears in the carousel and gets its own
  detail modal — no other file needs to change.
- **`skills.js`** — grouped skills with progress-bar percentages, plus
  the flat list used for the floating badge field.
- **`experience.js`** — timeline entries on the Experience section.

Update the name, tagline, email, and social links directly in
`Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.

### Resume download

Drop your PDF into `public/resume.pdf` — the Hero section's "Download
Resume" button already points at `/resume.pdf`.

### Contact form (EmailJS)

The contact form validates and shows a working send animation, but
actual delivery is stubbed out so the project runs with zero external
accounts. To wire it up for real:

1. Create a free account at [emailjs.com](https://www.emailjs.com) and
   set up a service + template.
2. `npm install @emailjs/browser`
3. In `src/components/Contact.jsx`, fill in `EMAILJS_SERVICE_ID`,
   `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY`, then uncomment the
   `emailjs.send(...)` line in `handleSubmit`.

## Performance notes

- The hero 3D scene and the rotating About-section shape are lazy
  loaded (`React.lazy` + `Suspense`) so they don't block first paint.
- `useIsMobile` reduces particle counts and disables postprocessing
  bloom on small viewports to keep frame rate smooth.
- The custom cursor and mouse-trail effects are disabled on touch
  devices automatically.
- Images use `loading="lazy"`.

## Build & deploy

```bash
npm run build    # outputs static site to dist/
npm run preview  # sanity-check the production build locally
```

`dist/` is a static site and deploys as-is to **Vercel**, **Netlify**,
**GitHub Pages**, or any static host:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section` with ids).
- Visible focus rings on every interactive element (`.focus-ring`).
- `prefers-reduced-motion` is respected globally (see `index.css`).
- All icon-only buttons/links have `aria-label`s.

# Portfolio Project Structure — Explained

This document explains the folder/file template created for your React + TailwindCSS portfolio.
Nothing here contains real code yet — these are empty files arranged so you (and any tool) know exactly where each piece of code should live.

---

## The big picture

A React app is just a tree of **components** (reusable UI pieces) that get rendered to the page.
The folders below exist to keep those components organized by *what job they do*, so the project stays easy to navigate as it grows.

The render flow for your portfolio looks like this:

```
main.jsx  ->  App.jsx  ->  pages/Home.jsx  ->  sections/(Hero, About, Skills, Projects, Contact)
                                              ->  which use components/(Navbar, Footer, Button, Card)
                                              ->  which read content from data/(projects, skills)
```

Read that top to bottom: the entry file boots React, `App` is the root, `Home` lays out the page, sections are the big blocks, and components/data are the smaller reusable parts they pull from.

---

## Root files (project configuration)

| File | What it's for |
|------|---------------|
| `index.html` | The single HTML page the whole app loads into. React injects everything into a `<div id="root">` here. |
| `package.json` | Lists your dependencies (React, Tailwind, etc.) and scripts like `npm run dev`. The project's "manifest". |
| `vite.config.js` | Config for **Vite**, the build tool that runs your dev server and bundles the app for production. |
| `tailwind.config.js` | Tailwind settings — where you customize colors, fonts, spacing, and tell Tailwind which files to scan for classes. |
| `postcss.config.js` | Wires Tailwind into the CSS build pipeline (Tailwind runs as a PostCSS plugin). |
| `jsconfig.json` | Helps your editor understand the project (path aliases, autocomplete). Optional but convenient. |
| `.env` | Real environment variables (secret keys, API URLs). **Not committed to git.** |
| `.env.example` | A safe, shareable template showing which env variables are needed (without the secret values). |
| `.gitignore` | Tells git which files/folders to ignore (e.g. `node_modules`, `.env`). |
| `README.md` | Project overview / setup instructions for anyone visiting the repo. |

---

## `public/`

Static files served **as-is**, without being processed by the build tool. Anything here is reachable by a direct URL.

| Path | What it's for |
|------|---------------|
| `public/images/` | Images you reference by absolute path (e.g. social preview image, resume PDF). |
| `public/icons/` | Standalone icon/favicon files. |

> Rule of thumb: if a file never changes and just needs a stable URL, put it in `public/`. If an image is *imported* into a component, put it in `src/assets/` instead (next section).

---

## `src/` — your actual application

This is where all the code lives.

### Entry & global files

| File | What it's for |
|------|---------------|
| `src/main.jsx` | The **entry point**. Mounts the React app into `index.html`'s root div. This is the first JS that runs. |
| `src/App.jsx` | The **root component**. The top of your component tree; usually sets up routing/layout. |
| `src/index.css` | The global stylesheet where Tailwind's directives live. Loaded once for the whole app. |

### `src/assets/`
Images and fonts that are **imported into components** (so the build tool optimizes and fingerprints them).

- `assets/images/` — photos, illustrations, logos used inside components.
- `assets/fonts/` — custom font files if you self-host fonts.

### `src/components/`
Small, **reusable** UI pieces used across multiple sections/pages.

- `components/layout/` — structural pieces that frame the page:
  - `Navbar.jsx` — top navigation bar.
  - `Footer.jsx` — bottom footer.
- `components/ui/` — generic building blocks:
  - `Button.jsx` — a styled button reused everywhere.
  - `Card.jsx` — a styled container (e.g. for a project card).

> Think "Lego bricks." If you'd reuse it in more than one place, it belongs here.

### `src/sections/`
The **big content blocks** of your one-page portfolio. Each maps to a section a visitor scrolls through.

- `Hero.jsx` — the top intro / headline.
- `About.jsx` — about-me section.
- `Skills.jsx` — your skills.
- `Projects.jsx` — your work/projects.
- `Contact.jsx` — contact form or links.

> Sections are assembled together inside `pages/Home.jsx`.

### `src/pages/`
Full **pages**. For a portfolio you often only need one, plus a fallback.

- `Home.jsx` — stitches all the sections together into the main page.
- `NotFound.jsx` — the 404 page shown for unknown URLs.

### `src/hooks/`
Custom **React hooks** — reusable bits of stateful logic.

- `useScrollSpy.js` — example hook to track which section is currently in view (handy for highlighting the active nav link).

### `src/context/`
React **Context** providers — app-wide state shared without passing props down manually.

- `ThemeContext.jsx` — example for dark/light mode toggling.

### `src/data/`
Your **content as plain data**, kept separate from the UI. Edit your info here without touching components.

- `projects.js` — the list of your projects (title, description, links, image).
- `skills.js` — the list of your skills.

> This separation means updating your portfolio content = editing a data file, not redesigning a component.

### `src/lib/`
Generic **helper/utility functions** not tied to React.

- `utils.js` — small helpers (formatting, class-name merging, etc.).

### `src/styles/`
Extra stylesheets beyond `index.css`.

- `globals.css` — additional global styles if you need them.

### `src/constants/`
Fixed **values reused across the app** so they're defined in one place.

- `index.js` — e.g. nav links, social URLs, site metadata.

---

## Why organize it this way?

1. **Predictable** — anyone (or any tool) can guess where a file lives.
2. **Separation of concerns** — content (`data/`), logic (`hooks/`, `lib/`), and presentation (`components/`, `sections/`) are kept apart.
3. **Scalable** — adding a new section or page doesn't create a mess.
4. **Reusable** — shared pieces live in `components/`, so you don't copy-paste UI.

---

## What's next (when you're ready)

This is just the skeleton. To make it run you'll eventually need to:

1. Fill `package.json` with dependencies and install them (`npm install`).
2. Add the Tailwind directives to `src/index.css`.
3. Configure `tailwind.config.js`, `vite.config.js`, and `postcss.config.js`.
4. Write the entry code in `main.jsx` and `App.jsx`.
5. Build out each section and component.

Ask me when you want any of those filled in.

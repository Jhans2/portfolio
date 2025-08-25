# Jatin Hans — IT Portfolio (React + Vite + Tailwind)

A clean, modern portfolio starter built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Quickstart

1) Install Node.js **18+** (https://nodejs.org)
2) In this folder, run:
```bash
npm install
npm run dev
```
The dev server prints a local URL. Open it in your browser.

## Build for production
```bash
npm run build
npm run preview
```

## Customize
- Update your details in `src/App.jsx` (name, email, socials, projects, experience).
- Replace `/public/resume.pdf` with your actual resume file and update links if needed.
- Optionally add a profile photo to `/public/profile.jpg` and uncomment the image in the Hero section.

## Deploy (two easy options)

### Option A — Vercel (recommended)
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Root directory: `/`. Hit **Deploy**.

### Option B — GitHub Pages
1. Push to GitHub.
2. Install gh-pages: `npm i -D gh-pages`
3. Add to `package.json`:
```json
"homepage": "https://YOUR_GH_USERNAME.github.io/REPO_NAME",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
4. Run: `npm run deploy`

---

Made with ❤️ using React + Tailwind

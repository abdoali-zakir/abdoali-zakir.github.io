# Portfolio — React + Tailwind + Framer Motion

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy to GitHub Pages (abdoali-zakir.github.io)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically on every push to `main`.

One-time setup on GitHub:
1. Push this project to your `abdoali-zakir.github.io` repo (replacing its contents).
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the site rebuilds and deploys automatically within ~1 minute.

## Your resume PDF

Put `Abdoali_Zakir_Resume.pdf` in the `public/` folder (same folder as
`favicon.svg`). Anything in `public/` is copied as-is to the site root at
build time, so `public/Abdoali_Zakir_Resume.pdf` becomes
`https://abdoali-zakir.github.io/Abdoali_Zakir_Resume.pdf` — matching the
links already wired up in `src/data.js`.

## Editing content

Everything text-based — bio, experience, projects, skills, tech graph edges —
lives in `src/data.js`. Edit that one file for content changes; component
files handle layout/animation only.

## Themes

Same 5 themes as before (Light / Dark / Cyberpunk / Matrix / Minimal), now
driven by `src/hooks/useTheme.js` + CSS variables in `src/index.css`. Dots are
in the nav, top-right. Defaults to Dark per the "premium dark mode" brief —
change the default in `useTheme.js` if you'd rather default to Light.

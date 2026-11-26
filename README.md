# Modern Editorial Portfolio

A responsive React + Vite portfolio starter for Meas Diyamong, using a warm off-white editorial visual system, large typography, restrained terracotta accents and subtle motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Use the project directory as the Vercel root, with `npm run build` as the build command and `dist` as the output directory. `vercel.json` rewrites the `/about` and `/projects/:slug` routes to `index.html` so direct visits and refreshes work with the client-side router.

## Update your content

Most profile details, projects, skills, experience and education live in `src/data/portfolio.js`.

- Replace placeholder project image URLs with your own screenshots when ready.
- Replace `#` social links with real profile URLs.
- Add detailed case-study pages later; current project cards intentionally act as a visual showcase until project details are ready.
- Verify contact details before publishing publicly.

## Stack

- React 19
- Vite 6
- Framer Motion
- Lucide React
- Custom CSS (chosen over Tailwind for precise editorial art direction)

The page uses Google Fonts and remote Unsplash image URLs, so those assets need an internet connection.

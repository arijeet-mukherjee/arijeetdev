# arijeetdev — Arijeet Mukherjee

Personal site of Arijeet Mukherjee, Software Development Engineer at ServiceNow working on Agentic AI, Generative AI and full-stack engineering.

[Live site](https://arijeetdev.vercel.app/)

## Stack

- React 18 + Vite, Sass
- Prerendered at build time (`scripts/prerender.js`) so search engines get full HTML
- SEO: meta + Open Graph + Twitter cards, JSON-LD `Person` schema, sitemap, robots, web manifest
- Dark / light theme, scroll reveals, canvas neural-network hero, animated SVG illustrations — all respecting `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build + prerender into dist/
npm run preview  # serve dist/
```

All copy lives in `src/data/profile.js`. If the site moves to a custom domain, update the URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

# Vite → Next.js migration notes

## Setup
```
npm install
cp .env.local.example .env.local   # fill in your real EmailJS values
npm run dev
```

## What moved where
- `src/main.tsx` → `src/app/page.tsx` (composes all sections) + `src/app/layout.tsx` (root `<html>`/`<body>`, page metadata)
- `src/index.css` → `src/app/globals.css` (de-duplicated the repeated `@import "tailwindcss";`)
- `vite.config.ts` (`@tailwindcss/vite`) → `postcss.config.mjs` (`@tailwindcss/postcss`) — Next.js uses PostCSS, not the Vite plugin, for Tailwind v4
- `src/home.tsx`, `src/about.tsx`, `src/projects.tsx`, `src/footer.tsx` → `src/components/*.tsx`, each given `"use client"` since they use hooks/event handlers (Server Components can't)
- `src/assets/*` → `public/assets/*`, and every `import img from "./assets/x.png"` became a plain string path (`"/assets/x.png"`). This was the simplest low-risk path; migrating to `next/image` later would need this changed again (its imports return an object, not a string) but gets you automatic optimization.

## ⚠️ Needs your attention
Two files came through as **empty (0 bytes)** in the `.rar` you sent — likely a compression issue on your end:
- `src/header.tsx` → rebuilt as `src/components/Navbar.tsx`, a **placeholder** using the `.navbar`/`.nav-menu` CSS already in your `globals.css` plus the site's pill-button visual language. Not your real nav.
- `src/contract.tsx` → rebuilt as `src/components/ContactSection.tsx`, a **placeholder** wired to `@emailjs/browser` (since that's a real dependency in your `package.json`). You need to fill in your real EmailJS service ID / template ID / public key in `.env.local`.

Also `src/assets/project-2.png` was 0 bytes — the "Dev-Stack" project card will show a broken image until you re-add that file.

Please re-send the real `header.tsx`, `contract.tsx`, and `project-2.png` and I'll swap the placeholders out for your actual code.

## Everything else
`Home.tsx`, `AboutSection.tsx`, `ProjectsSection.tsx` (including your real project links — webjonathan.netlify.app, dev-stack-silk.vercel.app), and `Footer.tsx` are ported from your actual working code, not reconstructed.

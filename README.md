# Hamid Ziyan Portfolio

Suggested repository name: `hamid-ziyan-portfolio`

## Overview
A single-page portfolio for a product management and software testing profile. The hero is styled as a bug-report ticket. Content is based only on the resume.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Customize
- All text lives in `data/content.js` (profile, ticket, projects, experience, skills, education).
- Colors for light and dark mode are variables at the top of `app/globals.css`.
- Fonts are set in `app/layout.js`.

## Deploy
Push to GitHub, import the repo in Vercel, keep the Next.js preset, and deploy.

## CV and project images
- CV: replace `public/Hamid-Ziyan-CV.pdf` with your own PDF (keep the same file name).
- Project images: replace the files in `public/projects/` with real screenshots (use the same file name, or change the `image` path in `data/content.js`). PNG or JPG works; a 4:3 ratio fits best.

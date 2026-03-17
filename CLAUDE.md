# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dad Jokes app for Sumner Pediatric Dentistry — a static React SPA featuring a cartoon doctor delivering dad jokes with animations.

## Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:5173
npm run build        # production build to /dist
npm run preview      # preview production build locally
```

No test framework is configured.

## Architecture

- **Vite + React 18** — ESM-based (`"type": "module"` in package.json)
- **CSS Modules** for scoped styles (`*.module.css` files)
- Zero runtime dependencies beyond React

### Key Files

- `jokes.js` — All joke data. Each joke: `{ setup, punchline, groans, topic }` where `groans` is 1–5 severity and `topic` is a lowercase category string
- `App.jsx` — Main page component with joke cycling logic (Fisher-Yates shuffle), reveal/chuckle state machine
- `DoctorCharacter.jsx` — SVG placeholder character with float + chuckle animations; designed to be swapped for a real illustration (see swap instructions in file header)

### State Flow

App maintains a shuffled deck of jokes, optionally filtered by topic. User clicks "Next" to advance through the deck; when exhausted it reshuffles. "Reveal" shows the punchline and triggers a chuckle animation on the doctor character. Topic pills filter the deck by category.

## Deployment

Static build — drop `/dist` on any static host (Netlify, Vercel, Cloudflare Pages, etc.). No server-side code needed.

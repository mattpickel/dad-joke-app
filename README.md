# Dad Jokes — Music City Pediatrics Concierge

A fun, deployable React app featuring a cartoon doctor delivering dad jokes.

## Stack
- **Vite** + **React 18**
- CSS Modules for scoped styles
- Zero runtime dependencies beyond React

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & Deploy

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

Drop the `/dist` folder on any static host:

| Host | Command / Method |
|---|---|
| **Netlify** | Drag & drop `/dist` at netlify.com/drop, or `netlify deploy --dir=dist` |
| **Vercel** | `vercel --prod` (auto-detects Vite) |
| **Cloudflare Pages** | Connect repo → build command `npm run build`, output dir `dist` |
| **Your own server** | `rsync -av dist/ user@host:/var/www/jokes/` |

For a **subdomain** (e.g. `jokes.yourdomain.com`), point the subdomain to wherever you host the `/dist` folder. No server-side code needed — it's all static.

---

## Swapping the Character

When you have photos / a real illustration of the doctor:

1. Drop your file into `src/assets/` (PNG, SVG, WebP — all work)
2. Open `src/DoctorCharacter.jsx`
3. Follow the swap instructions at the top of the file — it's just replacing the `<svg>` with an `<img>` tag
4. Keep `className={styles.svg}` on the element so the float + chuckle animations still apply

If you want to commission a custom SVG illustration, the character dimensions are **~170px wide × ~340px tall** (portrait). The file comments explain exactly what to preserve.

---

## Adding / Editing Jokes

All jokes live in `src/jokes.js`. Each entry:

```js
{
  setup:     "Why don't scientists trust atoms?",
  punchline: "Because they make up everything!",
  groans:    3   // 1 = mild, 5 = maximum cringe
}
```

---

## Project Structure

```
src/
├── main.jsx                  # React root
├── index.css                 # Global tokens + body styles
├── jokes.js                  # All joke data
├── App.jsx                   # Main page component
├── App.module.css            # Page / layout styles
├── DoctorCharacter.jsx       # SVG placeholder character (swap here)
└── DoctorCharacter.module.css  # Float + chuckle animations
```

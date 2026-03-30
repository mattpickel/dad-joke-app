# 🦷 Background Image Implementation Spec
## Sumner Pediatric Dentistry — Dad Jokes Page

---

## The Asset
`background.png` — A Pixar/Disney-style dentist office room: warm beige walls, 
shelves with toothbrushes, a kawaii smiley tooth figurine, dental floss, and 
soft warm window light. Already has the doctor character removed.

---

## How to Use It as the Page Background

### 1. CSS Background Setup
Apply the image to the `body` or a fixed full-screen `div`:

```css
body {
  background-image: url('./background.png');
  background-size: cover;
  background-position: center top;
  background-attachment: fixed; /* parallax-lite: bg stays as content scrolls */
  background-repeat: no-repeat;
  min-height: 100vh;
}
```

### 2. Add a Frosted Overlay
The image is warm/beige — add a subtle semi-transparent overlay so white 
cards and text pop cleanly without washing out the background:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(237, 243, 250, 0.55); /* cool blue-white tint */
  backdrop-filter: blur(0px);            /* keep at 0 — image is already soft */
  z-index: 0;
  pointer-events: none;
}
```

Tune the `rgba` opacity between `0.4` and `0.65` to taste:
- `0.40` = more visible background, more warmth
- `0.65` = cleaner/more minimal, background is subtle atmosphere

### 3. Z-index Layering
All page content needs `position: relative; z-index: 1` (or higher) so it 
sits above the `::before` overlay:

```css
.page-wrapper {
  position: relative;
  z-index: 1;
}
```

### 4. Card Adjustments
With a textured background behind them, cards need a little more presence:

```css
.card {
  background: rgba(255, 255, 255, 0.92);  /* slight transparency is fine */
  backdrop-filter: blur(12px);             /* frosted glass effect */
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 40px rgba(26, 43, 60, 0.14);
}
```

### 5. Pill & Button Background
Category pills should also pick up a frosted treatment so they don't 
look flat against the warm image:

```css
.pill {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.pill.active {
  background: var(--primary);  /* solid, no blur needed */
}
```

---

## Background Positioning Tips

The image has:
- **Top portion**: Wall with shelves + items (visually interesting)
- **Bottom portion**: Lower shelf + cabinet area

For a desktop layout, `background-position: center 20%` keeps the upper 
shelf visible and centered, which looks best behind the page header.

For mobile (`max-width: 600px`), switch to:
```css
background-position: 30% top;
```
...so the kawaii tooth on the left shelf stays visible.

---

## Optional: Subtle Vignette
Add a soft dark edge vignette to ground the background and focus the eye 
on the center content:

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(26, 43, 60, 0.18) 100%
  );
  z-index: 0;
  pointer-events: none;
}
```

---

## Full Body CSS (Combined)

```css
body {
  font-family: 'Nunito', sans-serif;
  background-image: url('./background.png');
  background-size: cover;
  background-position: center 20%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(237, 243, 250, 0.52);
  z-index: 0;
  pointer-events: none;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(26,43,60,0.15) 100%);
  z-index: 0;
  pointer-events: none;
}
```

---

## What NOT to Do
- ❌ Don't set `background-attachment: fixed` on iOS (known Safari bug — use `scroll` as fallback via `@supports`)
- ❌ Don't use `filter: blur()` on the image itself — it was already exported soft/bokeh
- ❌ Don't skip the overlay — without it, white text and cards will fight the warm background tone

### iOS Safari Fix
```css
@supports (-webkit-touch-callout: none) {
  body {
    background-attachment: scroll;
  }
}
```

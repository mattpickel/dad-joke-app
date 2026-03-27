# 🦷 Sumner Pediatric Dentistry — Dad Jokes Page Redesign Specs

## Overall Direction
Refined-playful. Think "premium children's brand" — clean white space, bold typography, subtle depth, and just enough whimsy to feel fun without looking cheap. Inspired by modern DTC brands like Crayola's new identity or a Duolingo/Headspace hybrid.

---

## Color Palette

```css
--color-bg: #F0F4FA          /* cool light blue-gray background */
--color-surface: #FFFFFF      /* card surface */
--color-primary: #2AACE2      /* brand teal-blue (from logo) */
--color-primary-dark: #1A8FC0
--color-accent: #F97316       /* keep the warm orange for CTA */
--color-green: #4CAF7D        /* brand green (from logo tree) */
--color-text: #1A2B3C         /* near-black, not pure black */
--color-muted: #6B7E96        /* subtitle/helper text */
--color-border: #DDE5F0       /* pill borders */
```

---

## Typography

- **Headline** (`World-Class Dad Jokes`): Use **Fredoka One** or **Nunito ExtraBold** (Google Fonts). "Dad Jokes" in the accent orange (`--color-accent`), "World-Class" in `--color-text`.
- **Body/UI**: **Nunito** or **DM Sans** — friendly, rounded, clean.
- **Joke text** (when displayed): Large, ~28–32px, centered, `font-weight: 700`, dark navy.
- **Punchline**: Slightly lighter weight or color, with a small delay animation.

---

## Layout Changes

### Header
- Logo stays centered; increase breathing room above and below.
- Optional: Add a very subtle CSS-only animated background (few floating tooth/star shapes) — or skip for maximum crispness.

### Category Pills
- **Selected state**: Filled pill — `background: var(--color-primary)`, white text, `border-radius: 999px`.
- **Unselected state**: `background: white`, `border: 1.5px solid var(--color-border)`, text `var(--color-text)`.
- **Hover**: Lift slightly with `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`.
- All pills get `transition: all 0.15s ease`.

### Main Card
- Real depth: `box-shadow: 0 8px 32px rgba(26,43,60,0.10)` and `border-radius: 20px`.
- Top border accent: `border-top: 4px solid var(--color-primary)`.
- Increase internal padding to `48px`.
- Doctor character should be **larger** (220–250px tall), positioned to **overlap the card top edge** slightly (negative `margin-top`, sticker effect).

### Groan Meter
- Replace the empty text label with a **visual emoji-scale groan meter**: a row of 5 face emojis (😐 → 😬 → 🤣) with a sliding highlight or animated fill bar underneath.
- When a joke loads, animate the meter to a random position.
- Label styling: `font-size: 13px`, `text-transform: uppercase`, `letter-spacing: 0.08em`, `color: var(--color-muted)`.

### Joke Display Area (post-button click)
- Show joke setup in a **speech bubble** callout style, pointing toward the doctor character.
- Punchline reveals after a **1.2s delay** with a gentle fade + slide-up animation.

### CTA Button
- Keep orange, but make it **pill-shaped**: `border-radius: 999px`, `padding: 16px 40px`.
- Add warm glow: `box-shadow: 0 4px 16px rgba(249,115,22,0.35)`.
- **Hover**: scale to `1.03`, deepen shadow.
- **Active/press**: scale to `0.97` for a tactile feel.

### Character Style Toggle (Disney / Funko)
- Replace separate pills with a **segmented control** — single rounded rectangle with a sliding white pill indicator that animates between options.

---

## Micro-interactions & Animation

| Element | Animation | Duration |
|---|---|---|
| Category pill select | Color transition | 150ms |
| Button hover | `transform: scale(1.03)` + shadow | 150ms |
| Joke reveal | `fade + translateY(10px → 0)` | 300ms ease-out |
| Punchline reveal | Same, delayed | 1.2s delay |
| Groan meter fill | `width` animation | 600ms cubic-bezier |

---

## Footer
- Make "Made with ❤️ for Sumner Pediatric Dentistry" slightly more prominent: `font-weight: 600`.
- Link the practice name in `var(--color-primary)`.

---

## What to Keep
- The doctor character image (just resize and reposition)
- The orange CTA button color
- The category structure (All, Animals, Dental, Food, Kids, Medical, Music, Nature, Science, Sports, Tech, Wordplay)
- The overall centered page layout

---

## What to Remove / Simplify
- The flat gray card background → replace with white + shadow
- The plain "Groan meter:" text with nothing after it → always render the full meter UI (neutral/empty state before a joke loads)
- The generic pill borders that resemble default browser `<button>` styles

import { useState, useCallback, useRef } from 'react'
import DoctorCharacter from './DoctorCharacter'
import JOKES from './jokes'
import styles from './App.module.css'

const TOTAL = JOKES.length

// Fisher-Yates shuffle so jokes cycle in random order
function shuffled(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [deck, setDeck]           = useState(() => shuffled(JOKES))
  const [index, setIndex]         = useState(-1)
  const [revealed, setRevealed]   = useState(false)
  const [entering, setEntering]   = useState(false)   // bubble transition
  const [chuckling, setChuckling] = useState(false)
  const chuckleTimer = useRef(null)

  const current = index >= 0 ? deck[index] : null
  const seen    = index + 1  // 0 before first joke

  // ── Next joke ───────────────────────────────────────────────────────────
  const nextJoke = useCallback(() => {
    setRevealed(false)
    setEntering(false)

    const nextIndex = index + 1

    // Reshuffle when deck is exhausted
    if (nextIndex >= TOTAL) {
      setDeck(shuffled(JOKES))
      setIndex(0)
    } else {
      setIndex(nextIndex)
    }

    // Trigger bubble entrance animation on next tick
    setTimeout(() => setEntering(true), 30)
  }, [index])

  // ── Reveal punchline ─────────────────────────────────────────────────────
  const reveal = useCallback(() => {
    if (revealed) return
    setRevealed(true)

    // Chuckle animation
    clearTimeout(chuckleTimer.current)
    setChuckling(true)
    chuckleTimer.current = setTimeout(() => setChuckling(false), 600)
  }, [revealed])

  const isLast     = index >= TOTAL - 1
  const progress   = seen / TOTAL

  return (
    <div className={styles.page}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <p className={styles.brand}>Music City Pediatrics · Concierge</p>
        <h1 className={styles.title}>
          World-Class <span className={styles.accent}>Dad Jokes</span> 🎸
        </h1>
        <p className={styles.subtitle}>Complimentary groan-worthy humor since forever</p>
      </header>

      {/* ── Card ───────────────────────────────────────────────────────── */}
      <main className={styles.card}>

        {/* ── Scene ──────────────────────────────────────────────────── */}
        <div className={styles.scene}>

          {/* Character — swap DoctorCharacter internals when ready */}
          <DoctorCharacter chuckling={chuckling} />

          {/* Speech bubble */}
          <div className={styles.bubbleWrap}>
            <div className={`${styles.bubble} ${entering ? styles.bubbleVisible : ''}`}
                 aria-live="polite">
              {current ? (
                <>
                  <p className={styles.setup}>{current.setup}</p>
                  <p className={`${styles.punchline} ${revealed ? styles.punchlineVisible : ''}`}>
                    {current.punchline}
                  </p>
                </>
              ) : (
                <p className={styles.setup} style={{ opacity: 0.4 }}>
                  Hit the button to hear a joke! 👇
                </p>
              )}
            </div>

            {/* Groan meter */}
            <div className={styles.groanRow} aria-hidden="true">
              <span className={styles.groanLabel}>Groan meter:</span>
              <span className={`${styles.groanIcons} ${revealed ? styles.groanVisible : ''}`}>
                {'😩'.repeat(current?.groans ?? 0)}
              </span>
            </div>
          </div>
        </div>

        {/* ── Buttons ────────────────────────────────────────────────── */}
        <div className={styles.btnRow}>
          {current && !revealed && (
            <button className={`${styles.btn} ${styles.btnReveal}`} onClick={reveal}>
              🥁 Reveal Punchline
            </button>
          )}
          <button className={`${styles.btn} ${styles.btnNext}`} onClick={nextJoke}>
            {index < 0
              ? '🎸 Hit Me With a Joke'
              : isLast
              ? '🔁 Shuffle & Restart'
              : '⏭ Next Joke'}
          </button>
        </div>

        {/* ── Progress ───────────────────────────────────────────────── */}
        <div className={styles.progressRow} aria-label={`${seen} of ${TOTAL} jokes`}>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${progress * 100}%` }} />
          </div>
          <span className={styles.progressLabel}>{seen} / {TOTAL}</span>
        </div>

      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        Made with ❤️ for&nbsp;<strong>Music City Pediatrics Concierge</strong>
      </footer>

    </div>
  )
}

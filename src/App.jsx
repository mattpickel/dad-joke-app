import { useState, useCallback, useRef, useMemo } from 'react'
import DoctorCharacter from './DoctorCharacter'
import JOKES from './jokes'
import styles from './App.module.css'
import logo from './assets/Sumner Pediatrics logo.png'
import toothGuy from './assets/toothguy.png'

const TOPICS = [...new Set(JOKES.map(j => j.topic))].sort()
const GROAN_FACES = ['😐', '😏', '😬', '😖', '🤣']

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
  const [selectedTopic, setSelectedTopic] = useState('dental')

  const filtered = useMemo(
    () => selectedTopic ? JOKES.filter(j => j.topic === selectedTopic) : JOKES,
    [selectedTopic],
  )
  const total = filtered.length

  const [deck, setDeck]           = useState(() => shuffled(JOKES.filter(j => j.topic === 'dental')))
  const [index, setIndex]         = useState(-1)
  const [revealed, setRevealed]   = useState(false)
  const [entering, setEntering]   = useState(false)   // bubble transition
  const [chuckling, setChuckling] = useState(false)
  const chuckleTimer = useRef(null)

  const current = index >= 0 ? deck[index] : null
  const groans = current?.groans ?? 0

  // ── Change topic ─────────────────────────────────────────────────────────
  const changeTopic = useCallback((topic) => {
    setSelectedTopic(topic)
    const pool = topic ? JOKES.filter(j => j.topic === topic) : JOKES
    setDeck(shuffled(pool))
    setIndex(-1)
    setRevealed(false)
    setEntering(false)
  }, [])

  // ── Next joke ───────────────────────────────────────────────────────────
  const nextJoke = useCallback(() => {
    setRevealed(false)
    setEntering(false)

    const nextIndex = index + 1

    // Reshuffle when deck is exhausted
    if (nextIndex >= total) {
      const pool = selectedTopic ? JOKES.filter(j => j.topic === selectedTopic) : JOKES
      setDeck(shuffled(pool))
      setIndex(0)
    } else {
      setIndex(nextIndex)
    }

    // Trigger bubble entrance animation on next tick
    setTimeout(() => setEntering(true), 30)
  }, [index, total, selectedTopic])

  // ── Reveal punchline ─────────────────────────────────────────────────────
  const reveal = useCallback(() => {
    if (revealed) return
    setRevealed(true)

    // Chuckle animation
    clearTimeout(chuckleTimer.current)
    setChuckling(true)
    chuckleTimer.current = setTimeout(() => setChuckling(false), 600)
  }, [revealed])

  const isLast     = index >= total - 1

  return (
    <div className={styles.page}>

      {/* ── Card ───────────────────────────────────────────────────────── */}
      <main className={styles.card}>

        {/* ── Header ──────────────────────────────────────────────────── */}
        <header className={styles.header}>
          <a href="https://sumner.kids/" target="_blank" rel="noopener noreferrer">
            <img className={styles.logo} src={logo} alt="Sumner Pediatric Dentistry" />
          </a>
          <h1 className={styles.title}>
            World-Class <span className={styles.accent}>Dad Jokes</span> <img className={styles.toothIcon} src={toothGuy} alt="tooth character" />
          </h1>
          <p className={styles.subtitle}>Complimentary groan-worthy humor since forever</p>
        </header>

        {/* ── Scene ──────────────────────────────────────────────────── */}
        <div className={styles.scene}>

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
              <span className={styles.groanLabel}>Groan meter</span>
              <div className={styles.groanMeter}>
                {GROAN_FACES.map((face, i) => (
                  <span
                    key={i}
                    className={`${styles.groanFace} ${revealed && i < groans ? styles.groanFaceActive : ''}`}
                  >
                    {face}
                  </span>
                ))}
              </div>
              <div className={styles.groanBar}>
                <div
                  className={styles.groanFill}
                  style={{ width: revealed ? `${(groans / 5) * 100}%` : '0%' }}
                />
              </div>
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
              ? '🦷 Hit Me With a Joke'
              : isLast
              ? '🔁 Shuffle & Restart'
              : '⏭ Next Joke'}
          </button>
        </div>

      </main>

      {/* ── Topic filter ───────────────────────────────────────────────── */}
      <div className={styles.filterRow}>
        <button
          className={`${styles.pill} ${selectedTopic === null ? styles.pillActive : ''}`}
          onClick={() => changeTopic(null)}
        >
          All
        </button>
        {TOPICS.map(t => (
          <button
            key={t}
            className={`${styles.pill} ${selectedTopic === t ? styles.pillActive : ''}`}
            onClick={() => changeTopic(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        Made with ❤️ for&nbsp;<a className={styles.footerLink} href="https://sumner.kids/" target="_blank" rel="noopener noreferrer"><strong>Sumner Pediatric Dentistry</strong></a>
      </footer>

    </div>
  )
}

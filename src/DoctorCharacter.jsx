/**
 * DoctorCharacter — Animal Crossing–style Dr. Andy
 * ───────────────────────────────────────────────────────────────────────────
 * Uses the custom PNG illustration.
 * The outer wrapper preserves the float + chuckle CSS animations.
 * ───────────────────────────────────────────────────────────────────────────
 */
import styles from './DoctorCharacter.module.css'
import drAndy from './assets/drandy_cartoon.png'
import disneyDoc from './assets/disneydoc_nobg.png'
import funkoDoc from './assets/funko_nobg.png'

export const CHARACTERS = [
  { id: 'disney', label: 'Disney', src: disneyDoc },
  { id: 'funko', label: 'Funko', src: funkoDoc },
]

export default function DoctorCharacter({ chuckling, characterId = 'cartoon' }) {
  const char = CHARACTERS.find(c => c.id === characterId) ?? CHARACTERS[0]
  return (
    <div className={styles.wrap}>
      <img
        className={`${styles.svg} ${chuckling ? styles.chuckle : ''}`}
        src={char.src}
        alt={`${char.label} Dr. Andy`}
      />
    </div>
  )
}

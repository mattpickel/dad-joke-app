/**
 * DoctorCharacter — Disney-style Dr. Andy
 * ───────────────────────────────────────────────────────────────────────────
 * Uses the custom PNG illustration.
 * The outer wrapper preserves the float + chuckle CSS animations.
 * ───────────────────────────────────────────────────────────────────────────
 */
import styles from './DoctorCharacter.module.css'
import disneyDoc from './assets/disneydoc_nobg.png'

export default function DoctorCharacter({ chuckling }) {
  return (
    <div className={styles.wrap}>
      <img
        className={`${styles.svg} ${chuckling ? styles.chuckle : ''}`}
        src={disneyDoc}
        alt="Disney-style Dr. Andy"
      />
    </div>
  )
}

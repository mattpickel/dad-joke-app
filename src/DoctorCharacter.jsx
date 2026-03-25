/**
 * DoctorCharacter — Animal Crossing–style Dr. Andy
 * ───────────────────────────────────────────────────────────────────────────
 * Uses the custom PNG illustration.
 * The outer wrapper preserves the float + chuckle CSS animations.
 * ───────────────────────────────────────────────────────────────────────────
 */
import styles from './DoctorCharacter.module.css'
import drAndy from './assets/drandy_cartoon.png'

export default function DoctorCharacter({ chuckling }) {
  return (
    <div className={styles.wrap}>
      <img
        className={`${styles.svg} ${chuckling ? styles.chuckle : ''}`}
        src={drAndy}
        alt="Animal Crossing style Dr. Andy"
      />
    </div>
  )
}

/**
 * DoctorCharacter
 * ───────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER — swap this out when you have the real illustration.
 *
 * To replace with a custom image:
 *   1. Drop your PNG/SVG into src/assets/
 *   2. Import it: import docImg from '../assets/your-file.png'
 *   3. Replace the <svg> below with:
 *        <img src={docImg} alt="Doc" style={{ width: 170, filter: '...' }} />
 *
 * Keep the outer <div className={styles.wrap}> and the `chuckling` prop logic
 * so the float + chuckle CSS animations still apply automatically.
 * ───────────────────────────────────────────────────────────────────────────
 */
import styles from './DoctorCharacter.module.css'

export default function DoctorCharacter({ chuckling }) {
  return (
    <div className={styles.wrap}>
      <svg
        className={`${styles.svg} ${chuckling ? styles.chuckle : ''}`}
        viewBox="0 0 200 340"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cartoon doctor character"
      >
        {/* White coat body */}
        <path d="M18 210 Q16 182 52 174 L100 162 L148 174 Q184 182 182 210 L192 340 L8 340 Z"
              fill="#F4F6F8" stroke="#DDE2E8" strokeWidth="1.5"/>
        {/* Coat lapels */}
        <path d="M100 162 L82 206 L64 174 Z" fill="#E2EAF4"/>
        <path d="M100 162 L118 206 L136 174 Z" fill="#E2EAF4"/>
        {/* Shirt band */}
        <path d="M82 206 L100 248 L118 206 Z" fill="#5B9BD5" opacity="0.5"/>
        {/* Stethoscope */}
        <path d="M66 192 Q50 226 54 252 Q58 275 74 275 Q88 275 88 262 Q88 252 80 252 Q74 252 74 262"
              fill="none" stroke="#8899AA" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="66" cy="189" r="7.5" fill="none" stroke="#8899AA" strokeWidth="3.5"/>
        {/* Bow tie */}
        <path d="M86 166 L94 172 L86 178 Z" fill="#E63946"/>
        <path d="M114 166 L106 172 L114 178 Z" fill="#E63946"/>
        <ellipse cx="100" cy="172" rx="7" ry="5.5" fill="#E63946"/>
        {/* Neck */}
        <rect x="87" y="152" width="26" height="16" rx="9" fill="#FDBF94"/>
        {/* Ears */}
        <ellipse cx="42"  cy="112" rx="14" ry="18" fill="#FDBF94"/>
        <ellipse cx="158" cy="112" rx="14" ry="18" fill="#FDBF94"/>
        <ellipse cx="42"  cy="112" rx="9"  ry="13" fill="#EFA870" opacity="0.4"/>
        <ellipse cx="158" cy="112" rx="9"  ry="13" fill="#EFA870" opacity="0.4"/>
        {/* Head */}
        <ellipse cx="100" cy="98" rx="59" ry="64" fill="#FDBF94"/>
        {/* Fluffy white hair */}
        <ellipse cx="100" cy="38"  rx="52" ry="30" fill="#EAEAEE"/>
        <ellipse cx="56"  cy="54"  rx="28" ry="24" fill="#EAEAEE"/>
        <ellipse cx="144" cy="54"  rx="28" ry="24" fill="#EAEAEE"/>
        <ellipse cx="100" cy="46"  rx="40" ry="22" fill="#F2F2F4"/>
        <ellipse cx="92"  cy="40"  rx="16" ry="10" fill="white" opacity="0.35"/>
        {/* Forehead wrinkles */}
        <path d="M78 72 Q100 68 122 72" stroke="#EFA870" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
        <path d="M84 80 Q100 77 116 80" stroke="#EFA870" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4"/>
        {/* Glasses */}
        <rect x="60"  y="91" width="32" height="23" rx="9" fill="rgba(180,220,255,0.22)" stroke="#6B5040" strokeWidth="2.8"/>
        <rect x="108" y="91" width="32" height="23" rx="9" fill="rgba(180,220,255,0.22)" stroke="#6B5040" strokeWidth="2.8"/>
        <line x1="92"  y1="101" x2="108" y2="101" stroke="#6B5040" strokeWidth="2.5"/>
        <line x1="60"  y1="101" x2="42"  y2="104" stroke="#6B5040" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="140" y1="101" x2="158" y2="104" stroke="#6B5040" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Eyes */}
        <ellipse cx="76"  cy="102" rx="7" ry="7.5" fill="#3D2B1A"/>
        <ellipse cx="124" cy="102" rx="7" ry="7.5" fill="#3D2B1A"/>
        <circle cx="79"  cy="99" r="2.5" fill="white"/>
        <circle cx="127" cy="99" r="2.5" fill="white"/>
        {/* Eyebrows */}
        <path d="M60 89 Q76 82 92 89"  stroke="#CACACE" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M108 89 Q124 82 140 89" stroke="#CACACE" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        {/* Nose */}
        <ellipse cx="100" cy="120" rx="9" ry="7" fill="#EFA870"/>
        <circle cx="95"  cy="122" r="3.2" fill="#E8906A" opacity="0.4"/>
        <circle cx="105" cy="122" r="3.2" fill="#E8906A" opacity="0.4"/>
        {/* Rosy cheeks */}
        <ellipse cx="65"  cy="128" rx="15" ry="10" fill="#F08878" opacity="0.18"/>
        <ellipse cx="135" cy="128" rx="15" ry="10" fill="#F08878" opacity="0.18"/>
        {/* Smile */}
        <path d="M72 136 Q100 162 128 136" stroke="#5C3A1E" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M78 140 Q100 156 122 140 Q100 150 78 140 Z" fill="white" opacity="0.9"/>
        {/* Laugh lines */}
        <path d="M58 107 Q52 113 56 120" stroke="#EFA870" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5"/>
        <path d="M142 107 Q148 113 144 120" stroke="#EFA870" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5"/>
        {/* Coat pocket + pens */}
        <rect x="138" y="218" width="30" height="24" rx="5" fill="none" stroke="#CDD4DC" strokeWidth="1.5"/>
        <rect x="146" y="214" width="4.5" height="18" rx="2.5" fill="#E63946"/>
        <rect x="153" y="214" width="4.5" height="18" rx="2.5" fill="#5B9BD5"/>
        {/* Name badge */}
        <rect x="28" y="214" width="42" height="28" rx="5" fill="white" stroke="#DDE2E8" strokeWidth="1.5"/>
        <rect x="32" y="219" width="24" height="3.5" rx="2" fill="#2A9D8F" opacity="0.65"/>
        <rect x="32" y="225" width="20" height="2.5" rx="1.5" fill="#CCC"/>
        <rect x="32" y="230" width="22" height="2.5" rx="1.5" fill="#CCC"/>
        <rect x="32" y="235" width="16" height="2.5" rx="1.5" fill="#CCC"/>
      </svg>
    </div>
  )
}

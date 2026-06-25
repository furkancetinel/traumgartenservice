'use client'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/* Subtle grid texture */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Dekoratif büyük arka plan yazısı */}
      <div className={styles.bgText} aria-hidden="true">WIEN</div>

      <div className={styles.inner}>
        <div className={styles.eyebrowRow}>
          <span className={styles.dot} aria-hidden="true" />
          <p className={styles.eyebrow}>Professionelle Gartenpflege · Wien, Österreich</p>
        </div>

        <h1 className={styles.title}>
          Ihr Garten.<br />
          <span className={styles.titleAccent}>Unsere Leidenschaft.</span>
        </h1>

        <p className={styles.sub}>
          Rasenmähen, Bewässerung, Grabpflege und Grünflächenreinigung —
          termingerecht, sorgfältig und zu fairen Preisen.
        </p>

        <div className={styles.actions}>
          <button onClick={() => scrollTo('#kontakt')} className={styles.btnPrimary}>
            Kostenloses Angebot
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('#leistungen')} className={styles.btnGhost}>
            Leistungen ansehen
          </button>
        </div>

        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Rechtlich zugelassen</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Faire Festpreise</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Schnelle Terminvergabe</span>
          </div>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <button
        className={styles.scrollBtn}
        onClick={() => scrollTo('#leistungen')}
        aria-label="Nach unten scrollen"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  )
}

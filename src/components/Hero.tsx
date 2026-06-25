'use client'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/*
        ═══════════════════════════════════════════════════
        FOTOĞRAF ALANI — HERO ARKA PLANI
        Önerilen fotoğraf: Geniş açı, güzel bakımlı Viyana
        bahçesi veya peyzaj. Yatay format, yüksek çözünürlük.
        Örnek arama: "Vienna garden professional landscaping"
        Dosyayı: public/images/hero-bg.jpg olarak yükleyin
        Sonra aşağıdaki style satırını ekleyin:
        backgroundImage: "url('/images/hero-bg.jpg')"
        ═══════════════════════════════════════════════════
      */}
      <div
        className={styles.photoBg}
        style={{
          /* backgroundImage: "url('/images/hero-bg.jpg')", */
          background: '#1C3A2B'   /* ← sil ve üstündeki satırı aç */
        }}
        role="img"
        aria-label="Gepflegter Garten in Wien"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>Professionelle Gartenpflege · Wien</p>

        <h1 className={styles.title}>
          Ihr Garten.<br />
          <span className={styles.titleAccent}>Unsere Leidenschaft.</span>
        </h1>

        <p className={styles.sub}>
          Rasenmähen, Bewässerung, Grabpflege und Reinigung —
          termingerecht, sorgfältig und zu fairen Preisen.
        </p>

        <div className={styles.actions}>
          <button onClick={() => scrollTo('#kontakt')} className={styles.btnPrimary}>
            Kostenloses Angebot
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('#leistungen')} className={styles.btnGhost}>
            Leistungen ansehen
          </button>
        </div>

        <div className={styles.trust}>
          {['Rechtlich zugelassen', 'Faire Festpreise', 'Schnelle Terminvergabe'].map(t => (
            <div key={t} className={styles.trustItem}>
              <div className={styles.checkmark} aria-hidden="true">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.scrollBtn} onClick={() => scrollTo('#leistungen')} aria-label="Weiter scrollen">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  )
}

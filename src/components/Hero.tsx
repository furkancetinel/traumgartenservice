'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  const textRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = textRef.current; if (!el) return
    requestAnimationFrame(() => el.classList.add('in'))
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/*
        ═══════════════════════════════════════════
        HERO ARKA PLANI
        Dosya: public/images/hero-bg.jpg (1920×1080)
        Öneri: Geniş bahçe / peyzaj fotoğrafı
        Eklendikten sonra:
          background: '#1C3A2B'  →  sil
          backgroundImage: "url('/images/hero-bg.jpg')"  →  aç
        ═══════════════════════════════════════════
      */}
      <div
        className={styles.bg}
        style={{ background: '#1C3A2B' }}
        role="img" aria-label="Gepflegter Garten"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Sol — metin */}
        <div ref={textRef} className={styles.textCol}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Professionelle Gartenpflege · Wiener Neustadt
          </p>
          <h1 className={styles.title}>
            Ihr Garten.<br />
            <span className={styles.accent}>Unsere Leidenschaft.</span>
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
          <div className={styles.stats}>
            {[
              { n: '8+',  l: 'Leistungen' },
              { n: 'Mo–Fr', l: '07:00–18:00' },
              { n: 'Wien', l: 'Einsatzgebiet' },
            ].map(s => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ — bahçıvan fotoğrafı */}
        <div className={styles.photoCol}>
          {/*
            BAHÇİVAN FOTOĞRAFI
            Dosya: public/images/gardener.jpg
            Boyut: 480×640px — dikey format
            Öneri: "professional gardener portrait outdoor smiling"
            veya gerçek çalışan fotoğrafı
          */}
          <div className={styles.gardenerWrap}>
            <div
              className={styles.gardenerPhoto}
              style={{ backgroundImage: `url('/images/gardener.jpg')` }}
              role="img"
              aria-label="Gartenexperte von TraumGartenservice"
            />
            {/* Floating kart */}
            <div className={styles.floatCard}>
              <div className={styles.floatDot} aria-hidden="true" />
              <div>
                <div className={styles.floatTitle}>Jetzt verfügbar</div>
                <div className={styles.floatSub}>Schnelle Terminvergabe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.scrollBtn} onClick={() => scrollTo('#leistungen')} aria-label="Weiter scrollen">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  )
}

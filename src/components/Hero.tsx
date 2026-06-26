'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const ticker = [
  'Professionelle Gartenpflege',
  'Rasenmähen & Bewässerung',
  'Grabpflege & Reinigung',
  'Rollrasen verlegen',
  'Faire Festpreise',
  'Schnelle Terminvergabe',
]

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  const textRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      textRef.current?.classList.add('in')
      photoRef.current?.classList.add('in')
    }, 100)
    return () => clearTimeout(t)
  }, [])

  const items = [...ticker, ...ticker]

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        {/* Sol — metin */}
        <div ref={textRef} className={styles.textCol}>
          <p className={styles.eyebrow}>Wiener Neustadt · Gartenpflege</p>

          <h1 className={styles.title}>
            Ihr Garten,<br />
            <em>unsere</em><br />
            Leidenschaft.
          </h1>

          <p className={styles.sub}>
            Rasenmähen, Bewässerung, Grabpflege und Reinigung —
            termingerecht und zu fairen Preisen.
          </p>

          <div className={styles.actions}>
            <button onClick={() => scrollTo('#kontakt')} className={styles.btn}>
              Kostenloses Angebot anfragen
            </button>
            <button onClick={() => scrollTo('#leistungen')} className={styles.btnOutline}>
              Leistungen ansehen
            </button>
          </div>
        </div>

        {/* Sağ — bahçıvan PNG */}
        <div ref={photoRef} className={styles.photoCol}>
          <img
            src="/images/gardener.png"
            alt="Gartenexperte von TraumGartenservice"
            className={styles.gardenerImg}
          />
        </div>
      </div>

      {/* Kayan yazı bandı */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {items.map((t, i) => (
            <span key={i} className={styles.tickerItem}>
              {t} <span className={styles.tickerDot}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

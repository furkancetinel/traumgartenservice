'use client'
import { useRef, useEffect } from 'react'
import styles from './About.module.css'

const checks = [
  'Lokal ansässig und gut vernetzt in Wien',
  'Alle Leistungen rechtlich geprüft und zugelassen',
  'Flexible Terminvereinbarung nach Ihren Bedürfnissen',
  'Transparente Preisgestaltung ohne versteckte Kosten',
  'Professionelle Ausrüstung und sorgfältige Ausführung',
  'Grabpflege & Reinigung als eigene freie Gewerbe',
]

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    if (leftRef.current) obs.observe(leftRef.current)
    if (rightRef.current) obs.observe(rightRef.current)
    if (photoRef.current) obs.observe(photoRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="ueber-uns" className={styles.section}>
      {/*
        FOTOĞRAF ALANI — ÜBER UNS
        Önerilen: Ekip çalışırken veya bakımlı bahçe yakın çekim
        Arama: "garden team work professional Vienna"
        Dosya: public/images/about.jpg
      */}
      <div ref={photoRef} className={`${styles.photoCol} reveal`}>
        <div
          className={styles.mainPhoto}
          style={{
            backgroundImage: `url('/images/about.jpg')`,
            /* Fotoğraf yokken koyu yeşil gösterilir */
          }}
          role="img"
          aria-label="Das TraumGartenservice-Team bei der Arbeit"
        />
        {/* İkinci küçük fotoğraf — isteğe bağlı */}
        <div
          className={styles.accentPhoto}
          style={{
            backgroundImage: `url('/images/about-2.jpg')`,
          }}
          role="img"
          aria-label="Detailaufnahme Gartenpflege"
        />
      </div>

      <div className={styles.textCol}>
        <div ref={leftRef} className={`reveal`}>
          <p className={styles.label}>Über uns</p>
          <h2 className={styles.title}>Qualität &amp; Verlässlichkeit aus Wien</h2>
          <p className={styles.text}>
            TraumGartenservice wurde mit dem Ziel gegründet, Wienern eine
            zuverlässige und professionelle Lösung für Grünpflege und Reinigung
            zu bieten. Unser Team arbeitet mit Leidenschaft und Sorgfalt.
          </p>
          <p className={styles.text}>
            Wir legen großen Wert auf klare Kommunikation, pünktliche Ausführung
            und nachhaltige Arbeitsweise.
          </p>
        </div>

        <ul ref={rightRef} className={`${styles.list} reveal`}>
          {checks.map((item, i) => (
            <li key={i} className={styles.listItem}>
              <div className={styles.check} aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

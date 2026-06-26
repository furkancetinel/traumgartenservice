'use client'
import { useRef, useEffect } from 'react'
import styles from './About.module.css'

const checks = [
  'Lokal ansässig und gut vernetzt in der Region',
  'Flexible Terminvereinbarung nach Ihren Bedürfnissen',
  'Transparente Preisgestaltung ohne versteckte Kosten',
  'Professionelle Ausrüstung und sorgfältige Ausführung',
  'Grabpflege & Reinigung als eigene freie Gewerbe',
]

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const listRef  = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    ;[leftRef, rightRef, listRef].forEach(r => { if (r.current) obs.observe(r.current) })
    return () => obs.disconnect()
  }, [])

  return (
    <section id="ueber-uns" className={styles.section}>
      <div ref={leftRef} className={`${styles.photoCol} reveal-left`}>
        {/*
          FOTOĞRAF: public/images/about.jpg (800×560px)
          Öneri: "gardener work professional team outdoor"
        */}
        <div className={styles.mainPhoto} style={{ backgroundImage: `url('https://fastly.picsum.photos/id/146/800/560.jpg?hmac=2cK7g9FbBfmW7_EKfB-jvijmT5e2t3PZ4hOJBvpCqSA')` }} role="img" aria-label="Das TraumGartenservice-Team bei der Arbeit" />
        {/*
          İKİNCİ FOTOĞRAF: public/images/about-2.jpg (400×320px)
          Öneri: "garden detail closeup plants"
        */}
        <div className={styles.accentPhoto} style={{ backgroundImage: `url('https://fastly.picsum.photos/id/152/400/320.jpg?hmac=mBjbxcK_MaBTi5YVvJnU-RR0OcN-x_i_S-wuU7Tv6ew')` }} role="img" aria-label="Detailaufnahme Garten" />
        <div className={styles.floatBadge}>
          <span className={styles.badgeNum}>Wiener Neustadt</span>
          <span className={styles.badgeLbl}>Unser Standort</span>
        </div>
      </div>

      <div ref={rightRef} className={`${styles.textCol} reveal-right`}>
        <p className={styles.label}>Über uns</p>
        <h2 className={styles.title}>Qualität &amp; Verlässlichkeit</h2>
        <p className={styles.text}>
          TraumGartenservice wurde mit dem Ziel gegründet, Ihnen eine zuverlässige
          und professionelle Lösung für Grünpflege und Reinigung zu bieten.
          Wir arbeiten mit Leidenschaft und Sorgfalt.
        </p>
        <p className={styles.text}>
          Klare Kommunikation, pünktliche Ausführung und faire Preise —
          das ist unser Versprechen an Sie.
        </p>
        <ul ref={listRef} className={`${styles.list} reveal`}>
          {checks.map((item, i) => (
            <li key={i} className={styles.listItem} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={styles.check} aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

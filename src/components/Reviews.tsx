'use client'
import { useRef, useEffect } from 'react'
import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Maria Huber',
    location: 'Wiener Neustadt',
    rating: 5,
    text: 'Wirklich professionelle Arbeit! Der Rasen wurde pünktlich und sehr sauber gemäht. Ich bin absolut begeistert und werde TraumGartenservice auf jeden Fall weiterempfehlen.',
    service: 'Rasenmähen',
    initial: 'M',
  },
  {
    name: 'Thomas Berger',
    location: 'Baden bei Wien',
    rating: 5,
    text: 'Hervorragende Grabpflege — würdevoll, zuverlässig und immer pünktlich. Ein großes Dankeschön an das gesamte Team. Man merkt, dass die Arbeit mit Herzblut gemacht wird.',
    service: 'Grabpflege',
    initial: 'T',
  },
  {
    name: 'Sandra Kirchner',
    location: 'Mödling',
    rating: 5,
    text: 'Unser Innenhof war nach der Reinigung wie neu! Sehr gründlich, faire Preise und unkomplizierte Kommunikation. Gerne wieder — klare Empfehlung!',
    service: 'Reinigung',
    initial: 'S',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className={styles.stars} aria-label={`${n} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? '#8FAF7E' : 'none'} stroke={i < n ? '#8FAF7E' : 'rgba(255,255,255,0.2)'} strokeWidth="1.5" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    cardRefs.current.forEach(el => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.section} reveal`}>
      <div className={styles.head}>
        <p className={styles.label}>Kundenstimmen</p>
        <h2 className={styles.title}>Was unsere Kunden sagen</h2>
        <p className={styles.sub}>Echte Bewertungen von zufriedenen Kunden aus der Region.</p>
      </div>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} ref={el => { cardRefs.current[i] = el }} className={`${styles.card} reveal`}
            style={{ transitionDelay: `${i * 0.12}s` }}>
            {/* Anführungszeichen */}
            <div className={styles.quote} aria-hidden="true">&ldquo;</div>
            <Stars n={r.rating} />
            <p className={styles.text}>{r.text}</p>
            <div className={styles.footer}>
              <div className={styles.avatar} aria-hidden="true">{r.initial}</div>
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.meta}>{r.location} · {r.service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google badge */}
      <div className={styles.googleRow}>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span>Bewertungen von Google · Ø 3,0 von 5 Sternen (4 Bewertungen)</span>
        <a href="https://www.google.com/search?q=TRAUM+Gartenservice+Wiener+Neustadt" target="_blank" rel="noopener noreferrer" className={styles.googleLink}>
          Alle ansehen →
        </a>
      </div>
    </section>
  )
}

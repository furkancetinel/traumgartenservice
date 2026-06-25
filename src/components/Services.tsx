'use client'
import { useRef, useEffect } from 'react'
import styles from './Services.module.css'

/*
  FOTOĞRAF REHBERİ — HER HİZMET İÇİN:
  Dosyaları public/images/services/ klasörüne koyun.
  Önerilen boyut: 600x400px, .jpg
  Arama önerileri her kartın altında belirtilmiştir.
*/
const services = [
  {
    photo: '/images/services/rasenmähen.jpg',
    photoAlt: 'Frisch gemähter Rasen',
    photoHint: 'Arama: "lawn mowing professional garden"',
    title: 'Rasenmähen',
    badge: null,
    desc: 'Regelmäßiges Mähen Ihrer Rasenflächen für ein gepflegtes Erscheinungsbild das ganze Jahr über.',
  },
  {
    photo: '/images/services/bewässern.jpg',
    photoAlt: 'Gartenbewässerung',
    photoHint: 'Arama: "garden watering irrigation green lawn"',
    title: 'Bewässern & Gießen',
    badge: null,
    desc: 'Fachgerechte Bewässerung Ihrer Grünflächen, Beete und Pflanzen — termingerecht und bedarfsgerecht.',
  },
  {
    photo: '/images/services/jäten.jpg',
    photoAlt: 'Unkraut jäten im Garten',
    photoHint: 'Arama: "weeding garden hands soil plants"',
    title: 'Jäten',
    badge: null,
    desc: 'Gründliches Entfernen von Unkraut und unerwünschten Wildpflanzen, damit Ihr Garten sauber bleibt.',
  },
  {
    photo: '/images/services/mulchen.jpg',
    photoAlt: 'Mulch im Gartenbeet',
    photoHint: 'Arama: "mulching garden beds bark chips"',
    title: 'Mulchen',
    badge: null,
    desc: 'Aufbringen von Mulchmaterial zum Schutz Ihrer Beete — hält Feuchtigkeit und hemmt Unkrautwachstum.',
  },
  {
    photo: '/images/services/laubrechen.jpg',
    photoAlt: 'Laubrechen im Herbst',
    photoHint: 'Arama: "autumn leaves raking garden fall"',
    title: 'Laubrechen & Laub entfernen',
    badge: null,
    desc: 'Saisonales Sammeln und Entfernen von Laub — für saubere Flächen im Herbst.',
  },
  {
    photo: '/images/services/reinigung.jpg',
    photoAlt: 'Gehwegreinigung',
    photoHint: 'Arama: "pavement cleaning outdoor courtyard pressure washing"',
    title: 'Verkehrsflächenreinigung',
    badge: 'Freies Gewerbe',
    desc: 'Reinigung von Gehwegen, Innenhöfen und Parkplätzen — zuverlässig und regelmäßig.',
  },
  {
    photo: '/images/services/grabpflege.jpg',
    photoAlt: 'Gepflegte Grabstätte mit Blumen',
    photoHint: 'Arama: "grave care flowers cemetery maintenance"',
    title: 'Grabpflege',
    badge: 'Freies Gewerbe',
    desc: 'Würdevolle Pflege von Grabstätten — Bepflanzung, Reinigung und saisonale Gestaltung.',
  },
  {
    photo: '/images/services/rollrasen.jpg',
    photoAlt: 'Rollrasen verlegen',
    photoHint: 'Arama: "laying turf roll lawn installation"',
    title: 'Rollrasen verlegen',
    badge: null,
    desc: 'Professionelles Verlegen von Fertigrasen inkl. Bodenvorbereitigung — für sofort nutzbare Flächen.',
  },
]

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
      {/*
        FOTOĞRAF ALANI — {svc.title}
        {svc.photoHint}
      */}
      <div className={styles.photoWrap}>
        <div
          className={styles.photo}
          style={{
            backgroundImage: `url('${svc.photo}')`,
            /* Fotoğraf yokken yeşil arka plan gösterilir */
          }}
          role="img"
          aria-label={svc.photoAlt}
        />
        {svc.badge && <span className={styles.badge}>{svc.badge}</span>}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{svc.title}</h3>
        <p className={styles.cardDesc}>{svc.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = headRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="leistungen" className={styles.section}>
      <div ref={headRef} className={`${styles.head} reveal`}>
        <p className={styles.label}>Unsere Leistungen</p>
        <h2 className={styles.title}>Was wir für Sie tun</h2>
        <p className={styles.sub}>Alle Leistungen fachgerecht und im gesetzlich zulässigen Rahmen.</p>
      </div>
      <div className={styles.grid}>
        {services.map((svc, i) => <ServiceCard key={i} svc={svc} index={i} />)}
      </div>
    </section>
  )
}

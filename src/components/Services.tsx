'use client'
import { useRef, useEffect } from 'react'
import styles from './Services.module.css'

const services = [
  {
    photo: '/images/services/rasenmähen.jpg',
    photoAlt: 'Frisch gemähter Rasen',
    title: 'Rasenmähen',
    badge: null,
    desc: 'Regelmäßiges Mähen Ihrer Rasenflächen für ein gepflegtes Erscheinungsbild das ganze Jahr über.',
  },
  {
    photo: '/images/services/bewässern.jpg',
    photoAlt: 'Gartenbewässerung',
    title: 'Bewässern & Gießen',
    badge: null,
    desc: 'Fachgerechte Bewässerung Ihrer Grünflächen, Beete und Pflanzen — termingerecht und bedarfsgerecht.',
  },
  {
    photo: 'https://fastly.picsum.photos/id/137/600/450.jpg?hmac=5nTTcVfFNwkH3ILWCf2oCpHHgMvMSEO7X3c3Pu_vr7Q',
    photoAlt: 'Unkraut jäten',
    title: 'Jäten',
    badge: null,
    desc: 'Gründliches Entfernen von Unkraut, damit Ihr Garten sauber und gepflegt bleibt.',
  },
  {
    photo: 'https://fastly.picsum.photos/id/145/600/450.jpg?hmac=_tWnLkWFkXWCMscZ6h-bBhVKdGCFAMdUfLm6s2G_bTQ',
    photoAlt: 'Mulch im Gartenbeet',
    title: 'Mulchen',
    badge: null,
    desc: 'Mulchmaterial zum Schutz Ihrer Beete — hält Feuchtigkeit und hemmt Unkrautwachstum.',
  },
  {
    photo: 'https://fastly.picsum.photos/id/164/600/450.jpg?hmac=aRfWRd2xJBVLZJJ0-OCpLvhLFxgaHWRN49ySJyq-IXs',
    photoAlt: 'Laubrechen im Herbst',
    title: 'Laubrechen & Laub entfernen',
    badge: null,
    desc: 'Saisonales Sammeln und Entfernen von Laub — für saubere Flächen im Herbst.',
  },
  {
    photo: 'https://fastly.picsum.photos/id/381/600/450.jpg?hmac=vPFrIkuXOkVvMqEOAB0_UqP8oKIrVIGxbzOVXoQ9d4Q',
    photoAlt: 'Gehwegreinigung',
    title: 'Verkehrsflächenreinigung',
    badge: 'Freies Gewerbe',
    desc: 'Reinigung von Gehwegen, Innenhöfen und Parkplätzen — zuverlässig und regelmäßig.',
  },
  {
    photo: 'https://fastly.picsum.photos/id/249/600/450.jpg?hmac=jFAU9eSoX4Jgn0J7j3eWDV5LbqxU1D5sKH-GKD5vGk',
    photoAlt: 'Grabpflege mit Blumen',
    title: 'Grabpflege',
    badge: 'Freies Gewerbe',
    desc: 'Würdevolle Pflege von Grabstätten — Bepflanzung, Reinigung und saisonale Gestaltung.',
  },
  {
    photo: '/images/services/rollrasen.jpg',
    photoAlt: 'Rollrasen verlegen',
    title: 'Rollrasen verlegen',
    badge: null,
    desc: 'Professionelles Verlegen von Fertigrasen inkl. Bodenvorbereitigung — sofort nutzbar.',
  },
]

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${(index % 4) * 0.09}s` }}>
      <div className={styles.photoWrap}>
        {/* FOTOĞRAF: public/images/services/ klasörüne ekleyin — {svc.photoHint} */}
        <div
          className={styles.photo}
          style={{ backgroundImage: `url('${svc.photo}')` }}
          role="img"
          aria-label={svc.photoAlt}
        />
        <div className={styles.photoOverlay} aria-hidden="true" />
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
        <p className={styles.sub}>Alle Leistungen fachgerecht und im gesetzlich zulässigen Rahmen erbracht.</p>
      </div>
      <div className={styles.grid}>
        {services.map((svc, i) => <ServiceCard key={i} svc={svc} index={i} />)}
      </div>
    </section>
  )
}

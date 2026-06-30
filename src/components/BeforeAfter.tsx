'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import styles from './BeforeAfter.module.css'

// Fotoğraflar: public/images/beforeafter/ klasörüne yükleyin
// rasen-before.jpg, rasen-after.jpg, garten-before.jpg, garten-after.jpg
// grab-before.jpg, grab-after.jpg, rollrasen-before.jpg, rollrasen-after.jpg
const slides = [
  { label: 'Rasenpflege',     before: '/images/beforeafter/rasen-before.jpg',     after: '/images/beforeafter/rasen-after.jpg',     beforeBg: '#3a3528', afterBg: '#3d7a50' },
  { label: 'Gartenreinigung', before: '/images/beforeafter/garten-before.jpg',    after: '/images/beforeafter/garten-after.jpg',    beforeBg: '#2e2e2e', afterBg: '#3d6648' },
  { label: 'Grabpflege',      before: '/images/beforeafter/grab-before.jpg',      after: '/images/beforeafter/grab-after.jpg',      beforeBg: '#2a2a2a', afterBg: '#3a5c42' },
  { label: 'Rollrasen',       before: '/images/beforeafter/rollrasen-before.jpg', after: '/images/beforeafter/rollrasen-after.jpg', beforeBg: '#3a2e1a', afterBg: '#4a7a40' },
]

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const getPct = useCallback((clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect) return 50
    return Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; setPos(getPct(e.clientX)) }
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; setPos(getPct(e.touches[0].clientX)) }

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) setPos(getPct(e.clientX)) }
    const onTMove = (e: TouchEvent) => { if (dragging.current) { e.preventDefault(); setPos(getPct(e.touches[0].clientX)) } }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTMove, { passive: false })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [getPct])

  const cur = slides[activeIdx]
  const prev = () => { setActiveIdx(i => (i - 1 + slides.length) % slides.length); setPos(50) }
  const next = () => { setActiveIdx(i => (i + 1) % slides.length); setPos(50) }

  return (
    <section id="vorher-nachher" ref={sectionRef} className={`${styles.section} reveal`}>
      <div className={styles.head}>
        <div>
          <p className={styles.label}>Unsere Arbeit</p>
          <h2 className={styles.title}>Vorher &amp; Nachher</h2>
          <p className={styles.sub}>Ziehen Sie den Regler und sehen Sie den Unterschied.</p>
        </div>
        <div className={styles.tabs}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => { setActiveIdx(i); setPos(50) }}
              className={`${styles.tab} ${activeIdx === i ? styles.tabActive : ''}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.sliderOuter}>
        <button className={styles.navBtn} onClick={prev} aria-label="Vorheriges">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div ref={sliderRef} className={styles.sliderWrap}
          onMouseDown={onMouseDown} onTouchStart={onTouchStart}
          role="img" aria-label={`Vorher/Nachher: ${cur.label}`}>
          <div className={styles.imgAfter} style={{ backgroundImage: `url(${cur.after})`, backgroundColor: cur.afterBg }} />
          <div className={styles.imgBefore} style={{ backgroundImage: `url(${cur.before})`, backgroundColor: cur.beforeBg, clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
          <span className={styles.labelVorher} aria-hidden="true">Vorher</span>
          <span className={styles.labelNachher} aria-hidden="true">Nachher</span>
          <div className={styles.handle} style={{ left: `${pos}%` }}>
            <div className={styles.line} />
            <div className={styles.btn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/><polyline points="9 18 3 12 9 6"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/><polyline points="15 18 21 12 15 6"/></svg>
            </div>
          </div>
        </div>

        <button className={styles.navBtn} onClick={next} aria-label="Nächstes">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <div className={styles.thumbs}>
        {slides.map((s, i) => (
          <button key={i} onClick={() => { setActiveIdx(i); setPos(50) }}
            className={`${styles.thumb} ${activeIdx === i ? styles.thumbActive : ''}`}
            aria-label={s.label}>
            <div className={styles.thumbImg} style={{ backgroundImage: `url(${s.after})`, backgroundColor: s.afterBg }} />
            <span className={styles.thumbLabel}>{s.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

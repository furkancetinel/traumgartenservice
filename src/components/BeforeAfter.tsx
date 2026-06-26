'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import styles from './BeforeAfter.module.css'

/*
  FOTOĞRAF REHBERİ — VORHER/NACHHER
  Klasör: public/images/beforeafter/
  Her kategori için iki fotoğraf: before.jpg + after.jpg
  Boyut: 1200×800px (yatay)
*/
const slides = [
  { label: 'Rasenpflege',
    before: 'https://fastly.picsum.photos/id/1084/1200/800.jpg?hmac=H3N-o2H-gUFQdpJ58lVVCdxaVjL7O5gAXJWW9BnuaBM',
    after:  'https://fastly.picsum.photos/id/112/1200/800.jpg?hmac=8uODYG6GQpLNvZyHU8JTe7-vLbmJPvXJL4HuB2i1vgk',
    beforeBg: '#2a4a35', afterBg: '#3d7a50' },
  { label: 'Gartenreinigung',
    before: 'https://fastly.picsum.photos/id/431/1200/800.jpg?hmac=EzDFfCzOmLpXOVfFOmALN5fU_eTUqKMjEOMXb7Ej5gk',
    after:  'https://fastly.picsum.photos/id/145/1200/800.jpg?hmac=6yHzrUHJeQNDsatfKtEjb0QwzeBl8jjd3N_qB9Ep6sA',
    beforeBg: '#3a3528', afterBg: '#3d6648' },
  { label: 'Grabpflege',
    before: 'https://fastly.picsum.photos/id/164/1200/800.jpg?hmac=DcXGPuFqVanYqBJ6m_vMolwAuN9AEGmTEzHdDcE4m5Q',
    after:  'https://fastly.picsum.photos/id/249/1200/800.jpg?hmac=UhBVUJsJq3OFHnz5a4iLCaDJgM6i1hGdFyOb_0A8LhI',
    beforeBg: '#2e2e2e', afterBg: '#3a5c42' },
  { label: 'Rollrasen',
    before: 'https://fastly.picsum.photos/id/504/1200/800.jpg?hmac=7xI3JIHbA_lmI3SBpQ4GkGcYoFetDFqlOp6CizFTUQo',
    after:  'https://fastly.picsum.photos/id/137/1200/800.jpg?hmac=nAiMuFVaXMqcG4_v_v6L0DGlxSM8YzAYGNm4G8hvnYc',
    beforeBg: '#3a2e1a', afterBg: '#4a7a40' },
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
    const onTMove = (e: TouchEvent) => { if (dragging.current) setPos(getPct(e.touches[0].clientX)) }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTMove, { passive: true })
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
        <button className={styles.navBtn} onClick={() => { setActiveIdx(i => (i - 1 + slides.length) % slides.length); setPos(50) }} aria-label="Vorheriges">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div
          ref={sliderRef}
          className={styles.sliderWrap}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          role="img"
          aria-label={`Vorher/Nachher: ${cur.label}`}
        >
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

        <button className={styles.navBtn} onClick={() => { setActiveIdx(i => (i + 1) % slides.length); setPos(50) }} aria-label="Nächstes">
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

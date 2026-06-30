'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './Contact.module.css'

const leistungen = [
  'Rasenmähen', 'Bewässern / Gießen', 'Jäten', 'Mulchen',
  'Laubrechen / Laub entfernen', 'Verkehrsflächenreinigung',
  'Friedhofsgärtnerei / Grabpflege', 'Rollrasen verlegen', 'Mehrere Leistungen',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', telefon: '', leistung: '', nachricht: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const el = sectionRef.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.vorname || !form.email || !form.nachricht) {
      setErrorMsg('Bitte füllen Sie alle Pflichtfelder aus.'); setStatus('error'); return
    }
    setStatus('loading'); setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Fehler')
      setStatus('success')
      setForm({ vorname: '', nachname: '', email: '', telefon: '', leistung: '', nachricht: '' })
    } catch (err: unknown) {
      setStatus('error'); setErrorMsg(err instanceof Error ? err.message : 'Fehler beim Senden.')
    }
  }

  return (
    <section id="kontakt" ref={sectionRef} className={`${styles.section} reveal`}>
      <div className={styles.info}>
        <p className={styles.label}>Kontakt</p>
        <h2 className={styles.title}>Nehmen Sie Kontakt auf</h2>
        <p className={styles.sub}>
          Wir freuen uns auf Ihre Anfrage und erstellen Ihnen gerne ein unverbindliches Angebot.
          In der Regel antworten wir innerhalb von 24 Stunden.
        </p>

        <div className={styles.contactItems}>
          {[
            {
              icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>,
              circle: <circle cx="12" cy="10" r="3"/>,
              label: 'Adresse', val: 'Grazer Str. 73, 2700 Wiener Neustadt',
              href: 'https://maps.google.com/?q=Grazer+Str+73+2700+Wiener+Neustadt',
            },
            {
              icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.08-8.59A2 2 0 013.58 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l1.6-1.6a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>,
              circle: null,
              label: 'Telefon', val: '+43 676 5476510',
              href: 'tel:+436765476510',
            },
            {
              icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
              circle: null,
              label: 'E-Mail', val: 'info@traum-gartenservice.at',
              href: 'mailto:info@traum-gartenservice.at',
            },
            {
              icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
              circle: null,
              label: 'Öffnungszeiten', val: 'Mo–Fr: 07:00–18:00 Uhr',
              href: undefined,
            },
          ].map(({ icon, circle, label, val, href }) => (
            <div key={label} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icon}{circle}
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>{label}</div>
                {href
                  ? <a href={href} className={styles.contactLink}>{val}</a>
                  : <div className={styles.contactVal}>{val}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formWrap}>
        {status === 'success' ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>Vielen Dank!</h3>
            <p>Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.</p>
            <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Weitere Anfrage senden</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              <div className={styles.fg}><label htmlFor="vorname">Vorname *</label><input id="vorname" type="text" placeholder="Max" value={form.vorname} onChange={set('vorname')} required autoComplete="given-name"/></div>
              <div className={styles.fg}><label htmlFor="nachname">Nachname</label><input id="nachname" type="text" placeholder="Mustermann" value={form.nachname} onChange={set('nachname')} autoComplete="family-name"/></div>
            </div>
            <div className={styles.row}>
              <div className={styles.fg}><label htmlFor="email">E-Mail *</label><input id="email" type="email" placeholder="max@beispiel.at" value={form.email} onChange={set('email')} required autoComplete="email"/></div>
              <div className={styles.fg}><label htmlFor="telefon">Telefon</label><input id="telefon" type="tel" placeholder="+43 676 …" value={form.telefon} onChange={set('telefon')} autoComplete="tel"/></div>
            </div>
            <div className={styles.fg}><label htmlFor="leistung">Gewünschte Leistung</label>
              <select id="leistung" value={form.leistung} onChange={set('leistung')}>
                <option value="">Bitte auswählen …</option>
                {leistungen.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div className={styles.fg}><label htmlFor="nachricht">Ihre Nachricht *</label>
              <textarea id="nachricht" placeholder="Beschreiben Sie kurz Ihr Anliegen und wo sich Ihre Fläche befindet …" value={form.nachricht} onChange={set('nachricht')} required rows={5}/>
            </div>
            {status === 'error' && <div className={styles.errorBox} role="alert">{errorMsg}</div>}
            <button type="submit" className={styles.submit} disabled={status === 'loading'}>
              {status === 'loading' ? <><span className={styles.spinner} aria-hidden="true"/>Wird gesendet …</> : 'Anfrage absenden →'}
            </button>
            <p className={styles.formNote}>* Pflichtfelder</p>
          </form>
        )}
      </div>
    </section>
  )
}

import Image from 'next/image'
import styles from './Footer.module.css'

const cols = [
  {
    head: 'Leistungen',
    links: ['Rasenmähen', 'Bewässern & Gießen', 'Jäten', 'Mulchen', 'Laubrechen', 'Verkehrsflächenreinigung', 'Grabpflege', 'Rollrasen verlegen'].map(s => ({ label: s, href: '#leistungen' })),
  },
  {
    head: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '#ueber-uns' },
      { label: 'Referenzen', href: '#vorher-nachher' },
      { label: 'Kontakt', href: '#kontakt' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA-Band */}
      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaText}>Bereit für einen gepflegten Garten?</p>
          <p className={styles.ctaSub}>Wir erstellen Ihnen ein unverbindliches Angebot.</p>
        </div>
        <div className={styles.ctaActions}>
          <a href="tel:+436765476510" className={styles.ctaPhone}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.08-8.59A2 2 0 013.58 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l1.6-1.6a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
            +43 676 5476510
          </a>
          <a href="#kontakt" className={styles.ctaBtn}>Angebot anfragen →</a>
        </div>
      </div>

      {/* Main grid */}
      <div className={styles.main}>
        <div className={styles.brand}>
          <a href="/" aria-label="TraumGartenservice" className={styles.logoLink}>
            <Image src="/logo.svg" alt="TraumGartenservice" width={170} height={36} />
          </a>
          <p className={styles.tagline}>
            Professionelle Gartenpflege &amp; Grünflächenreinigung in Wiener Neustadt
            und Umgebung — sorgfältig, zuverlässig, zu fairen Preisen.
          </p>
          <div className={styles.socials}>
            {[
              { label: 'Instagram', d: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></> },
              { label: 'Facebook',  d: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
              { label: 'WhatsApp', d: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/> },
            ].map(({ label, d }) => (
              <a key={label} href="#" aria-label={label} className={styles.socBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
              </a>
            ))}
          </div>
        </div>

        {cols.map(col => (
          <div key={col.head} className={styles.col}>
            <h4>{col.head}</h4>
            <ul>
              {col.links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
        ))}

        <div className={styles.col}>
          <h4>Kontakt</h4>
          <div className={styles.contactList}>
            {[
              { svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, text: 'Grazer Str. 73\n2700 Wiener Neustadt', href: undefined },
              { svg: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.08-8.59A2 2 0 013.58 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l1.6-1.6a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>, text: '+43 676 5476510', href: 'tel:+436765476510' },
              { svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, text: 'info@traumgartenservice.at', href: 'mailto:info@traumgartenservice.at' },
              { svg: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, text: 'Mo–Fr: 07:00–18:00 Uhr', href: undefined },
            ].map(({ svg, text, href }, i) => (
              <div key={i} className={styles.contactRow}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{svg}</svg>
                {href
                  ? <a href={href}>{text}</a>
                  : <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} TraumGartenservice · Wiener Neustadt</p>
        <div className={styles.legal}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/agb">AGB</a>
        </div>
      </div>
    </footer>
  )
}

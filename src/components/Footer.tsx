import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <a href="/" className={styles.logoLink} aria-label="TraumGartenservice">
            <Image src="/logo.svg" alt="TraumGartenservice" width={160} height={32} />
          </a>
          <p className={styles.tagline}>
            Professionelle Gartenpflege & Reinigung in Wiener Neustadt — sorgfältig und zu fairen Preisen.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <p className={styles.linksHead}>Leistungen</p>
            <div className={styles.linksRow}>
              {['Rasenmähen','Bewässern & Gießen','Jäten','Mulchen','Laubrechen','Verkehrsflächenreinigung','Grabpflege','Rollrasen verlegen'].map(s => (
                <a key={s} href="#leistungen">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.linksHead}>Unternehmen</p>
            <div className={styles.linksRow}>
              <a href="#ueber-uns">Über uns</a>
              <a href="#vorher-nachher">Referenzen</a>
              <a href="#kontakt">Kontakt</a>
              <a href="/impressum">Impressum</a>
              <a href="/datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>

        <div className={styles.contactRows}>
          {[
            { svg: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7m-3 0a3 3 0 106 0 3 3 0 10-6 0', text: 'Grazer Str. 73, 2700 Wiener Neustadt' },
            { svg: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.08-8.59A2 2 0 013.58 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l1.6-1.6a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z', text: '+43 676 5476510', href: 'tel:+436765476510' },
            { svg: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6', text: 'info@traum-gartenservice.at', href: 'mailto:info@traum-gartenservice.at' },
            { svg: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z M12 6v6l4 2', text: 'Mo–Fr: 07:00–18:00 Uhr' },
          ].map(({ svg, text, href }, i) => (
            <div key={i} className={styles.contactRow}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={svg}/></svg>
              {href ? <a href={href}>{text}</a> : <span>{text}</span>}
            </div>
          ))}
        </div>
      </div>

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

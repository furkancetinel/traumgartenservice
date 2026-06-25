'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#vorher-nachher', label: 'Referenzen' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(sec => {
        const el = sec as HTMLElement
        if (window.scrollY + 100 >= el.offsetTop) current = el.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        {/* Sol: navigasyon */}
        <nav className={styles.nav} aria-label="Hauptnavigation">
          {navLinks.slice(0, 2).map(link => (
            <button key={link.href} onClick={() => handleNav(link.href)}
              className={`${styles.navLink} ${active === link.href.slice(1) ? styles.navActive : ''}`}>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Orta: logo */}
        <a href="/" className={styles.logo} aria-label="TraumGartenservice">
          <Image src="/logo.svg" alt="TraumGartenservice" width={200} height={38} priority className={styles.logoImg} />
        </a>

        {/* Sağ: nav + CTA */}
        <div className={styles.ctaWrap}>
          <nav className={styles.nav} aria-label="Sekundärnavigation">
            {navLinks.slice(2).map(link => (
              <button key={link.href} onClick={() => handleNav(link.href)}
                className={`${styles.navLink} ${active === link.href.slice(1) ? styles.navActive : ''}`}>
                {link.label}
              </button>
            ))}
          </nav>
          <button onClick={() => handleNav('#kontakt')} className={styles.cta} style={{ marginLeft: 20 }}>
            Angebot anfragen
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Mobil burger */}
        <button className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(link => (
          <button key={link.href} onClick={() => handleNav(link.href)} className={styles.mobileLink}>
            {link.label}
          </button>
        ))}
        <button onClick={() => handleNav('#kontakt')} className={styles.mobileCta}>
          Angebot anfragen →
        </button>
      </div>
    </>
  )
}

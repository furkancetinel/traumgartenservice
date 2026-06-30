import styles from '../legal.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = { title: 'Impressum — TraumGartenservice' }

export default function Impressum() {
  return (
    <>
      <Header />
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Zurück zur Startseite</a>
        <h1 className={styles.title}>Impressum</h1>
        <p className={styles.updated}>Angaben gemäß § 5 ECG, § 25 MedienG, § 14 UGB</p>

        <div className={styles.section}>
          <h2>Unternehmen</h2>
          <p>TraumGartenservice</p>
          <p>Grazer Str. 73<br/>2700 Wiener Neustadt<br/>Österreich</p>
        </div>

        <div className={styles.section}>
          <h2>Kontakt</h2>
          <p>Telefon: <a href="tel:+436765476510">+43 676 5476510</a></p>
          <p>E-Mail: <a href="mailto:info@traum-gartenservice.at">info@traum-gartenservice.at</a></p>
        </div>

        <div className={styles.section}>
          <h2>Unternehmensgegenstand</h2>
          <p>Gartenpflege, Grünflächenreinigung und Friedhofsgärtnerei (Grabpflege)</p>
        </div>

        <div className={styles.section}>
          <h2>Gewerbebehörde</h2>
          <p>Zuständige Bezirkshauptmannschaft / Magistrat Wiener Neustadt</p>
        </div>

        <div className={styles.section}>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Haftung für Links</h2>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
            österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

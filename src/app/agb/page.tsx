import styles from '../legal.module.css'

export const metadata = { title: 'AGB — TraumGartenservice' }

export default function AGB() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Zurück zur Startseite</a>
        <h1 className={styles.title}>Allgemeine Geschäftsbedingungen</h1>
        <p className={styles.updated}>Stand: Juni 2026</p>

        <div className={styles.section}>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen TraumGartenservice,
            Grazer Str. 73, 2700 Wiener Neustadt (im Folgenden „Auftragnehmer") und seinen Kunden (im
            Folgenden „Auftraggeber") über die Erbringung von Gartenpflege-, Reinigungs- und
            Friedhofsgärtnerei-Leistungen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Vertragsabschluss</h2>
          <p>
            Der Vertrag kommt durch die Annahme eines Angebots des Auftragnehmers durch den Auftraggeber
            zustande, sei es schriftlich, mündlich oder durch konkludentes Verhalten (z. B. Beauftragung
            über das Kontaktformular).
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Leistungsumfang</h2>
          <p>
            Der genaue Umfang der zu erbringenden Leistungen ergibt sich aus dem individuellen Angebot.
            Zusätzliche Leistungen, die nicht im Angebot enthalten sind, werden gesondert verrechnet.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Preise und Zahlungsbedingungen</h2>
          <p>
            Es gelten die im jeweiligen Angebot genannten Preise. Sofern nicht anders vereinbart, ist die
            Rechnung innerhalb von 14 Tagen nach Erhalt ohne Abzug zu begleichen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Terminvereinbarung</h2>
          <p>
            Termine werden in Absprache mit dem Auftraggeber vereinbart. Bei witterungsbedingten
            Verzögerungen (z. B. Starkregen) behält sich der Auftragnehmer eine angemessene Verschiebung
            des Termins vor.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Stornierung</h2>
          <p>
            Eine kostenfreie Stornierung ist bis 24 Stunden vor dem vereinbarten Termin möglich. Bei
            kurzfristigeren Absagen kann eine Aufwandsentschädigung verrechnet werden.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Haftung</h2>
          <p>
            Der Auftragnehmer haftet für Schäden, die im Rahmen der Leistungserbringung schuldhaft
            verursacht werden, im gesetzlich vorgeschriebenen Umfang. Für leichte Fahrlässigkeit wird die
            Haftung, soweit gesetzlich zulässig, ausgeschlossen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Gerichtsstand</h2>
          <p>
            Es gilt österreichisches Recht. Gerichtsstand für sämtliche Streitigkeiten ist, soweit
            gesetzlich zulässig, das für Wiener Neustadt zuständige Gericht.
          </p>
        </div>
      </div>
    </div>
  )
}

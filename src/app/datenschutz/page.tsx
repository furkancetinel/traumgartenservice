import styles from '../legal.module.css'

export const metadata = { title: 'Datenschutzerklärung — TraumGartenservice' }

export default function Datenschutz() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Zurück zur Startseite</a>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <p className={styles.updated}>Stand: Juni 2026</p>

        <div className={styles.section}>
          <h2>1. Verantwortlicher</h2>
          <p>
            TraumGartenservice<br/>
            Grazer Str. 73, 2700 Wiener Neustadt<br/>
            E-Mail: <a href="mailto:info@traum-gartenservice.at">info@traum-gartenservice.at</a><br/>
            Telefon: <a href="tel:+436765476510">+43 676 5476510</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
            Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich
            ist. Die Verarbeitung erfolgt regelmäßig nur mit Einwilligung des Nutzers oder auf Basis
            gesetzlicher Erlaubnistatbestände (Art. 6 DSGVO).
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
            gespeichert werden. Sie richten keinen Schaden an. Sie dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen. Sie können Ihren Browser so einstellen,
            dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell ausschließen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
            -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
            Uhrzeit der Serveranfrage und IP-Adresse.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
            Verarbeitung Ihrer gespeicherten personenbezogenen Daten, sowie das Recht auf
            Datenübertragbarkeit und Widerspruch. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten können Sie sich jederzeit über die im Impressum angegebenen
            Kontaktdaten an uns wenden.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In Österreich ist dies die
            Österreichische Datenschutzbehörde.
          </p>
        </div>
      </div>
    </div>
  )
}

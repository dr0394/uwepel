import { ArrowLeft } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export default function Datenschutz({ onBack }: DatenschutzProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="bg-dark-950 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-dark-200 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </button>
          <h1 className="text-4xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-primary-200 rounded-lg p-8 lg:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">1. Verantwortlicher</h2>
            <div className="text-dark-800 leading-relaxed">
              <p className="mb-2 font-semibold">Rechtsanwalt Uwe Pel</p>
              <p>Friesensstraße 100</p>
              <p>46149 Oberhausen</p>
              <p className="mt-2">Weiterer Kanzleisitz:</p>
              <p>Hangen-Weißheimer Straße 2–4</p>
              <p>55234 Eppelsheim</p>
              <p className="mt-4">
                Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten gemäß
                Datenschutz-Grundverordnung (DSGVO) und Bundesdatenschutzgesetz (BDSG).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">2. Allgemeine Hinweise</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Datenschutz</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-dark-800 leading-relaxed mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Rechtsgrundlagen der Datenverarbeitung</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-dark-800 mb-4">
              <li><strong>lit. a:</strong> Einwilligung der betroffenen Person</li>
              <li><strong>lit. b:</strong> Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen</li>
              <li><strong>lit. c:</strong> Erfüllung einer rechtlichen Verpflichtung</li>
              <li><strong>lit. f:</strong> Berechtigtes Interesse (z.B. zur Gewährleistung der IT-Sicherheit)</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Speicherdauer</h3>
            <p className="text-dark-800 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
              widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Beim Besuch dieser Website werden durch den Hosting-Provider automatisch technische Zugriffsdaten
              verarbeitet und in Server-Log-Dateien gespeichert. Die Verarbeitung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="text-dark-800 leading-relaxed mb-4">Folgende Daten werden dabei erhoben:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-dark-800 mb-4">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="text-dark-800 leading-relaxed">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich
              statistischen Zwecken sowie der Gewährleistung eines störungsfreien Betriebs der Website.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Cookies</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Diese Website verwendet nur technisch notwendige Cookies zur Speicherung Ihrer Cookie-Einstellungen.
              Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Ein Cookie für
              Ihre Einwilligung wird für 365 Tage gespeichert.
            </p>
            <p className="text-dark-800 leading-relaxed mb-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden
              und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
              Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
              wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-dark-800 leading-relaxed">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
              nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Kontaktaufnahme</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten (Name, E-Mail-Adresse,
              Telefonnummer, Nachrichteninhalt) ausschließlich zur Bearbeitung Ihres Anliegens verarbeitet.
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
            </p>
            <p className="text-dark-800 leading-relaxed mb-4">
              Die von Ihnen übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen (z.B. nach § 50 BRAO) – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">WhatsApp Business</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Wir bieten Ihnen die Möglichkeit, mit uns über WhatsApp zu kommunizieren. Wenn Sie uns über
              WhatsApp kontaktieren, werden Ihre Daten (Name, Telefonnummer, Nachrichteninhalt) zur Bearbeitung
              Ihrer Anfrage verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              bzw. Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="text-dark-800 leading-relaxed">
              Bitte beachten Sie, dass WhatsApp Daten in den USA verarbeitet. Wir haben keinen Einfluss auf
              die Datenverarbeitung durch WhatsApp. Weitere Informationen finden Sie in der Datenschutzerklärung
              von WhatsApp unter:{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Kontaktformular</h3>
            <p className="text-dark-800 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">4. Ihre Rechte gemäß DSGVO</h2>
            <p className="text-dark-800 leading-relaxed mb-4">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gemäß Art. 15–21 DSGVO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-dark-800 mb-4">
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre
              bei uns gespeicherten personenbezogenen Daten zu erhalten.</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung
              unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer
              bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die weitere Verarbeitung
              erforderlich ist.</li>
              <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich
              aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
              personenbezogener Daten Widerspruch einzulegen.</li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in
              einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li><strong>Widerrufsrecht:</strong> Sie haben das Recht, Ihre erteilte Einwilligung jederzeit
              mit Wirkung für die Zukunft zu widerrufen.</li>
            </ul>
            <p className="text-dark-800 leading-relaxed">
              Zur Ausübung dieser Rechte wenden Sie sich bitte an die im Impressum angegebenen Kontaktdaten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">5. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className="text-dark-800 leading-relaxed mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
            </p>
            <p className="text-dark-800 leading-relaxed">
              Die für uns zuständige Aufsichtsbehörde ist die Landesbeauftragte für Datenschutz und
              Informationsfreiheit Nordrhein-Westfalen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">6. Datensicherheit</h2>
            <p className="text-dark-800 leading-relaxed">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns
              verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung
              oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen
              werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-950 mb-4">7. Aktualität und Änderung der Datenschutzerklärung</h2>
            <p className="text-dark-800 leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
              oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit
              auf dieser Website von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-primary-200">
            <p className="text-sm text-dark-600">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

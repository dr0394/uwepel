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
            <h2 className="text-2xl font-bold text-dark-950 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
              mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="text-dark-800 leading-relaxed mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
              z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>

            <p className="text-dark-800 leading-relaxed">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">2. Hosting</h2>
            <p className="text-dark-800 leading-relaxed mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="text-dark-800 leading-relaxed">
              [Hosting-Anbieter Name und Details hier einfügen]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Datenschutz</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <div className="text-dark-800 leading-relaxed mb-4">
              <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>Rechtsanwalt Uwe Pel</p>
              <p>Friesenstraße 100</p>
              <p>46149 Oberhausen</p>
              <p className="mt-2">Telefon: +49 177 6501811</p>
              <p>E-Mail: Uwe.pel@kanzleipel.de</p>
            </div>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-dark-800 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der
              bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Cookies</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und
              richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer
              einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Kontaktformular</h3>
            <p className="text-dark-800 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Anfrage per E-Mail, Telefon oder WhatsApp</h3>
            <p className="text-dark-800 leading-relaxed">
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">5. Plugins und Tools</h2>

            <h3 className="text-xl font-semibold text-dark-950 mb-3 mt-6">Google Maps</h3>
            <p className="text-dark-800 leading-relaxed">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">6. Ihre Rechte</h2>
            <div className="text-dark-800 leading-relaxed space-y-4">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p className="mt-4">
                Sofern Sie in die Datenverarbeitung eingewilligt haben oder ein Vertrag zur Datenverarbeitung
                besteht, haben Sie zudem das Recht, die Einwilligung jederzeit zu widerrufen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">7. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
            <p className="text-dark-800 leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-primary-200">
            <p className="text-sm text-dark-400 italic">
              Hinweis: Dies ist ein Platzhalter-Datenschutzerklärung. Bitte ergänzen Sie alle Abschnitte
              mit den korrekten Informationen und lassen Sie diese durch einen Datenschutzexperten prüfen.
            </p>
            <p className="text-sm text-dark-400 italic mt-2">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

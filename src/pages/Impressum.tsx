import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export default function Impressum({ onBack }: ImpressumProps) {
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
          <h1 className="text-4xl font-bold text-white">Impressum</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-primary-200 rounded-lg p-8 lg:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-dark-800 space-y-2">
              <p className="font-semibold">KanzleiPel</p>
              <p>Rechtsanwalt Uwe Pel</p>
              <p>Friesenstraße 100</p>
              <p>46149 Oberhausen</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Kontakt</h2>
            <div className="text-dark-800 space-y-2">
              <p>Telefon: +49 177 6501811</p>
              <p>E-Mail: Uwe.pel@kanzleipel.de</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="text-dark-800 space-y-2">
              <p>Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)</p>
              <p>Zuständige Kammer: Rechtsanwaltskammer [Name]</p>
              <p>Anschrift: [Adresse der Kammer]</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Es gelten folgende berufsrechtliche Regelungen:</h2>
            <div className="text-dark-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                <li>Fachanwaltsordnung (FAO)</li>
              </ul>
              <p className="mt-4">
                Regelungen einsehbar unter:{' '}
                <a
                  href="https://www.brak.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  www.brak.de
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
            <div className="text-dark-800 space-y-2">
              <p>Name und Sitz des Versicherers:</p>
              <p>[Name der Versicherung]</p>
              <p>[Adresse der Versicherung]</p>
              <p className="mt-4">Geltungsraum der Versicherung: Deutschland / EU</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Redaktionell verantwortlich</h2>
            <div className="text-dark-800">
              <p>Rechtsanwalt Uwe Pel</p>
              <p>Friesenstraße 100, 46149 Oberhausen</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-950 mb-4">EU-Streitschlichtung</h2>
            <div className="text-dark-800">
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-950 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <div className="text-dark-800">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-primary-200">
            <p className="text-sm text-dark-400 italic">
              Hinweis: Dies ist ein Platzhalter-Impressum. Bitte ergänzen Sie alle Felder mit den korrekten Daten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

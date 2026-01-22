import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function About() {
  const vitaPoints = [
    'Studium der Rechtswissenschaften in Münster und Genf',
    'Ehemals delegiertes Mitglied im Ausschuss "Internationale Steuerfragen" beim Bundesverband der deutschen Industrie',
    'Tätigkeit bei der deutsch-amerikanischen Handelskammer in Washington D.C.',
    'Tätigkeit für die deutsche Finanzverwaltung auf Mandatsbasis',
    'Rechtsanwalt bei führender US-Steuerkanzlein in Deutschland',
    'Leitende Position bei international tätigem schweizerische Pharma- und Diagnostikunternehmen',
    'Langjähriger Mitautor des ertragssteuerlichen Standardkommentars Hermann/Heuer/Raupach',
    'Einschlägige weitere Veröffentlichungen',
    'Zulassung als EU-Anwalt in Polen (Danzig/Gdańsk)',
    'Jahrzehntelange Praxis im Steuerstrafrecht und Insolvenzrecht'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-lg mb-6">
              <Award className="text-primary-500" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-6">
              Über Rechtsanwalt Pel
            </h2>
            <p className="text-xl text-dark-700 mb-8 leading-relaxed">
              Fundierte Ausbildung, internationale Erfahrung und jahrzehntelange Praxis –
              die Basis für kompetente Vertretung in komplexen Fällen.
            </p>

            <div className="space-y-4">
              {vitaPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <p className="text-dark-800 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-950 rounded-lg p-8 text-center">
                <GraduationCap className="text-primary-400 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-dark-200 text-sm">Studienorte</div>
                <div className="text-dark-300 text-xs mt-2">Münster & Genf</div>
              </div>

              <div className="bg-primary-500 rounded-lg p-8 text-center">
                <Briefcase className="text-white mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-white text-sm font-semibold">Jahre</div>
                <div className="text-dark-100 text-xs mt-2">Berufserfahrung</div>
              </div>

              <div className="bg-primary-500 rounded-lg p-8 text-center">
                <Award className="text-white mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-white text-sm font-semibold">Schwerpunkte</div>
                <div className="text-dark-100 text-xs mt-2">Steuer & Insolvenz</div>
              </div>

              <div className="bg-dark-950 rounded-lg p-8 text-center">
                <svg className="mx-auto mb-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" className="text-primary-400" />
                  <path d="M2 12h20" className="text-primary-400" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" className="text-primary-400" />
                </svg>
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-dark-200 text-sm">Kontinente</div>
                <div className="text-dark-300 text-xs mt-2">Europa & Amerika</div>
              </div>
            </div>

            <div className="mt-6 bg-primary-50 rounded-lg p-6 border border-primary-200">
              <p className="text-dark-800 text-sm leading-relaxed">
                Die internationale Ausrichtung und das etablierte Netzwerk in der EU und den USA
                ermöglichen eine effektive Vertretung auch bei grenzüberschreitenden Mandaten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

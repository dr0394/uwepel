import { Check, Star } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const benefits = [
    'Schnelle Ersteinschätzung Ihrer Situation',
    'Erfahrung in grenzüberschreitenden Fällen',
    'Klare Strategie und ruhige Kommunikation'
  ];

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kompetente Verteidigung gegen Ansprüche der Finanzverwaltung
            </h1>
            <p className="text-xl text-dark-200 mb-6 leading-relaxed">
              Bundesweite Vertretung - Auch bei
              internationalen Sachverhalten – mit Erfahrung, Netzwerk und strategischem Weitblick.
            </p>

            <div className="mb-8 bg-gray-300 rounded-lg py-8 px-6 text-center">
              <h3 className="text-dark-950 font-bold text-xl mb-4">Steuerstreit</h3>
              <p className="text-dark-950 font-bold text-base mb-3">Steuerstrafrecht / Geldbuße / Selbstanzeige</p>
              <p className="text-dark-950 font-bold text-base mb-3">Betriebsprüfung</p>
              <p className="text-dark-950 font-bold text-base">Haftung / Vollstreckung</p>
            </div>

            <div className="mb-8 p-6 bg-dark-900/50 backdrop-blur border border-primary-500/30 rounded-lg">
              <p className="text-dark-100 leading-relaxed text-base">
                Die bundesweit tätige Kanzlei ist spezialisiert auf die Abwehr von Ansprüchen der Finanzverwaltung aller Art im In- und Ausland.
                Einen besonderen Schwerpunkt bildet das Steuerstrafrecht mit dem Annex Insolvenzrecht.
                In internationalen Angelegenheiten stützt sich die Kanzlei auf ein Netzwerk ausgesuchter und seit Jahren persönlich bekannter Kollegen.
              </p>
            </div>

            <div className="relative mb-8 lg:hidden">
              <div className="bg-white border-2 border-primary-200 rounded-lg p-6 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="text-primary-500 text-6xl leading-none">"</div>
                  <div className="flex-1">
                    <p className="text-dark-900 font-medium italic text-base leading-relaxed mb-4">
                      "Mr. Pel's conduct of the proceedings meant that no difficulty arose in testing the evidence relied on by the Applicant. I found Mr. Pel to be honest and truthful. He did his best to assist the court, thereby demonstrating a level of objectivity consistent with the professionalism to be expected of a lawyer practising in a respected jurisdiction. I do not agree with everything that Mr. Pel has put forward, but the areas where I disagree do not undermine the broad thrust of the case he puts forward on his client's behalf."
                    </p>
                    <div className="border-t border-primary-200 pt-4">
                      <p className="text-dark-950 font-bold text-sm">Stephen Baister</p>
                      <p className="text-dark-700 text-xs">Präsident des Insolvenzgerichts, High Court of Justice London, Grundsatzurteil Steinhardt vs Eichler vom 30. Juni 2011</p> 
                      <p className="text-dark-800 text-sm leading-relaxed mt-3">
                        Das in England und Deutschland vielbeachtete Urteil stellt einen Meilenstein in der Verfolgung deutscher Insolvenzflüchtlinge in England dar. RA Pel hat in diesem Verfahren die Aufhebung des Insolvenzverfahren in England mit der Folge vollumfänglicher Unterwerfung des Schuldners unter deutsche Zwangsvollstreckungsmaßnahmen durchgesetzt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-dark-950" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-dark-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onContactClick}
                className="bg-primary-500 hover:bg-primary-600 text-dark-950 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary-500/30"
              >
                Jetzt vertraulich anfragen
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-dark-700 hover:border-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Mehr erfahren
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-3 sm:py-4 inline-flex rounded-lg shadow-lg">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C59D5F] text-[#C59D5F] sm:w-4 sm:h-4" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Anwalt.de Bewertungen</span> 
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 text-8xl leading-none">"</div>
                <div className="flex-1 pt-4">
                  <p className="text-dark-900 font-medium italic text-lg leading-relaxed mb-6">
                    "Mr. Pel's conduct of the proceedings meant that no difficulty arose in testing the evidence relied on by the Applicant. I found Mr. Pel to be honest and truthful. He did his best to assist the court, thereby demonstrating a level of objectivity consistent with the professionalism to be expected of a lawyer practising in a respected jurisdiction. I do not agree with everything that Mr. Pel has put forward, but the areas where I disagree do not undermine the broad thrust of the case he puts forward on his client's behalf."
                  </p>
                  <div className="border-t-2 border-primary-200 pt-6">
                    <p className="text-dark-950 font-bold text-xl mb-1">Stephen Baister</p>
                    <p className="text-dark-700 text-sm mb-2">Präsident des Insolvenzgerichts, High Court of Justice London, Grundsatzurteil Steinhardt vs Eichler vom 30. Juni 2011</p>
                    <p className="text-dark-500 text-xs mb-4">Steinhardt & Anor vs. Eichler & Ors, 30 June 2011</p>
                    <p className="text-dark-800 text-base leading-relaxed">
                      In England wird beim Insolvenzgericht unter einem Mediensturm in der Verfahrenssprache Englisch um Glaubhaftmachung gerungen – und das ohne die Möglichkeit eine dauerhafte Vertretung durch einen English Barrister aufzubauen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

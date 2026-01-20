import { PhoneCall, FileSearch, Target, Scale, BellRing } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: PhoneCall,
      number: '01',
      title: 'Erstkontakt',
      description: 'Sie nehmen telefonisch, per WhatsApp oder E-Mail Kontakt mit uns auf. Wir hören zu und erfassen Ihre Situation.'
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Ersteinschätzung',
      description: 'Nach Durchsicht der relevanten Unterlagen erhalten Sie eine erste Einschätzung und Handlungsempfehlung.'
    },
    {
      icon: Target,
      number: '03',
      title: 'Strategieentwicklung',
      description: 'Gemeinsam entwickeln wir eine klare Strategie, die auf Ihre individuelle Situation zugeschnitten ist.'
    },
    {
      icon: Scale,
      number: '04',
      title: 'Umsetzung & Vertretung',
      description: 'Wir setzen die Strategie um und vertreten Ihre Interessen gegenüber Behörden, Gerichten und weiteren Beteiligten.'
    },
    {
      icon: BellRing,
      number: '05',
      title: 'Laufende Updates',
      description: 'Sie werden kontinuierlich über alle wichtigen Entwicklungen informiert und bleiben stets im Bild.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">
            So arbeiten wir zusammen
          </h2>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Ein strukturierter, transparenter Ablauf gibt Ihnen Sicherheit und Klarheit
            in jeder Phase Ihres Anliegens.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center relative">
                    <step.icon size={32} className="text-white" strokeWidth={2} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-950 rounded-lg flex items-center justify-center">
                      <span className="text-primary-400 text-xs font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-white border border-primary-200 rounded-lg p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-dark-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 bottom-0 w-0.5 bg-primary-200" style={{ height: 'calc(100% - 5rem)' }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-dark-950 rounded-lg p-8 inline-block max-w-3xl">
            <p className="text-white text-lg font-medium">
              Bei dringenden Fristen oder zeitkritischen Situationen reagieren wir umgehend.
              Zögern Sie nicht, uns auch außerhalb der üblichen Geschäftszeiten zu kontaktieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

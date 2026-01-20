import { Award, Target, Network, Lock, MessageSquare } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Langjährige Erfahrung',
      description: 'Jahrzehntelange Praxis im Steuerstrafrecht und Insolvenzrecht mit nachweisbaren Erfolgen in komplexen Fällen.'
    },
    {
      icon: Target,
      title: 'Objektive Bewertung',
      description: 'Ehrliche Einschätzung Ihrer Situation ohne falsche Versprechungen – Ihr Vertrauen ist unsere Basis.'
    },
    {
      icon: Network,
      title: 'Internationales Netzwerk',
      description: 'Etablierte Kontakte zu Kollegen in der EU und den USA für koordinierte grenzüberschreitende Vertretung.'
    },
    {
      icon: MessageSquare,
      title: 'Strategische Kommunikation',
      description: 'Klare, ruhige und zielgerichtete Kommunikation mit Behörden und Gerichten – ohne Konfrontation, mit Wirkung.'
    },
    {
      icon: Lock,
      title: 'Absolute Diskretion',
      description: 'Vertraulichkeit hat oberste Priorität. Ihre Angelegenheit wird mit höchster Sorgfalt und Diskretion behandelt.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">
            Warum KanzleiPel
          </h2>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Erfahrung, Professionalität und ein starkes Netzwerk –
            das sind die Grundpfeiler unserer Arbeit für Sie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <reason.icon size={24} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-950 mb-2">
                  {reason.title}
                </h3>
                <p className="text-dark-700">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

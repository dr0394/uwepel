import { Quote, Shield, Lock, FileCheck } from 'lucide-react';

export default function Testimonial() {
  const trustElements = [
    {
      icon: Lock,
      title: 'Absolute Diskretion',
      description: 'Vertrauliche Behandlung aller Mandate'
    },
    {
      icon: Shield,
      title: 'Rechtssicherheit',
      description: 'Fundierte rechtliche Begleitung'
    },
    {
      icon: FileCheck,
      title: 'Strukturierter Ablauf',
      description: 'Transparente Kommunikation in allen Phasen'
    }
  ];

  return (
    <section id="testimonial" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary-200 rounded-lg p-8 lg:p-12 relative">
            <Quote className="absolute top-8 right-8 text-primary-500 opacity-20" size={64} />

            <div className="relative z-10">
              <blockquote className="text-2xl lg:text-3xl text-dark-900 font-medium leading-relaxed mb-8 italic">
                Rechtsanwalt Pel arbeitet ehrlich, objektiv und professionell –
                auch wenn man nicht jeder Argumentation zustimmt, ist seine Integrität
                und Fachkompetenz unbestritten.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-1 h-16 bg-primary-500 rounded-full" />
                <div>
                  <p className="text-lg font-bold text-dark-950">
                    Stephen Baister
                  </p>
                  <p className="text-dark-700">
                    Präsident des Insolvenzgerichts, High Court of Justice, London
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="bg-white border border-primary-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-dark-950 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <element.icon size={24} className="text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-dark-950 mb-2">
                  {element.title}
                </h3>
                <p className="text-dark-700 text-sm">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

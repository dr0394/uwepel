import { Briefcase, Users, User } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: Briefcase,
      title: 'Unternehmer & Geschäftsführer',
      description: 'Sie tragen Verantwortung für Ihr Unternehmen und stehen vor steuerrechtlichen oder insolvenzrechtlichen Herausforderungen. Wir unterstützen Sie mit strategischer Beratung und klarer Kommunikation.'
    },
    {
      icon: Users,
      title: 'Unternehmen mit internationalen Bezügen',
      description: 'Grenzüberschreitende Sachverhalte erfordern koordinierte Lösungen. Unser internationales Netzwerk in der EU und den USA ermöglicht effiziente Vertretung über Ländergrenzen hinweg.'
    },
    {
      icon: User,
      title: 'Privatpersonen',
      description: 'Auch als Privatperson können Sie von komplexen Ansprüchen der Finanzverwaltung betroffen sein. Wir nehmen Ihre Sorgen ernst und entwickeln mit Ihnen gemeinsam eine passende Strategie.'
    }
  ];

  return (
    <section id="target-audience" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">
            Für wen wir arbeiten
          </h2>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Wir vertreten bundesweit Mandanten aus unterschiedlichen Bereichen –
            mit der Erfahrung und dem Netzwerk auch für komplexe Fälle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white border border-primary-200 rounded-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-dark-950 rounded-lg flex items-center justify-center mb-6">
                <audience.icon size={32} className="text-primary-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-dark-950 mb-4">
                {audience.title}
              </h3>
              <p className="text-dark-700 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-100 border-l-4 border-primary-500 rounded-lg p-6 inline-block text-left">
            <p className="text-dark-900 font-medium">
              Bundesweite Vertretung mit internationaler Reichweite –
              unabhängig davon, wo Sie sich befinden oder wo Ihr Fall anhängig ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Scale, Building2, Shield, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: 'Steuerstrafrecht',
      description: 'Verteidigung in Steuerstrafverfahren, Begleitung bei Durchsuchungen und strategische Kommunikation mit Ermittlungsbehörden.'
    },
    {
      icon: Building2,
      title: 'Insolvenzrecht',
      description: 'Beratung bei Insolvenzverfahren, Anfechtung von Forderungen und Durchsetzung Ihrer Rechte in komplexen Insolvenzfällen.'
    },
    {
      icon: Shield,
      title: 'Abwehr von Auskunftsansprüchen',
      description: 'Einspruch gegen Steuerbescheid, Klage, Aussetzung der Vollziehung, Vollstreckungsaufschub, Vergleichsverhandlungen.'
    },
    {
      icon: Globe,
      title: 'Internationale Koordination',
      description: 'Bearbeitung je nach Konstellation direkt von Deutschland aus oder unter Einbeziehung unseres Netzwerks in der EU und den USA – im Netzwerk auch für komplexe Fälle.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">
            Unsere Kernkompetenzen
          </h2>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Wir vertreten Sie in allen Bereichen, in denen die Finanzverwaltung Ansprüche geltend macht –
            national und international.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-dark-950" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-dark-950 mb-4">
                {service.title}
              </h3>
              <p className="text-dark-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

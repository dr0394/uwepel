import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactProps {
  onContactFormClick: () => void;
}

export default function Contact({ onContactFormClick }: ContactProps) {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+49 208 / 884 2871',
      link: 'tel:+492088842871'
    },
    {
      icon: Phone,
      title: 'Mobil',
      content: '+49 177 6501811',
      link: 'tel:+491776501811'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+49 177 6501811',
      link: 'https://wa.me/491776501811'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'Uwe.pel@kanzleipel.de',
      link: 'mailto:Uwe.pel@kanzleipel.de'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Friesenstraße 100, 46149 Oberhausen',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">
            Nehmen Sie Kontakt auf
          </h2>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Wir sind für Sie da. Schildern Sie uns Ihr Anliegen – vertraulich und unverbindlich.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-dark-950 mb-6">
                Kontaktmöglichkeiten
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-950 mb-1">
                        {method.title}
                      </div>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {method.content}
                        </a>
                      ) : (
                        <div className="text-dark-700">{method.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-950 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Clock size={24} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Erreichbarkeit
                  </h3>
                  <div className="space-y-2 text-dark-200">
                    <div>Montag – Freitag: 10:00 – 18:00 Uhr</div>
                    <div className="text-sm text-dark-300">
                      In dringenden Fällen auch außerhalb dieser Zeiten erreichbar
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-800">
                <button
                  onClick={onContactFormClick}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6 py-4 font-semibold transition-all text-lg"
                >
                  Anfrage-Formular ausfüllen
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-primary-200 rounded-lg overflow-hidden h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.682946!2d6.8537!3d51.4852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c16b8b8b8b8b%3A0x0!2zRnJpZXNlbnN0cmHDn2UgMTAwLCA0NjE0OSBPYmVyaGF1c2VuLCBHZXJtYW55!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                className="sm:min-h-[400px] lg:min-h-[500px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KanzleiPel Standort"
              />
            </div>
            <div className="mt-4 bg-primary-100 border-l-4 border-primary-500 rounded-lg p-3 sm:p-4">
              <p className="text-dark-900 text-xs sm:text-sm">
                <strong>Hinweis:</strong> Alle Gespräche und Korrespondenz werden selbstverständlich
                vertraulich behandelt und unterliegen der anwaltlichen Verschwiegenheitspflicht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

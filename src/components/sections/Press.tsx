import { Newspaper } from 'lucide-react';

export default function Press() {
  return (
    <section id="press" className="py-16 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-2 mb-6">
            <Newspaper className="text-primary-500" size={20} />
            <span className="text-primary-500 font-semibold">In den Medien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Anerkannte Expertise
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto">
            Unsere erfolgreiche Zusammenarbeit mit internationalen Behörden wie Scotland Yard wurde im Handelsblatt gewürdigt
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all hover:shadow-primary-500/20 hover:scale-[1.02]">
              <div className="p-4 sm:p-6">
                <img
                  src="https://i.imgur.com/7rDNc40.jpeg"
                  alt="Handelsblatt Artikel über Scotland Yard Zusammenarbeit"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="px-4 sm:px-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Handelsblatt</span>
                  <span>•</span>
                  <span>Presseartikel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all hover:shadow-primary-500/20 hover:scale-[1.02]">
              <div className="p-4 sm:p-6">
                <img
                  src="https://i.imgur.com/yhT5gS4.png"
                  alt="Weitere Berichterstattung über internationale Zusammenarbeit"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="px-4 sm:px-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Handelsblatt</span>
                  <span>•</span>
                  <span>Presseartikel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-dark-900/50 backdrop-blur border border-dark-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Internationale Zusammenarbeit mit Scotland Yard
              </h3>
              <p className="text-dark-200 leading-relaxed">
                Unsere Kanzlei arbeitet erfolgreich mit internationalen Strafverfolgungsbehörden zusammen und verfügt über langjährige Erfahrung in grenzüberschreitenden Fällen. Diese Expertise wurde vom Handelsblatt anerkannt und gewürdigt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FileText, ArrowRight, CheckCircle } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-full mb-6">
            <FileText className="text-primary-400" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fallbeispiel: Steinhardt vs. Eichler
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto">
            Ein Meilenstein in der grenzüberschreitenden Insolvenzabwehr
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-900/50 backdrop-blur border border-dark-800 rounded-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                  <span className="text-primary-400 font-semibold">30.06.2011</span>
                </div>
                <span className="text-dark-300">High Court of Justice, England</span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center">
                      <span className="text-primary-400 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Ausgangslage</h3>
                  </div>
                  <p className="text-dark-200 leading-relaxed pl-11">
                    Ein deutscher Unternehmer setzte Insolvenzschutz in England durch.
                    Die dortige Verfahrenseröffnung blockierte eine vollumfängliche Zwangsvollstreckung
                    in Deutschland und beeinträchtigte die Rechte deutscher Gläubiger erheblich.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="text-primary-400" size={32} />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center">
                      <span className="text-primary-400 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Unser Vorgehen</h3>
                  </div>
                  <p className="text-dark-200 leading-relaxed pl-11">
                    Rechtsanwalt Pel vertrat die Gläubiger vor dem englischen High Court of Justice,London.
                    Durch präzise Arbeit am Sachverhalt und fundierte Kenntnis sowohl des deutschen als auch
                    des englischen Rechts konnte unter Änderung der bisherigen Rechtsprechung in England
                    erreicht werden, dass das Verfahren in England aufgehoben wurde und der Unternehmer vollumfänglich der Zwangsvollstreckung in Deutschland unterworfen werden konnte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-dark-300 text-sm">
              Quelle: Steinhardt & Anor vs. Eichler & Ors, High Court of Justice, Chancery Division, 30.06.2011
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

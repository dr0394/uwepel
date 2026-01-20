import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyEssential));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <Cookie size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-dark-950 mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-dark-700 leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. Essentielle Cookies sind für die Grundfunktionen erforderlich und können nicht deaktiviert werden.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-dark-300 hover:text-dark-700 transition-colors"
              aria-label="Schließen"
            >
              <X size={24} />
            </button>
          </div>

          {!showSettings ? (
            <>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 border-2 border-dark-200 rounded-lg hover:border-dark-300 text-dark-800 hover:text-dark-950 px-4 py-3 font-semibold transition-all"
                >
                  Nur Essentielle
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 border-2 border-primary-200 rounded-lg hover:border-primary-300 text-primary-600 hover:text-primary-700 px-4 py-3 font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Settings size={18} />
                  Einstellungen
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-3 font-semibold transition-all"
                >
                  Alle akzeptieren
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                <div className="border-2 border-dark-200 rounded-lg p-4 bg-dark-50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-dark-950 mb-1">Essentielle Cookies</h4>
                      <p className="text-sm text-dark-700">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-6 bg-primary-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-dark-200 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-dark-950 mb-1">Analytische Cookies</h4>
                      <p className="text-sm text-dark-700">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, um die Benutzererfahrung zu verbessern.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.analytics ? 'bg-primary-500 justify-end' : 'bg-dark-300 justify-start'
                      } px-1`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="border-2 border-dark-200 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-dark-950 mb-1">Marketing Cookies</h4>
                      <p className="text-sm text-dark-700">
                        Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie und Ihre Interessen relevant ist.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.marketing ? 'bg-primary-500 justify-end' : 'bg-dark-300 justify-start'
                      } px-1`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="border-2 border-dark-200 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-dark-950 mb-1">Funktionale Cookies</h4>
                      <p className="text-sm text-dark-700">
                        Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung wie Videos und Live-Chats.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.functional ? 'bg-primary-500 justify-end' : 'bg-dark-300 justify-start'
                      } px-1`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 border-2 border-dark-200 rounded-lg hover:border-dark-300 text-dark-800 hover:text-dark-950 px-4 py-3 font-semibold transition-all"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-3 font-semibold transition-all"
                >
                  Auswahl speichern
                </button>
              </div>
            </>
          )}

          <div className="mt-4 pt-4 border-t border-dark-200">
            <a
              href="/datenschutz"
              className="text-sm text-dark-700 hover:text-dark-950 underline"
            >
              Mehr Informationen in unserer Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

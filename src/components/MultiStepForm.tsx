import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Send } from 'lucide-react';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  concern: string;
  urgency: string;
  state: string;
  international: string;
  callback: string;
  name: string;
  phone: string;
  email: string;
}

export default function MultiStepForm({ isOpen, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    concern: '',
    urgency: '',
    state: '',
    international: '',
    callback: '',
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 6;

  if (!isOpen) return null;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    const message = `Neue Mandatsanfrage:

Anliegen: ${formData.concern}
Dringlichkeit: ${formData.urgency}
Bundesland: ${formData.state}
Internationale Bezüge: ${formData.international}
Rückrufwunsch: ${formData.callback}

Kontaktdaten:
Name: ${formData.name}
Telefon: ${formData.phone}
E-Mail: ${formData.email}`;

    const whatsappMessage = encodeURIComponent(message);
    const emailSubject = encodeURIComponent('Mandatsanfrage KanzleiPel');
    const emailBody = encodeURIComponent(message);

    window.open(`https://wa.me/49000000000?text=${whatsappMessage}`, '_blank');

    setTimeout(() => {
      window.location.href = `mailto:kontakt@kanzleipel.de?subject=${emailSubject}&body=${emailBody}`;
    }, 1000);

    onClose();
    setStep(1);
    setFormData({
      concern: '',
      urgency: '',
      state: '',
      international: '',
      callback: '',
      name: '',
      phone: '',
      email: ''
    });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.concern.length > 0;
      case 2: return formData.urgency.length > 0;
      case 3: return formData.state.length > 0;
      case 4: return formData.international.length > 0;
      case 5: return formData.callback.length > 0;
      case 6: return formData.name.length > 0 && formData.phone.length > 0 && formData.email.length > 0;
      default: return false;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-dark-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-2xl my-4 sm:my-8 flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        <div className="sticky top-0 bg-dark-950 rounded-t-lg p-4 sm:p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Vertrauliche Anfrage</h2>
            <p className="text-dark-300 text-xs sm:text-sm mt-1">Schritt {step} von {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="text-dark-300 hover:text-white transition-colors flex-shrink-0 ml-2"
          >
            <X size={24} className="sm:hidden" />
            <X size={28} className="hidden sm:block" />
          </button>
        </div>

        <div className="h-2 bg-primary-100">
          <div
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                Was ist Ihr Anliegen?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  'Steuerstrafverfahren',
                  'Steuerfahndung/Durchsuchung',
                  'Insolvenzverfahren',
                  'Abwehr von Auskunftsansprüchen',
                  'Internationaler Sachverhalt',
                  'Sonstiges'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => updateFormData('concern', option)}
                    className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base border-2 rounded-lg transition-all ${
                      formData.concern === option
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                Wie dringend ist Ihr Fall?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { value: 'Sehr dringend (innerhalb 24h)', label: 'Sehr dringend (innerhalb 24h)' },
                  { value: 'Dringend (innerhalb 3 Tagen)', label: 'Dringend (innerhalb 3 Tagen)' },
                  { value: 'Normal (innerhalb 1 Woche)', label: 'Normal (innerhalb 1 Woche)' },
                  { value: 'Keine akute Frist', label: 'Keine akute Frist' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('urgency', option.value)}
                    className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base border-2 rounded-lg transition-all ${
                      formData.urgency === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                In welchem Bundesland befinden Sie sich?
              </h3>
              <select
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                className="w-full p-3 sm:p-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none text-base sm:text-lg"
              >
                <option value="">Bitte wählen...</option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bayern">Bayern</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Hessen">Hessen</option>
                <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                <option value="Niedersachsen">Niedersachsen</option>
                <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                <option value="Saarland">Saarland</option>
                <option value="Sachsen">Sachsen</option>
                <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thüringen">Thüringen</option>
              </select>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                Hat Ihr Fall internationale Bezüge?
              </h3>
              <p className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6">
                Z.B. Vermögen, Geschäftstätigkeit oder Verfahren im Ausland
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { value: 'Ja, EU', label: 'Ja, innerhalb der EU' },
                  { value: 'Ja, USA', label: 'Ja, USA' },
                  { value: 'Ja, sonstiges', label: 'Ja, anderes Land' },
                  { value: 'Nein', label: 'Nein, rein national' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('international', option.value)}
                    className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base border-2 rounded-lg transition-all ${
                      formData.international === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                Wünschen Sie einen Rückruf?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { value: 'Ja, so schnell wie möglich', label: 'Ja, so schnell wie möglich' },
                  { value: 'Ja, innerhalb der nächsten Tage', label: 'Ja, innerhalb der nächsten Tage' },
                  { value: 'Nein, ich melde mich selbst', label: 'Nein, ich melde mich selbst' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('callback', option.value)}
                    className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base border-2 rounded-lg transition-all ${
                      formData.callback === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-950 mb-3 sm:mb-4">
                Ihre Kontaktdaten
              </h3>
              <p className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6">
                Alle Angaben werden selbstverständlich vertraulich behandelt.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-dark-950 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-dark-950 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="+49 XXX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-dark-950 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-primary-50 rounded-b-lg p-3 sm:p-4 md:p-6 flex items-center justify-between border-t border-primary-200 z-10">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all ${
              step === 1
                ? 'text-dark-300 cursor-not-allowed'
                : 'text-dark-800 hover:text-dark-950'
            }`}
          >
            <ChevronLeft size={18} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block" />
            <span className="hidden xs:inline">Zurück</span>
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all ${
                canProceed()
                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                  : 'bg-primary-200 text-dark-400 cursor-not-allowed'
              }`}
            >
              Weiter
              <ChevronRight size={18} className="sm:hidden" />
              <ChevronRight size={20} className="hidden sm:block" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all ${
                canProceed()
                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                  : 'bg-primary-200 text-dark-400 cursor-not-allowed'
              }`}
            >
              Absenden
              <Send size={18} className="sm:hidden" />
              <Send size={20} className="hidden sm:block" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

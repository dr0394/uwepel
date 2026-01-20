import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent('Hallo, ich interessiere mich für eine rechtliche Beratung.');
    window.open(`https://wa.me/491776501811?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={24} className="sm:hidden group-hover:scale-110 transition-transform" />
      <MessageCircle size={28} className="hidden sm:block group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-2 sm:mr-3 bg-slate-900 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        Per WhatsApp kontaktieren
      </span>
    </button>
  );
}

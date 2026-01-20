interface FooterProps {
  onImpressumClick: () => void;
  onDatenschutzClick: () => void;
}

export default function Footer({ onImpressumClick, onDatenschutzClick }: FooterProps) {
  return (
    <footer className="bg-dark-950 text-dark-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} KanzleiPel. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6 text-sm">
            <button
              onClick={onImpressumClick}
              className="hover:text-primary-400 transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={onDatenschutzClick}
              className="hover:text-primary-400 transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

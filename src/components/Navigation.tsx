import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Start', id: 'hero' },
    { label: 'Leistungen', id: 'services' },
    { label: 'Fallbeispiel', id: 'case-study' },
    { label: 'Über uns', id: 'about' },
    { label: 'Ablauf', id: 'process' },
    { label: 'Kontakt', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-950 shadow-lg' : 'bg-dark-950/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-white tracking-tight hover:text-primary-400 transition-colors"
            >
              KanzleiPel
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-dark-200 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="bg-primary-500 hover:bg-primary-600 text-dark-950 px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/30"
            >
              Vertraulich anfragen
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark-900 border-t border-dark-800">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-dark-200 hover:text-primary-400 transition-colors text-base font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary-500 hover:bg-primary-600 text-dark-950 px-6 py-3 rounded-full font-semibold transition-all"
            >
              Vertraulich anfragen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

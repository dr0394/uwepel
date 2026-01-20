import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MultiStepForm from './components/MultiStepForm';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import Hero from './components/sections/Hero';
import Press from './components/sections/Press';
import Services from './components/sections/Services';
import TargetAudience from './components/sections/TargetAudience';
import WhyUs from './components/sections/WhyUs';
import CaseStudy from './components/sections/CaseStudy';
import Testimonial from './components/sections/Testimonial';
import About from './components/sections/About';
import Process from './components/sections/Process';
import Intro from './components/sections/Intro';
import Contact from './components/sections/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

type Page = 'home' | 'impressum' | 'datenschutz';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleContactClick = () => {
    setIsFormOpen(true);
  };

  const handleImpressumClick = () => {
    setCurrentPage('impressum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDatenschutzClick = () => {
    setCurrentPage('datenschutz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'impressum') {
    return <Impressum onBack={handleBackToHome} />;
  }

  if (currentPage === 'datenschutz') {
    return <Datenschutz onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation onContactClick={handleContactClick} />

      <main>

        <Hero onContactClick={handleContactClick} />
        <About />
        <Press />
        <Services />
        
        <TargetAudience />
        <WhyUs />
        <CaseStudy />
        <Testimonial />
        <Process />
        <Intro />
        <Contact onContactFormClick={handleContactClick} />
      </main>

      <Footer
        onImpressumClick={handleImpressumClick}
        onDatenschutzClick={handleDatenschutzClick}
      />

      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

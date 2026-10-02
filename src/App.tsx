import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { FeaturedService } from './components/FeaturedService';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { QuoteForm } from './components/QuoteForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-studio-950 text-slate-100 flex flex-col font-sans selection:bg-accent-red selection:text-white pb-14 md:pb-0">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Immersive Hero with Actual Google Maps Photo */}
        <Hero />

        {/* 2. Minimal Trust Bar */}
        <TrustBar />

        {/* 3. Services Catalogue (Customizable Demo Service Menu) */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Large Editorial Visual Feature Section */}
        <FeaturedService />

        {/* 5. Why Choose Us (Grounded & Supportable Statements) */}
        <WhyChooseUs />

        {/* 6. Process Flow */}
        <Process />

        {/* 7. Masonry Gallery with Lightbox (Authentic Business Photos) */}
        <Gallery />

        {/* 8. Google Reviews Section (Official Link + Transparent Demo Placeholders) */}
        <Reviews />

        {/* 9. Location & Stylized Peshawar Map */}
        <Location />

        {/* 10. Quote Form with WhatsApp Generation */}
        <QuoteForm selectedService={selectedService} />

        {/* 11. Final High-Impact CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar (WhatsApp, Call, Directions) */}
      <FloatingActions />
    </div>
  );
}

export default App;

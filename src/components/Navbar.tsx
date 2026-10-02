import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { business, getWhatsAppUrl, getPhoneUrl } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-studio-950/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3.5 focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-accent-red/40 bg-studio-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={business.images.shopSign}
                  alt="The Expert Auto Detailing Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay"></div>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase leading-none group-hover:text-accent-red-light transition-colors">
                  The Expert
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.22em] text-slate-400 uppercase font-medium mt-1">
                  Auto Detailing • Peshawar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide uppercase text-slate-300">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-accent-red"
              >
                Location
              </button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-500/50 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => scrollToSection('quote')}
                className="flex items-center gap-2 px-4 py-2 rounded bg-accent-red hover:bg-accent-red-light text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-accent-red/25 hover:shadow-accent-red/40 hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-emerald-500/30 bg-emerald-950/30 text-emerald-400"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded bg-studio-850 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-studio-950/98 border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 font-medium uppercase tracking-wider text-sm text-slate-200">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left py-2 px-3 rounded hover:bg-white/5"
              >
                Location & Map
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="text-left py-2 px-3 rounded hover:bg-white/5 text-accent-red-light font-bold"
              >
                Request Quote
              </button>
            </div>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={getPhoneUrl()}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-studio-800 border border-white/10 text-white text-xs font-bold uppercase tracking-wider text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Clock, MapPin, ChevronDown } from 'lucide-react';
import { business, getWhatsAppUrl } from '../data/business';

export const Hero: React.FC = () => {
  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview = () => {
    const el = document.getElementById('trust-bar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container with Cinematic Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={business.images.hero}
          alt="The Expert Auto Detailing studio bay with white Fortuner Legender under ceiling hex lights"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
          loading="eager"
        />

        {/* Gradient and vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/75 to-studio-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-950/90 via-studio-950/60 to-studio-950/80" />
        
        {/* Subtle red ambient glow reflecting the brand sign */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-red/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-black/60 border border-white/15 text-slate-300 backdrop-blur-md">
            <MapPin className="w-3 h-3 text-accent-red" />
            <span>Peshawar • Achini Payan</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>Open 24 Hours</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white max-w-4xl leading-[1.12]"
        >
          Your Car Deserves the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            Expert Touch.
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-balance"
        >
          Professional vehicle care with a focus on a clean, refined and showroom-ready finish.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToQuote}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-accent-red hover:bg-accent-red-light text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-accent-red/30 hover:shadow-accent-red/50 hover:-translate-y-0.5"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-studio-900/90 hover:bg-studio-850 text-emerald-400 border border-emerald-500/40 font-bold text-sm tracking-wider uppercase transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 hover:border-emerald-500/60 shadow-lg shadow-black/50"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Verified sign confirmation badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center gap-3 px-4 py-2 rounded-lg bg-studio-900/70 border border-white/10 backdrop-blur-md"
        >
          <img
            src={business.images.shopSign}
            alt="Signage confirmed"
            className="w-6 h-6 object-cover rounded border border-accent-red/40"
          />
          <div className="text-left text-xs">
            <span className="text-slate-400">Shop Specialization:</span>{' '}
            <span className="font-semibold text-white">Auto Detailing, Wrap & PPF Studio</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1 group focus:outline-none"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-slate-500 group-hover:text-slate-300">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-accent-red" />
      </button>
    </section>
  );
};

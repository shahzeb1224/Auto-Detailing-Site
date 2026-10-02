import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { business, getWhatsAppUrl, getPhoneUrl } from '../data/business';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-studio-950 overflow-hidden border-t border-white/10">
      {/* Background with real studio photo & cinematic dark treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={business.images.studioBay}
          alt="The Expert Auto Detailing studio bay"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1] scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/80 to-studio-950" />
        <div className="absolute inset-0 bg-studio-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-[0.2em] uppercase bg-black/60 border border-white/15 text-slate-300 backdrop-blur-md mb-6">
            <span>Peshawar Ring Road • Achini Payan</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            Ready to Give Your Car the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-rose-400 to-amber-300">
              Expert Treatment?
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto font-normal">
            Tell us what your vehicle needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-emerald-950/60 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={getPhoneUrl()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-studio-900/90 hover:bg-studio-800 text-white border border-white/20 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg hover:-translate-y-0.5 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-accent-red" />
              <span>Call Now: {business.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-400">
            Open 24 Hours • Drop-offs and inquiries welcomed
          </div>
        </motion.div>
      </div>
    </section>
  );
};

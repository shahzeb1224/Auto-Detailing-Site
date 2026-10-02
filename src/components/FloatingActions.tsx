import React from 'react';
import { MessageSquare, Phone, Navigation } from 'lucide-react';
import { business, getWhatsAppUrl, getPhoneUrl } from '../data/business';

export const FloatingActions: React.FC = () => {
  return (
    <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-studio-950/95 border-t border-white/10 px-3 py-2.5 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* Call */}
        <a
          href={getPhoneUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-accent-red hover:bg-accent-red-light text-white active:scale-95 transition-transform shadow-lg shadow-accent-red/25"
        >
          <Phone className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Call Now
          </span>
        </a>

        {/* Directions */}
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-studio-900 border border-white/15 text-slate-200 active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 mb-1 text-slate-300" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Directions
          </span>
        </a>
      </div>
    </aside>
  );
};

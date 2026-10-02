import React from 'react';
import { ShieldCheck, Sparkles, MapPin, Clock, PhoneCall } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Professional Vehicle Care",
    desc: "Careful systematic handling"
  },
  {
    icon: Sparkles,
    label: "Premium Finish",
    desc: "Refined showroom appearance"
  },
  {
    icon: MapPin,
    label: "Peshawar Location",
    desc: "Ring Road, Achini Payan"
  },
  {
    icon: Clock,
    label: "Open 24 Hours",
    desc: "Flexible drop-off & access"
  },
  {
    icon: PhoneCall,
    label: "WhatsApp / Direct Call",
    desc: "Fast responsive communication"
  }
];

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="relative z-20 border-y border-white/10 bg-studio-900/90 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 group transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded bg-studio-850 border border-white/10 flex items-center justify-center text-accent-red group-hover:border-accent-red/40 group-hover:text-accent-red-light transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

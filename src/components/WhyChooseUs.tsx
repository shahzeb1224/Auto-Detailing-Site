import React from 'react';
import { motion } from 'framer-motion';
import { Focus, Eye, Navigation, MessageCircle } from 'lucide-react';

const reasons = [
  {
    number: "01",
    title: "ATTENTION TO DETAIL",
    description: "Every vehicle deserves careful attention from the first step to the final finish.",
    icon: Focus
  },
  {
    number: "02",
    title: "PREMIUM PRESENTATION",
    description: "Built around a clean, refined approach to vehicle appearance.",
    icon: Eye
  },
  {
    number: "03",
    title: "LOCAL & CONVENIENT",
    description: "Located on Peshawar Ring Road in Achini Payan.",
    icon: Navigation
  },
  {
    number: "04",
    title: "EASY TO CONTACT",
    description: "Call or message directly to discuss your vehicle.",
    icon: MessageCircle
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-studio-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
            <span>Commitment & Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Why Choose The Expert?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            A reliable approach to automotive care, grounded in practical execution and honest communication.
          </p>
        </div>

        {/* 4 Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-xl border border-white/10 bg-studio-900/40 hover:bg-studio-900 hover:border-accent-red/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-bold text-slate-600 group-hover:text-accent-red-light transition-colors">
                      {reason.number}
                    </span>
                    <div className="w-10 h-10 rounded bg-studio-850 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-accent-red group-hover:border-accent-red/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase leading-snug">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                  <span>The Expert Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

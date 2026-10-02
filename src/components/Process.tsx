import React from 'react';
import { motion } from 'framer-motion';
import { Car, ListChecks, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Vehicle",
    description: "Share your car make, model, current paint or interior condition, and what you would like addressed.",
    icon: Car
  },
  {
    number: "02",
    title: "Choose Your Service",
    description: "Select from our detailing, interior restoration, machine polishing, wrap, or PPF options.",
    icon: ListChecks
  },
  {
    number: "03",
    title: "Book / Visit",
    description: "Schedule your preferred time or drop by our studio bay on Peshawar Ring Road in Achini Payan.",
    icon: CalendarCheck
  },
  {
    number: "04",
    title: "Drive Away Looking Fresh",
    description: "Inspect the completed vehicle under our studio lights and enjoy a clean, showroom-ready finish.",
    icon: Sparkles
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-studio-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
            <span>Simple 4-Step Journey</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            A transparent and straightforward process from initial quote to final handover.
          </p>
        </div>

        {/* Process Flow: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-accent-red/20 via-white/15 to-accent-red/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative p-7 rounded-xl bg-studio-950 border border-white/10 hover:border-accent-red/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Step Indicator & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-studio-900 border border-white/15 flex items-center justify-center text-accent-red group-hover:scale-110 group-hover:border-accent-red transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-accent-red-light transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white tracking-wide mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-400 font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center gap-1 mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                      <span>Next step</span>
                      <ArrowRight className="w-3 h-3 text-accent-red" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

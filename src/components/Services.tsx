import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { services, demoNotice, ServiceItem } from '../data/services';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-studio-950 overflow-hidden">
      {/* Subtle backdrop ambient styling */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Services & Capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              More Than a Basic Wash.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              Explore the vehicle-care options available for your car.
            </p>
          </div>

          {/* Unobtrusive Demo Label */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded border border-white/10 bg-studio-900/80 text-xs text-slate-400 max-w-md">
            <AlertCircle className="w-4 h-4 text-accent-amber flex-shrink-0" />
            <p className="leading-snug">
              <span className="font-semibold text-slate-300">Client Demo Note:</span> {demoNotice}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service: ServiceItem, idx: number) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-xl border border-white/10 bg-studio-900/60 p-7 hover:border-accent-red/40 hover:bg-studio-850/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow accent on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-accent-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top card bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-accent-red-light transition-colors">
                      {service.number}
                    </span>

                    {service.isVerifiedBySignage ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase bg-accent-red/15 text-accent-red-light border border-accent-red/30">
                        {service.badge || "Confirmed on Shop Sign"}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        Demo Service
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {service.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-red flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded bg-studio-800 hover:bg-accent-red text-slate-200 hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-200"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

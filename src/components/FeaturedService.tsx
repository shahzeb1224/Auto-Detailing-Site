import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import { business, getWhatsAppUrl } from '../data/business';

export const FeaturedService: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-studio-900 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-studio-950 shadow-2xl group">
              <img
                src={business.images.featuredBaint}
                alt="The Expert Auto Detailing studio bay and vehicle finish"
                className="w-full h-auto max-h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-transparent to-transparent opacity-60" />

              {/* Verified Premises Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-3 p-3.5 rounded-xl bg-studio-950/90 border border-white/15 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-accent-red/50 flex-shrink-0">
                  <img
                    src={business.images.shopSign}
                    alt="Shield logo badge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Actual Peshawar Studio
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Hexagonal overhead detailing array & dedicated bay
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle glow border decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-red/20 to-transparent -z-10 rounded-2xl blur-xl" />
          </motion.div>

          {/* Editorial Content Side (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Craftsmanship</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.15]">
              Detailing That Makes the Difference.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              From everyday maintenance to a more refined finish, your vehicle deserves careful attention.
            </p>

            {/* Supportable bullet highlights */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-red/10 border border-accent-red/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent-red">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Inspected Under Surface Lighting</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High-output ceiling arrays allow careful inspection of clear-coat clarity and surface defects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-red/10 border border-accent-red/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent-red">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Dedicated Detailing Bay</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Purpose-built environment sheltered from street dust on Peshawar Ring Road.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-red/10 border border-accent-red/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent-red">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Wrap & Paint Protection Support</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Specialized vehicle wrap and PPF treatments tailored to your vehicle's make and condition.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={getWhatsAppUrl("Assalamualaikum, I would like to ask about detailing services for my vehicle.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md bg-white hover:bg-slate-200 text-studio-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-accent-red" />
                <span>Ask About Your Vehicle</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

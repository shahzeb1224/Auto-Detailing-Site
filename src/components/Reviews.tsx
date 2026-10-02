import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Info } from 'lucide-react';
import { business } from '../data/business';

interface DemoReviewCard {
  author: string;
  vehicle: string;
  service: string;
  comment: string;
}

// Transparently labelled demo reviews for visualization purposes only
const demoReviews: DemoReviewCard[] = [
  {
    author: "Client Demo Account",
    vehicle: "Toyota Fortuner Legender",
    service: "Full Detailing & Interior Deep Clean",
    comment: "The vehicle came out looking completely refreshed. Great attention to detail in the door jambs and cabin."
  },
  {
    author: "Client Demo Account",
    vehicle: "Honda Civic RS",
    service: "Paint Protection Film (PPF)",
    comment: "Clean film alignment and high gloss finish. Hexagonal lighting bay made inspection very thorough."
  },
  {
    author: "Client Demo Account",
    vehicle: "Toyota Land Cruiser",
    service: "Paint Correction & Polish",
    comment: "Convenient location on Peshawar Ring Road and straightforward direct communication over WhatsApp."
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-studio-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
            <span>Reputation & Feedback</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            What Customers Are Saying
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            See the latest customer reviews on Google.
          </p>

          {/* Prominent Official Google Maps CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-white hover:bg-slate-200 text-studio-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-black/40 hover:-translate-y-0.5"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-accent-red" />
            </a>

            <span className="text-xs text-slate-400 font-mono">
              Listing on Google Maps: <span className="text-white font-medium">The Expert Auto Detailing</span>
            </span>
          </div>
        </div>

        {/* Explicit Demo Review Cards Notice */}
        <div className="mb-8 p-3.5 rounded-lg border border-accent-amber/30 bg-accent-amber/10 flex items-start gap-3 max-w-2xl mx-auto text-xs text-amber-200/90">
          <Info className="w-4 h-4 text-accent-amber flex-shrink-0 mt-0.5" />
          <p>
            <span className="font-bold uppercase tracking-wider text-amber-300">Demo Placeholder Notice:</span> The cards below are clearly marked sample templates to illustrate how live Google reviews will render once published to your listing.
          </p>
        </div>

        {/* Demo Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoReviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-7 rounded-xl border border-white/10 bg-studio-950/70 flex flex-col justify-between"
            >
              {/* Demo Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-studio-800 text-amber-400 border border-amber-500/30">
                  Demo Review
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-slate-300 font-normal leading-relaxed italic">
                "{rev.comment}"
              </p>

              {/* Author & Service meta */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold text-white tracking-wide">
                  {rev.author}
                </h4>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  <span className="text-slate-300">{rev.vehicle}</span> • <span>{rev.service}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

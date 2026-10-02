import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { business, getWhatsAppUrl, getPhoneUrl } from '../data/business';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-studio-950 border-t border-white/10 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-accent-red/40 bg-studio-900 flex-shrink-0">
                <img
                  src={business.images.shopSign}
                  alt="The Expert Auto Detailing sign"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-base text-white uppercase tracking-wider">
                  The Expert
                </h3>
                <p className="text-[11px] text-accent-red-light font-medium tracking-widest uppercase">
                  Auto Detailing • Wrap & PPF
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal">
              Specialized vehicle care studio on Peshawar Ring Road, Achini Payan. Dedicated bay equipped with professional honeycomb illumination.
            </p>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Location & Contact
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent-red flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">
                {business.address}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent-red flex-shrink-0" />
              <a href={getPhoneUrl()} className="text-white hover:text-accent-red-light transition-colors font-medium">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400 font-medium">
                {business.hours}
              </span>
            </div>
          </div>

          {/* Column 3: Site Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Studio Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-white transition-colors"
                >
                  Location & Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('quote')}
                  className="hover:text-white transition-colors text-accent-red-light font-medium"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified External Channels */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Verified Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-accent-red" />
                  <span>Google Maps Listing</span>
                </a>
              </li>
              <li>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-accent-red" />
                  <span>Get Driving Directions</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Channel</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400">
              Verified Google Maps presence • Peshawar, Pakistan
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <p>© {new Date().getFullYear()} The Expert Auto Detailing. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Client Acquisition Demo Presentation • Sourced from public business data
          </p>
        </div>
      </div>
    </footer>
  );
};

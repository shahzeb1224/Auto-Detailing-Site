import React from 'react';

import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass } from 'lucide-react';
import { business, getPhoneUrl } from '../data/business';

export const Location: React.FC = () => {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-studio-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Studio Location</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Find Us in Peshawar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            Conveniently situated on the Peshawar Ring Road corridor in Achini Payan.
          </p>
        </div>

        {/* 2-Column Location & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Information Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-studio-900/70 p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-accent-red/40 bg-studio-950 flex-shrink-0">
                  <img
                    src={business.images.shopSign}
                    alt="The Expert Auto Detailing sign"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                    {business.name}
                  </h3>
                  <span className="text-xs text-accent-red-light font-medium">
                    {business.tagline}
                  </span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-6 border-t border-white/10 pt-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-studio-800 border border-white/10 flex items-center justify-center text-accent-red flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Physical Address
                    </span>
                    <p className="text-sm font-medium text-slate-200 mt-0.5 leading-snug">
                      {business.address}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-studio-800 border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                      {business.hours}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Confirmed on Google Maps listing
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-studio-800 border border-white/10 flex items-center justify-center text-accent-red flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Direct Telephone
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      <a href={getPhoneUrl()} className="hover:text-accent-red-light transition-colors">
                        {business.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Coordinates */}
                <div className="p-3.5 rounded-lg bg-studio-950/80 border border-white/5 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>GPS Coordinates:</span>
                  <span className="text-slate-200">{business.coordinates.lat}, {business.coordinates.lng}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-white hover:bg-slate-200 text-studio-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg text-center"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent-red" />
              </a>

              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-studio-800 hover:bg-studio-700 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-accent-red" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Dark Map Stylized Visual (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-studio-900 overflow-hidden relative min-h-[420px] flex items-center justify-center group shadow-2xl">
            {/* Background Google Map Snapshot with Dark Film */}
            <img
              src={business.images.staticMap}
              alt="Google Maps satellite and street layout around Achini Payan Peshawar"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-[1.15] invert-[0.9] hue-rotate-[180deg] group-hover:scale-102 transition-transform duration-700"
              loading="lazy"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/40 to-studio-950/60" />

            {/* Glowing Map Pin & Pulse Animation */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-sm">
              <div className="relative mb-4">
                {/* Ping ring */}
                <span className="absolute -inset-3 rounded-full bg-accent-red/30 animate-ping" />
                <div className="relative w-14 h-14 rounded-full bg-accent-red border-2 border-white flex items-center justify-center shadow-2xl shadow-accent-red/50">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-studio-950/90 border border-white/15 backdrop-blur-md shadow-2xl">
                <p className="text-xs font-mono font-bold text-accent-red uppercase tracking-wider">
                  The Expert Auto Detailing
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  Peshawar Ring Road, Achini Payan
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  25000 Peshawar, Khyber Pakhtunkhwa
                </p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent-red hover:bg-accent-red-light text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>View Exact Pin</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Map Floating Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-studio-950/80 px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm pointer-events-none">
              <span>Google Maps Listing Active</span>
              <span className="text-emerald-400">● Open 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

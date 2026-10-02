// Centralized business profile for The Expert Auto Detailing
// Internal Demo Note: Temporary demo imagery sourced from the business's public Google Maps listing. Replace with original high-resolution assets supplied by the client before production launch.

import heroImg from '../assets/expert-auto/hero.jpg';
import shopSignImg from '../assets/expert-auto/shop-sign.png';
import staticMapImg from '../assets/expert-auto/map-location.png';
import studioBayImg from '../assets/expert-auto/studio-bay.jpg';
import featuredBayImg from '../assets/expert-auto/featured-bay.jpg';

export interface BusinessProfile {
  name: string;
  tagline: string;
  category: string;
  phone: string;
  phoneDisplay: string;
  phoneRaw: string;
  address: string;
  shortAddress: string;
  city: string;
  area: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  directionsUrl: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  verifiedFeatures: string[];
  images: {
    hero: string;
    shopSign: string;
    staticMap: string;
    studioBay: string;
    featuredBaint: string;
  };
}

export const business: BusinessProfile = {
  name: "The Expert Auto Detailing",
  tagline: "Wrap & PPF Studio",
  category: "Car Wash & Auto Detailing",
  phone: "+92 330 0643536",
  phoneDisplay: "+92 330 0643536",
  phoneRaw: "923300643536",
  address: "XF9Q+HQJ, Peshawar Ring Rd., Achini Payan, Peshawar, 25000, Pakistan",
  shortAddress: "Peshawar Ring Rd., Achini Payan, Peshawar",
  city: "Peshawar",
  area: "Achini Payan",
  hours: "Open 24 Hours",
  coordinates: {
    lat: 33.9689308,
    lng: 71.4893262,
  },
  googleMapsUrl: "https://www.google.com/maps/place/The+Expert+Auto+Detailing/@33.9692246,71.4895508,610m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38d917104a530813:0x75f0b19d16179846!2sThe+Expert+Auto+Detailing!8m2!3d33.9689308!4d71.4893262!10e1!16s%2Fg%2F11nw7vg_32!3m5!1s0x38d917104a530813:0x75f0b19d16179846!8m2!3d33.9689308!4d71.4893262!16s%2Fg%2F11nw7vg_32",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=33.9689308,71.4893262",
  whatsappNumber: "923300643536",
  defaultWhatsAppMessage: "Assalamualaikum, I found The Expert Auto Detailing online and would like to ask about your services for my vehicle.",
  verifiedFeatures: [
    "Professional Vehicle Care",
    "Peshawar Ring Road Location",
    "Open 24 Hours",
    "Direct WhatsApp & Phone Booking"
  ],
  images: {
    hero: heroImg,
    shopSign: shopSignImg,
    staticMap: staticMapImg,
    studioBay: studioBayImg,
    featuredBaint: featuredBayImg,
  }
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const msg = customMessage || business.defaultWhatsAppMessage;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const getPhoneUrl = (): string => {
  return `tel:${business.phoneRaw}`;
};

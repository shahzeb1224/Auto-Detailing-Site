// Gallery data configuration for The Expert Auto Detailing
// Internal Demo Note: Temporary demo imagery sourced from the business's public Google Maps listing. Replace with original high-resolution assets supplied by the client before production launch.

import gallery01 from '../assets/expert-auto/gallery-01.jpg';
import gallery02 from '../assets/expert-auto/gallery-02.jpg';
import gallery03 from '../assets/expert-auto/gallery-03.jpg';
import gallery04 from '../assets/expert-auto/gallery-04.jpg';
import gallery05 from '../assets/expert-auto/gallery-05.jpg';
import heroImg from '../assets/expert-auto/hero.jpg';
import featuredImg from '../assets/expert-auto/featured-bay.jpg';

export type GalleryCategory = 'ALL' | 'STUDIO' | 'VEHICLES' | 'DETAILING';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  span?: string; // CSS grid span class for masonry effect
  aspect?: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "studio-bay-hero",
    src: heroImg,
    alt: "The Expert Auto Detailing studio bay featuring vehicle under overhead hexagonal LED lighting array",
    title: "Flagship Detailing Bay",
    category: "STUDIO",
    span: "col-span-1 md:col-span-2 row-span-2",
    aspect: "aspect-[16/10]",
    description: "The primary detailing bay at Peshawar Ring Road equipped with ceiling-mounted hexagonal honeycomb LEDs for surface clarity."
  },
  {
    id: "shop-shield-sign",
    src: gallery03,
    alt: "The Expert Auto Detailing Wrap & PPF illuminated 3D wall shield badge",
    title: "Illuminated Studio Badge",
    category: "STUDIO",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
    description: "The official studio acrylic shield and illuminated neon signage confirming Wrap & PPF expertise."
  },
  {
    id: "grille-clarity",
    src: gallery02,
    alt: "Vehicle front grille, Toyota GR badge, and hood reflection under studio lighting",
    title: "Surface Reflection & Front Fascia",
    category: "VEHICLES",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
    description: "High-definition paint reflection and front grille finish illuminated under precision detailing lamps."
  },
  {
    id: "vehicle-bay-full",
    src: gallery01,
    alt: "White Toyota Fortuner Legender in the detailing studio with doors open during session",
    title: "Active Detailing Session",
    category: "VEHICLES",
    span: "col-span-1 md:col-span-2 row-span-2",
    aspect: "aspect-[3/4] md:aspect-[16/10]",
    description: "Vehicle staged in the workshop bay with open access for comprehensive interior and exterior treatment."
  },
  {
    id: "hex-lighting-array",
    src: gallery05,
    alt: "Overhead hexagonal honeycomb LED detailing illumination architecture",
    title: "Honeycomb LED Array",
    category: "STUDIO",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    description: "Even-distribution inspection lighting configured to reveal swirls, micro-scratches, and finish imperfections."
  },
  {
    id: "cabin-craftsmanship",
    src: gallery04,
    alt: "Driver side door panel and interior treatment during workshop process",
    title: "Door Jamb & Cabin Access",
    category: "DETAILING",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
    description: "Detailed attention to sills, door cards, and inner jambs during the vehicle preparation sequence."
  },
  {
    id: "featured-finish",
    src: featuredImg,
    alt: "Finished vehicle under studio lights showing high-clarity paint depth",
    title: "Finished Vehicle Staging",
    category: "DETAILING",
    span: "col-span-1 md:col-span-2 row-span-1",
    aspect: "aspect-[16/9]",
    description: "Inspected and staged under studio lighting to verify uniform gloss across all body panels."
  }
];

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
  { label: "ALL", value: "ALL" },
  { label: "STUDIO", value: "STUDIO" },
  { label: "VEHICLES", value: "VEHICLES" },
  { label: "DETAILING", value: "DETAILING" },
];

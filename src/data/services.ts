// Service catalogue configuration for The Expert Auto Detailing
// Notice: Includes clear demo labelling for services requiring client confirmation.

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  isVerifiedBySignage?: boolean;
  badge?: string;
}

export const services: ServiceItem[] = [
  {
    id: "exterior-detailing",
    number: "01",
    title: "Exterior Detailing",
    subtitle: "Deep Clean & Paint Decontamination",
    description: "Multi-stage exterior wash, iron fallout removal, clay bar decontamination, wheel & wheel-well treatment, and sealant protection for a crisp, showroom-ready finish.",
    features: [
      "Foam cannon pre-wash & two-bucket method",
      "Wheel, arch, and tire deep cleaning",
      "Surface decontamination & iron removal",
      "Gloss-enhancing paint sealant"
    ]
  },
  {
    id: "interior-detailing",
    number: "02",
    title: "Interior Detailing",
    subtitle: "Complete Cabin Restoration",
    description: "Deep steam cleaning, upholstery extraction, leather conditioning, dashboard UV dressing, and crevice detailing for an immaculate interior environment.",
    features: [
      "Steam cleaning & antibacterial sanitization",
      "Upholstery & carpet shampoo extraction",
      "Leather cleansing & conditioning",
      "UV protection on dash & interior trims"
    ]
  },
  {
    id: "paint-correction",
    number: "03",
    title: "Paint Correction",
    subtitle: "Swirl & Scratch Removal",
    description: "Precision machine compounding and polishing to eliminate swirl marks, light scratches, oxidation, and buffer trails, restoring true paint depth and clarity.",
    features: [
      "Paint thickness gauge assessment",
      "Multi-stage orbital rotary compounding",
      "High-gloss jewel polishing finish",
      "Removal of spider webbing & oxidation"
    ]
  },
  {
    id: "ppf-installation",
    number: "04",
    title: "Paint Protection Film (PPF)",
    subtitle: "Confirmed Shop Specialization (Signage)",
    isVerifiedBySignage: true,
    badge: "Featured on Shop Sign",
    description: "High-grade self-healing thermoplastic polyurethane film engineered to shield paintwork from stone chips, road debris, rock strikes, and environmental degradation.",
    features: [
      "Self-healing elastomeric top coat",
      "High-impact stone chip defense",
      "Ultra-clear hydrophobic gloss finish",
      "Precision computerized template alignment"
    ]
  },
  {
    id: "vehicle-wrap",
    number: "05",
    title: "Vehicle Wrap & Styling",
    subtitle: "Confirmed Shop Specialization (Signage)",
    isVerifiedBySignage: true,
    badge: "Featured on Shop Sign",
    description: "Full or accent vinyl vehicle wrapping for customized aesthetic transformation, chrome deletes, roof wraps, and color changes with premium cast vinyl.",
    features: [
      "Full vehicle color changes",
      "Gloss, satin, and matte finishes",
      "Chrome deletes & accent blackouts",
      "Original paint preservation underneath"
    ]
  },
  {
    id: "ceramic-coating",
    number: "06",
    title: "Ceramic Coating",
    subtitle: "Hydrophobic Glass Shield",
    description: "Advanced nanoceramic coating creating a sacrificial chemical barrier against harsh UV rays, road grime, bird droppings, and water spots with intense hydrophobic water-beading.",
    features: [
      "Hardened hydrophobic protective barrier",
      "Intense optical depth & wet-look gloss",
      "UV resistance against Peshawar sun",
      "Effortless self-cleaning properties"
    ]
  },
  {
    id: "window-tinting",
    number: "07",
    title: "Window Tinting",
    subtitle: "Solar Heat & UV Rejection",
    description: "Premium automotive window film installations providing infrared heat rejection, glare reduction, UV shielding, and enhanced cabin privacy.",
    features: [
      "High infrared & solar heat rejection",
      "99% UV radiation blocking",
      "Reduced cabin interior fading",
      "Precision bubble-free finish"
    ]
  }
];

export const demoNotice = "Demo service menu — customize with the business's confirmed services.";

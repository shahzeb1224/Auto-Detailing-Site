# The Expert Auto Detailing — Client Acquisition Demo

A high-performance, dark-aesthetic automotive detailing website created as a client acquisition demo for **The Expert Auto Detailing** located on **Peshawar Ring Road, Achini Payan, Peshawar, Pakistan**.

---

## 1. Verified Business Profile (Source: Google Maps Listing)

* **Business Name**: THE EXPERT AUTO DETAILING
* **Specialization Badge (Confirmed on Shop Signage)**: Wrap & PPF Studio / Auto Detailing
* **Google Maps Category**: Car wash
* **Address**: XF9Q+HQJ, Peshawar Ring Rd., Achini Payan, Peshawar, 25000, Pakistan
* **Coordinates**: `33.9689308, 71.4893262`
* **Operating Hours**: Open 24 Hours
* **Direct Telephone**: `+92 330 0643536`
* **Direct WhatsApp**: `https://wa.me/923300643536`
* **Google Maps Direct URL**: [Google Maps Place Listing](https://www.google.com/maps/place/The+Expert+Auto+Detailing/@33.9692246,71.4895508,610m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38d917104a530813:0x75f0b19d16179846!2sThe+Expert+Auto+Detailing!8m2!3d33.9689308!4d71.4893262!10e1!16s%2Fg%2F11nw7vg_32!3m5!1s0x38d917104a530813:0x75f0b19d16179846!8m2!3d33.9689308!4d71.4893262!16s%2Fg%2F11nw7vg_32)

---

## 2. Actual Business Photography Used

The website uses the **actual, authentic Google Maps photography** of the business:
1. **Studio Detailing Bay (`hero.jpg`, `studio-bay.jpg`)**: Original 3024x4032 camera capture of the white Toyota Fortuner Legender (Islamabad plate AKH-771, GR badge) inside their bay under the signature overhead hexagonal honeycomb LED lighting grid.
2. **Illuminated Acrylic Shield Badge (`shop-sign.png`, `gallery-03.jpg`)**: High-contrast, clean crop of the physical 3D shop sign mounted inside the premises ("THE EXPERT Auto Detailing WRAP & PPF").
3. **Detail Close-Ups (`gallery-02.jpg`, `gallery-04.jpg`, `gallery-05.jpg`)**: High-definition crops capturing the surface reflections, honeycomb lighting ceiling array, and open-door cabin craftsmanship.
4. **Authentic Google Map Visual (`map-location.png`)**: Real satellite & road layout of Achini Payan / Ring Road styled with a dark automotive theme.

---

## 3. Image Architecture

Images are strictly decoupled from JSX code and centralized in data structures:
* `src/data/business.ts` — Contains core business metadata and primary asset bindings.
* `src/data/gallery.ts` — Contains the gallery item catalog, categories, dimensions, and descriptions.
* `src/assets/expert-auto/` — Clean asset directory storing all local files.

To swap images with newly provided client media, replace files in `src/assets/expert-auto/` or update imports in `src/data/business.ts` and `src/data/gallery.ts`.

---

## 4. Key Website Features & Conversion Funnel

* **Sticky Dark Navbar**: Brand shield emblem, section navigation, quick WhatsApp button, and prominent "Get a Quote" CTA.
* **Cinematic Hero**: Full-viewport showcase of their detailing bay with Peshawar location pill, 24-hour status, and WhatsApp/Quote conversion buttons.
* **Trust Bar**: Understated factual highlights without fabricated statistics.
* **Configurable Service Menu**: Premium cards with clear demo labels and verified callouts for Wrap & PPF (confirmed on their sign).
* **Editorial Feature Section**: Highlighting the overhead LED inspection array and studio bay.
* **Process Flow**: 4-step client journey from quote to handover.
* **Interactive Masonry Gallery with Lightbox**: Filterable by Category (All, Studio, Vehicles, Detailing) with full keyboard navigation (`Left`, `Right`, `Esc`) and swipe friendliness.
* **Google Reviews Section**: Direct external link to their live Google listing and explicitly labelled demo cards.
* **Peshawar Location & Map Section**: Custom dark map visualization showing Peshawar Ring Road, Achini Payan, coordinates, with 1-click "Open in Google Maps" and "Get Directions".
* **Quote Form with Instant WhatsApp Generation**: Form validation (Name, Phone, Vehicle, Service) that formats an inquiry message and launches WhatsApp directly with prefilled text.
* **Mobile Floating Action Bar**: Fixed bottom bar featuring WhatsApp, Call Now, and Directions.

---

## 5. Quick Start Commands

### Development Server:
```bash
npm run dev
# Starts on http://localhost:3000
```

### Production Build:
```bash
npm run build
```

### Production Preview:
```bash
npm run preview
# Serves dist/ on http://localhost:4173
```

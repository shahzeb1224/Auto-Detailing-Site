import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Camera 
} from 'lucide-react';
import { 
  galleryImages, 
  galleryCategories, 
  GalleryCategory, 
  GalleryImage 
} from '../data/gallery';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'ALL'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNextImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  }, [activeImageIndex, filteredImages.length]);

  const showPrevImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, closeLightbox, showNextImage, showPrevImage]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-studio-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Inside Our Peshawar Studio
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 font-normal">
              Actual studio premises, lighting architecture, and vehicle detailing on Peshawar Ring Road.
            </p>
          </div>

          {/* Premises verification note */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3.5 py-2 rounded-lg">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>Actual Google Maps Studio Photography</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setActiveImageIndex(null);
              }}
              className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-accent-red text-white shadow-lg shadow-accent-red/25'
                  : 'bg-studio-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image: GalleryImage, idx: number) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-studio-900 shadow-xl aspect-[4/3] sm:aspect-square flex items-center justify-center"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Dark subtle overlay on idle, deeper on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Hover Badge / Action */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-black/70 border border-white/15 text-slate-300 backdrop-blur-md">
                  {image.category}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 translate-y-1 group-hover:translate-y-0">
                <h4 className="font-display text-base font-bold text-white group-hover:text-accent-red-light transition-colors">
                  {image.title}
                </h4>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed opacity-90 group-hover:opacity-100">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Studio attribution comment */}
        <p className="mt-8 text-center text-xs text-slate-500 font-mono">
          Photos sourced directly from The Expert Auto Detailing public Google Maps presence.
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && filteredImages[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar with Counter and Close Button */}
            <div 
              className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full">
                  {activeImageIndex + 1} / {filteredImages.length}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold hidden sm:inline-block">
                  {filteredImages[activeImageIndex].title}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Prev Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all z-50 hover:scale-110 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all z-50 hover:scale-110 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div 
              className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={filteredImages[activeImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].alt}
                className="max-w-full max-h-[72vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />

              {/* Image Info at bottom */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <h3 className="text-lg font-bold text-white font-display">
                  {filteredImages[activeImageIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {filteredImages[activeImageIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

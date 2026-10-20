import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryItem {
  src: string;
  category: 'garden' | 'rooms' | 'living' | 'details';
  title: string;
}

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'garden' | 'rooms' | 'living' | 'details'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    // Garden
    { src: '/images/ndf_8231.jpg', category: 'garden', title: 'Giardino serale con illuminazione' },
    { src: '/images/ndf_8038.jpg', category: 'garden', title: 'Albero di fico secolare e fiori' },
    { src: '/images/ndf_8058.jpg', category: 'garden', title: 'Vista panoramica con tetti dei trulli' },
    { src: '/images/ndf_8048.jpg', category: 'garden', title: 'Tavolo esterno all’ombra del fico' },
    { src: '/images/ndf_8233.jpg', category: 'garden', title: 'Patio e damigiane al tramonto' },
    { src: '/images/ndf_8041.jpg', category: 'garden', title: 'Dettagli floreali del giardino' },

    // Bedrooms
    { src: '/images/ndf_8001.jpg', category: 'rooms', title: 'Camera matrimoniale con specchiera antica' },
    { src: '/images/ndf_8022.jpg', category: 'rooms', title: 'Seconda camera matrimoniale moderna' },
    { src: '/images/ndf_8005.jpg', category: 'rooms', title: 'Letto matrimoniale e biancheria' },
    { src: '/images/ndf_8021.jpg', category: 'rooms', title: 'Armadio e comfort seconda camera' },
    { src: '/images/ndf_8011.jpg', category: 'rooms', title: 'Dettagli di benvenuto in camera' },

    // Living & Kitchen
    { src: '/images/ndf_7963.jpg', category: 'living', title: 'Cucina completa e zona pranzo' },
    { src: '/images/ndf_7972.jpg', category: 'living', title: 'Salotto con divano e Smart TV' },
    { src: '/images/ndf_7989.jpg', category: 'living', title: 'Tavolo da pranzo per tutta la famiglia' },
    { src: '/images/ndf_7994.jpg', category: 'living', title: 'Zona giorno luminosa e accogliente' },

    // Details, Driveway & Bathrooms
    { src: '/images/ndf_8246.jpg', category: 'details', title: 'Viale privato con parcheggio per 3 auto' },
    { src: '/images/ndf_7960.jpg', category: 'details', title: 'Ingresso indipendente e facciata' },
    { src: '/images/ndf_7978.jpg', category: 'details', title: 'Bagno privato con cabina doccia' },
    { src: '/images/ndf_7979.jpg', category: 'details', title: 'Secondo bagno completo' },
    { src: '/images/ndf_8242.jpg', category: 'details', title: 'Dettagli floreali e scalinata' },
    { src: '/images/ndf_8257.jpg', category: 'details', title: 'Atmosfera serale pugliese' },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d4a3e]/10 text-[#2d4a3e] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: t.gallery.filterAll },
            { id: 'garden', label: t.gallery.filterGarden },
            { id: 'rooms', label: t.gallery.filterRooms },
            { id: 'living', label: t.gallery.filterLiving },
            { id: 'details', label: t.gallery.filterDetails },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id as any)}
              className={`cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#2d4a3e] text-white shadow-sm'
                  : 'bg-white text-[#554d45] border border-[#e5dcce] hover:border-[#2d4a3e]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#eadecf] border border-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#2d4a3e] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="cursor-pointer absolute top-5 right-5 text-white/80 hover:text-white p-2 z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="cursor-pointer absolute left-4 text-white/80 hover:text-white p-3 z-50 rounded-full bg-black/40 hover:bg-black/60"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="text-white text-sm font-medium mt-3 text-center">
              {filteredItems[lightboxIndex].title} ({lightboxIndex + 1} / {filteredItems.length})
            </div>
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="cursor-pointer absolute right-4 text-white/80 hover:text-white p-3 z-50 rounded-full bg-black/40 hover:bg-black/60"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

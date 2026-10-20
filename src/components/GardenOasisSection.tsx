import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Trees, Sun, Moon, Utensils, Sparkles, ChevronRight } from 'lucide-react';

interface GardenOasisSectionProps {
  onOpenBooking: () => void;
}

export const GardenOasisSection: React.FC<GardenOasisSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const highlightIcons = [
    <Utensils className="w-5 h-5 text-[#2d4a3e]" />,
    <Sun className="w-5 h-5 text-[#2d4a3e]" />,
    <Moon className="w-5 h-5 text-[#2d4a3e]" />,
  ];

  return (
    <section id="garden" className="py-20 lg:py-28 bg-[#f5eee3]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5] group">
                <img
                  src="/images/ndf_8038.jpg"
                  alt="Il Giardino di giorno con albero di fico"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5] mt-8 group">
                <img
                  src="/images/ndf_8231.jpg"
                  alt="Il Giardino al crepuscolo con lucine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom Panoramic Card */}
            <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white aspect-[16/9] group relative">
              <img
                src="/images/ndf_8058.jpg"
                alt="Vista panoramica del giardino con tetti dei trulli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs sm:text-sm font-medium">
                  Sullo sfondo: i profili conici dei Trulli storici di Alberobello
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2d4a3e]/10 text-[#2d4a3e] text-xs font-semibold uppercase tracking-widest mb-4 self-start">
              <Trees className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>{t.garden.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] leading-tight mb-6">
              {t.garden.title}
            </h2>

            <p className="text-base text-[#524b43] leading-relaxed mb-4 font-sans">
              {t.garden.desc1}
            </p>

            <p className="text-base text-[#524b43] leading-relaxed mb-8 font-sans">
              {t.garden.desc2}
            </p>

            {/* 3 Highlights */}
            <div className="space-y-4 mb-8">
              {t.garden.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-[#e8dfd2]">
                  <div className="w-10 h-10 rounded-xl bg-[#2d4a3e]/10 flex items-center justify-center shrink-0">
                    {highlightIcons[idx]}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-[#1e3329]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#665e55] mt-0.5 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#2d4a3e] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1a3026] transition-all shadow-md hover:shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d8c29d]" />
                <span>Prenota il tuo Soggiorno nel Giardino</span>
                <ChevronRight className="w-4 h-4 text-[#d8c29d]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

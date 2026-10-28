import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bed, Bath, UtensilsCrossed, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface SpacesSectionProps {
  onOpenBooking: () => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [
    <Bed className="w-4 h-4" />,
    <Bed className="w-4 h-4" />,
    <Bath className="w-4 h-4" />,
    <UtensilsCrossed className="w-4 h-4" />,
  ];

  const currentSpace = t.spaces.items[activeTab];

  return (
    <section id="spaces" className="py-20 lg:py-28 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03624c]/10 text-[#03624c] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.spaces.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.spaces.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.spaces.subtitle}
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {t.spaces.items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-[#03624c] text-white shadow-md scale-105'
                  : 'bg-white text-[#524b43] border border-[#e5dcce] hover:border-[#03624c]/40 hover:bg-[#f6f2ea]'
              }`}
            >
              <span>{tabIcons[idx]}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Space Detail Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#e8dfd2] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Preview */}
            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[500px] overflow-hidden group">
              <img
                src={currentSpace.image}
                alt={currentSpace.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-[#f7e0bc]">
                  {currentSpace.subtitle}
                </span>
                <h3 className="text-xl font-heading font-semibold">
                  {currentSpace.title}
                </h3>
              </div>
            </div>

            {/* Information & Features */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-[#faf8f5]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9f3757] font-bold">
                  {currentSpace.subtitle}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#172e24] mt-1 mb-4">
                  {currentSpace.title}
                </h3>

                <p className="text-sm sm:text-base text-[#61584e] leading-relaxed font-sans mb-8">
                  {currentSpace.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8a7f72]">
                    Caratteristiche & Dotazioni:
                  </h4>
                  {currentSpace.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#03624c]">
                      <CheckCircle2 className="w-4 h-4 text-[#03624c] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#f0eae0] flex items-center justify-between">
                <div className="text-xs text-[#7d7468]">
                  Ingresso indipendente • Riscaldamento a pavimento
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#03624c] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#024d3c] transition-colors"
                >
                  <span>Prenota</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#d8c29d]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

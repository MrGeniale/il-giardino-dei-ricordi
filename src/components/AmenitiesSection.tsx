import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Car, Trees, Wind, Wifi, UtensilsCrossed, Baby, Bath, Key, Sparkles } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    Car: <Car className="w-5 h-5 text-[#03624c]" />,
    Trees: <Trees className="w-5 h-5 text-[#03624c]" />,
    Wind: <Wind className="w-5 h-5 text-[#03624c]" />,
    Wifi: <Wifi className="w-5 h-5 text-[#03624c]" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#03624c]" />,
    Baby: <Baby className="w-5 h-5 text-[#03624c]" />,
    Bath: <Bath className="w-5 h-5 text-[#03624c]" />,
    Key: <Key className="w-5 h-5 text-[#03624c]" />,
  };

  return (
    <section id="amenities" className="py-20 lg:py-24 bg-[#f8f5ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03624c]/10 text-[#03624c] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.amenities.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.amenities.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.amenities.subtitle}
          </p>
        </div>

        {/* Grid 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.amenities.list.map((amenity, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-[#e6decf] hover:border-[#03624c]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#03624c]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[amenity.icon]}
              </div>

              <h3 className="font-heading text-lg font-semibold text-[#1e3329] mb-1.5 leading-snug">
                {amenity.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6d6459] leading-relaxed font-sans">
                {amenity.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

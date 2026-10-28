import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Clock, ExternalLink, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#f5eee3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03624c]/10 text-[#03624c] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.location.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Walking Distances Card List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8dfd2] shadow-sm mb-6">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#03624c]/10 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-[#03624c]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#1e3329]">
                    Dimentica l'automobile: vivi Alberobello a piedi
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665e55] mt-1 font-sans leading-relaxed">
                    {t.location.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#03624c] bg-[#03624c]/5 p-3 rounded-xl border border-[#03624c]/15">
                <MapPin className="w-4 h-4 shrink-0 text-[#9f3757]" />
                <span>{t.location.address}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.location.places.map((place, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-2xl p-4 border border-[#e8dfd2] hover:border-[#03624c]/40 transition-all shadow-2xs hover:shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#03624c] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9f3757]" />
                      <span>{place.time}</span>
                    </span>
                    <span className="text-[11px] text-[#8a7f72] font-medium bg-[#faf8f5] px-2 py-0.5 rounded-full border border-[#eee5d8]">
                      {place.distance}
                    </span>
                  </div>

                  <h4 className="font-heading text-base font-semibold text-[#172e24]">
                    {place.name}
                  </h4>
                  <p className="text-xs text-[#6d6459] mt-0.5 font-sans leading-snug">
                    {place.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Capitano+V.+di+Mola+35+Alberobello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#03624c] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#024d3c] transition-colors shadow-sm"
              >
                <span>{t.location.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d8c29d]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-4 sm:p-5 border border-[#e8dfd2] shadow-lg sticky top-28">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] relative bg-[#e7dfd3] border border-[#d8cfc0]">
              <iframe
                title="Mappa Il Giardino dei Ricordi Alberobello"
                src="https://maps.google.com/maps?q=Via%20Capitano%20V.%20di%20Mola%2035,%20Alberobello&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            
            <div className="mt-4 p-3 bg-[#faf8f5] rounded-xl border border-[#ece4d6] text-center">
              <span className="text-xs text-[#5a5247]">
                Cancello di accesso privato per auto su <strong>Via Capitano V. di Mola 35</strong>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

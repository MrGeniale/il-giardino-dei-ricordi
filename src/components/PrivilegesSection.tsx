import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Car, MapPin, Trees, Users, ShieldCheck, Sparkles } from 'lucide-react';

export const PrivilegesSection: React.FC = () => {
  const { t } = useLanguage();

  const icons: Record<string, React.ReactNode> = {
    Car: <Car className="w-6 h-6 text-[#2d4a3e]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#2d4a3e]" />,
    Trees: <Trees className="w-6 h-6 text-[#2d4a3e]" />,
    Users: <Users className="w-6 h-6 text-[#2d4a3e]" />,
  };

  return (
    <section id="privileges" className="py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d4a3e]/10 text-[#2d4a3e] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.privileges.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.privileges.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.privileges.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.privileges.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#e8dfd2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2d4a3e]/5 rounded-bl-full transition-transform group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#2d4a3e]/10 flex items-center justify-center group-hover:bg-[#2d4a3e] group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {icons[item.icon]}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9f3757] bg-[#9f3757]/10 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-[#172e24] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#61584e] leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2ece2] flex items-center gap-1.5 text-xs font-semibold text-[#2d4a3e]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantito al 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Private Parking in Alberobello */}
        <div className="mt-14 bg-gradient-to-r from-[#1e3a2f] to-[#2c4e40] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Car className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-[#d8c29d] font-semibold">
                Il Vantaggio che Fa la Differenza
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-normal mt-2 mb-3">
                Dimentica il costo e l'ansia del parcheggio ad Alberobello
              </h3>
              <p className="text-sm sm:text-base text-[#d2cbbf] leading-relaxed font-sans max-w-2xl">
                I parcheggi comunali ad Alberobello hanno costi che possono superare i 25-30€ al giorno e trovare posto in alta stagione è spesso snervante. Con noi entri con il tuo veicolo nel viale privato custodito e raggiungi a piedi qualsiasi attrazione in pochi minuti.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 text-center">
                <div className="text-2xl font-heading font-bold text-[#f7e0bc]">0 €</div>
                <div className="text-xs text-[#d2cbbf]">Nessun costo di parcheggio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 text-center">
                <div className="text-2xl font-heading font-bold text-[#f7e0bc]">Fino a 3</div>
                <div className="text-xs text-[#d2cbbf]">Posti auto contemporanei</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

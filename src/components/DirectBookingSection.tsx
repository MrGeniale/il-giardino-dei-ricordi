import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Phone, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

interface DirectBookingSectionProps {
  onOpenBooking: () => void;
}

export const DirectBookingSection: React.FC<DirectBookingSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#faf8f5] to-[#f4eee3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1f382d] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-[#2d4a3e]">
          {/* Subtle floral/leaf watermark decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8a97e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d8c29d] text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.directBooking.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal mb-4 leading-tight">
                {t.directBooking.title}
              </h2>

              <p className="text-base sm:text-lg text-[#d2cbbf] leading-relaxed mb-8 font-sans max-w-xl">
                {t.directBooking.desc}
              </p>

              {/* 4 Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {t.directBooking.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-base font-medium text-white">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-[#c5bcaf] mt-0.5 leading-snug">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f7e0bc] text-[#1a3327] text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-[#ebd0a6] transition-all duration-300 shadow-md hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-[#9f3757]" />
                  <span>Richiedi Disponibilità</span>
                </button>

                <a
                  href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
                    'Buongiorno Marilena, vorrei richiedere la migliore tariffa diretta per soggiornare a Il Giardino dei Ricordi ad Alberobello.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.directBooking.ctaWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Right Card: Host Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-white/90 p-1 shadow-md">
                  <img
                    src="/images/logo-nav.png"
                    alt="Il Giardino dei Ricordi"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-xs uppercase tracking-widest text-[#d8c29d] font-semibold mb-1">
                  La Tua Ospitante
                </div>
                <h3 className="text-2xl font-heading font-medium text-white mb-2">
                  {t.brand.hostName}
                </h3>
                <p className="text-xs text-[#cfc7ba] mb-6 leading-relaxed max-w-xs mx-auto">
                  Sempre a tua disposizione per informazioni, orari di arrivo, consigli sui migliori ristoranti e segreti di Alberobello.
                </p>

                <div className="space-y-2.5">
                  <a
                    href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{t.brand.phone}</span>
                  </a>

                  <a
                    href={t.brand.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs text-[#c5bcaf] hover:text-white pt-2 transition-colors"
                  >
                    <span>{t.directBooking.orBooking}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

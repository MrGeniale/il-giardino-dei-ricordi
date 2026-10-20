import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, Calendar, Users, Car, MapPin, Trees, Bed, ChevronRight, CheckCircle2, ChevronLeft } from 'lucide-react';

interface SleekHeroProps {
  onOpenBooking: () => void;
}

export const SleekHero: React.FC<SleekHeroProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const isEn = language === 'en';

  const slides = [
    {
      image: '/images/ndf_8038.jpg',
      title: isEn ? 'Private Garden & Fig Tree' : 'Giardino Privato con Fico Secolare',
      subtitle: isEn ? 'Alberobello • 700m from Trulli' : 'Alberobello • A 700m dai Trulli storici',
    },
    {
      image: '/images/ndf_8231.jpg',
      title: isEn ? 'Evening Fairy Light Ambiance' : 'Atmosfera Serale sotto le Lucine',
      subtitle: isEn ? 'Exclusive outdoor tranquility' : 'La quiete esclusiva all\'aperto',
    },
    {
      image: '/images/ndf_8246.jpg',
      title: isEn ? 'Up to 3 Free Parking Spaces' : 'Fino a 3 Posti Auto Gratuiti Riservati',
      subtitle: isEn ? 'Gated private driveway inside the property' : 'Viale carrabile privato custodito',
    },
    {
      image: '/images/ndf_7960.jpg',
      title: isEn ? 'The Charming Stone Facade' : 'Ingresso e Cortile Privato',
      subtitle: isEn ? 'Via Capitano V. di Mola 35, Alberobello' : 'Via Capitano V. di Mola 35, Alberobello',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = isEn
      ? `Hello Marilena, I would like to check availability for Il Giardino dei Ricordi in Alberobello:\n- Dates: from ${checkIn || 'to be agreed'} to ${checkOut || 'to be agreed'}\n- Guests: ${guests}\n- Parking requested: Yes (up to 3 free spaces)\nCould you please confirm availability for these dates? Thank you!`
      : `Buongiorno Marilena, vorrei verificare la disponibilità a Il Giardino dei Ricordi ad Alberobello:\n- Date: dal ${checkIn || 'da concordare'} al ${checkOut || 'da concordare'}\n- Ospiti: ${guests}\n- Richiesta posto auto: Sì (fino a 3 posti gratuiti)\nPotete confermarmi la disponibilità per queste date? Grazie!`;
    window.open(`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 1. GIGANTIC ARCHITECTURAL HEADLINE (Directly matching Wix template 'Consulente Immobiliare') */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#71685e] font-sans font-medium">
              {isEn ? 'Alberobello • Exclusive Holiday Home' : 'Alberobello • Locazione Turistica Esclusiva'}
            </span>

            <div className="flex items-center gap-1.5 text-xs text-[#1e3329] font-medium">
              <span className="text-amber-500 font-bold">★ 9.6</span>
              <span className="text-[#7d7367]">{isEn ? 'Exceptional on Booking.com' : 'Eccezionale su Booking.com (91+ recensioni)'}</span>
            </div>
          </div>

          <h1 className="font-display text-[8.5vw] sm:text-[7.5vw] lg:text-[6.8vw] font-medium text-[#26201b] leading-[0.95] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            Il Giardino dei Ricordi
          </h1>
        </div>

        {/* 2. WIDE PANORAMIC ARCHITECTURAL HERO IMAGE BANNER (Exact layout from user screenshot) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[72vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0f1d16] group">
          
          {/* Photos transition */}
          {slides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === activePhoto ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-102 transition-transform duration-[6000ms] ease-out will-change-transform"
              />
            </div>
          ))}

          {/* Subtle cinematic gradient overlay at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

          {/* Bottom Overlay Content inside the Photo Banner */}
          <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            
            {/* Left: Tagline & Active slide caption */}
            <div className="text-white max-w-xl">
              <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#e8d5ba] font-semibold mb-1">
                {slides[activePhoto].subtitle}
              </span>
              <h2 className="font-heading text-xl sm:text-3xl text-white font-normal drop-shadow-md">
                {slides[activePhoto].title}
              </h2>
            </div>

            {/* Center / Slide Indicators pill (as seen in Wix template screenshot) */}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 self-start sm:self-end">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePhoto(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    i === activePhoto ? 'w-7 bg-[#c8a97e]' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Right: Direct CTA Button inside the image */}
            <div className="flex items-center gap-2 self-stretch sm:self-end">
              <button
                type="button"
                onClick={onOpenBooking}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d4a3e] hover:bg-[#1e382b] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-xl hover:scale-102 border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e6cfab]" />
                <span>{isEn ? 'Check Availability' : 'Richiedi Disponibilità'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* 3. PROPERTY SPECIFICATIONS STRIP (Architectural Clean Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          
          <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#ece4d6] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#dfd5c3] flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#1f3329] uppercase tracking-wider block">
                {isEn ? '3 Cars Free' : '3 Posti Auto'}
              </span>
              <span className="text-[11px] sm:text-xs text-[#71685e]">
                {isEn ? 'Free private parking' : 'Gratuito nel viale privato'}
              </span>
            </div>
          </div>

          <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#ece4d6] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#dfd5c3] flex items-center justify-center text-[#c8a97e] shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#1f3329] uppercase tracking-wider block">
                700 Metri
              </span>
              <span className="text-[11px] sm:text-xs text-[#71685e]">
                {isEn ? 'Walk to historic Trulli' : 'A piedi dai Trulli storici'}
              </span>
            </div>
          </div>

          <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#ece4d6] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#dfd5c3] flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#1f3329] uppercase tracking-wider block">
                {isEn ? '4+1 Guests' : '4+1 Posti Letto'}
              </span>
              <span className="text-[11px] sm:text-xs text-[#71685e]">
                {isEn ? '2 Bedrooms & 2 Bathrooms' : '2 Camere e 2 Bagni completi'}
              </span>
            </div>
          </div>

          <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#ece4d6] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#dfd5c3] flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <Trees className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#1f3329] uppercase tracking-wider block">
                {isEn ? 'Private Garden' : 'Giardino Privato'}
              </span>
              <span className="text-[11px] sm:text-xs text-[#71685e]">
                {isEn ? 'With ancient fig tree' : 'Con albero di fico secolare'}
              </span>
            </div>
          </div>

        </div>

        {/* 4. INTEGRATED BOOKING DATE & INQUIRY BAR */}
        <div className="mt-4 sm:mt-6 bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-[#ece4d6]">
          <form onSubmit={handleQuickInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#685e54] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
                <span>{isEn ? 'Check-in Date' : 'Data di Arrivo'}</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6ccbd] text-xs sm:text-sm text-[#1e3329] bg-white focus:ring-2 focus:ring-[#2d4a3e] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#685e54] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
                <span>{isEn ? 'Check-out Date' : 'Data di Partenza'}</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6ccbd] text-xs sm:text-sm text-[#1e3329] bg-white focus:ring-2 focus:ring-[#2d4a3e] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#685e54] mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#2d4a3e]" />
                <span>{isEn ? 'Guests' : 'Ospiti'}</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6ccbd] text-xs sm:text-sm text-[#1e3329] bg-white focus:ring-2 focus:ring-[#2d4a3e] focus:outline-hidden"
              >
                <option value="1 Ospite">{isEn ? '1 Guest' : '1 Ospite'}</option>
                <option value="2 Ospiti">{isEn ? '2 Guests' : '2 Ospiti'}</option>
                <option value="3 Ospiti">{isEn ? '3 Guests' : '3 Ospiti'}</option>
                <option value="4 Ospiti (Famiglia)">{isEn ? '4 Guests (Family)' : '4 Ospiti (Famiglia)'}</option>
                <option value="4 Ospiti + Culla bebè">{isEn ? '4 Guests + Baby cot' : '4 Ospiti + Culla bebè'}</option>
                <option value="4 Ospiti + Letto extra">{isEn ? '4 Guests + Extra bed' : '4 Ospiti + Letto extra'}</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer w-full py-3 px-5 rounded-xl bg-[#1e382b] hover:bg-[#152a20] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{isEn ? 'Inquire via WhatsApp' : 'Verifica su WhatsApp'}</span>
                <ChevronRight className="w-4 h-4 text-[#e6cfab]" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-[#e8dfd2] text-xs text-[#71685e]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isEn ? 'Direct booking with host Marilena Liuzzi • Best rate guaranteed' : 'Prenotazione diretta con Marilena Liuzzi • Miglior prezzo garantito senza intermediari'}</span>
            </div>

            <a
              href={`https://wa.me/${t.brand.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1e382b] hover:text-emerald-700 transition-colors underline decoration-[#1e382b]/30"
            >
              {t.brand.phone}
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

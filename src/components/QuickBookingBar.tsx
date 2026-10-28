import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Users, Car, ChevronRight, Sparkles } from 'lucide-react';

export const QuickBookingBar: React.FC = () => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [needParking, setNeedParking] = useState(true);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Buongiorno Marilena, vorrei verificare la disponibilità a Il Giardino dei Ricordi ad Alberobello:\n- Date: dal ${checkIn || 'da concordare'} al ${checkOut || 'da concordare'}\n- Ospiti: ${guests}${needParking ? '\n- Richiedo posto auto gratuito (fino a 2 posti)' : ''}\nPotete confermarmi la disponibilità per queste date? Grazie!`;
    window.open(`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="quick-booking" className="relative z-30 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border border-[#e2d8ca]">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 pb-3 border-b border-[#f0eae0] gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1e3329]">
            <Sparkles className="w-4 h-4 text-[#c8a97e]" />
            <span>Miglior Tariffa Diretta Garantita con Marilena Liuzzi</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#6d6459]">
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <Car className="w-3.5 h-3.5" />
              <span>2 Posti Auto Gratuiti</span>
            </span>
            <span>•</span>
            <span>Culla Bebè su Richiesta</span>
          </div>
        </div>

        <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#60574d] mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm text-[#1e3329] bg-[#faf8f5] focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#60574d] mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm text-[#1e3329] bg-[#faf8f5] focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#60574d] mb-1.5 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>Ospiti</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm text-[#1e3329] bg-[#faf8f5] focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
            >
              <option value="1 Ospite">1 Ospite</option>
              <option value="2 Ospiti">2 Ospiti</option>
              <option value="3 Ospiti">3 Ospiti</option>
              <option value="4 Ospiti">4 Ospiti</option>
              <option value="4 Ospiti + Culla">4 Ospiti + Culla</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="cursor-pointer w-full py-3 px-5 rounded-xl bg-[#2d4a3e] hover:bg-[#1a3026] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow hover:shadow-md"
            >
              <span>Verifica Date su WhatsApp</span>
              <ChevronRight className="w-4 h-4 text-[#d8c29d]" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

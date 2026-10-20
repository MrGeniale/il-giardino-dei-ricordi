import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Users, Car, Baby, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [needCot, setNeedCot] = useState(false);
  const [needParking, setNeedParking] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Buongiorno Marilena, vorrei verificare la disponibilità per un soggiorno a *Il Giardino dei Ricordi* ad Alberobello:`,
      `• *Nome:* ${name || 'Non specificato'}`,
      `• *Telefono:* ${phone || 'Non specificato'}`,
      `• *Date soggiorno:* dal ${checkIn || 'da concordare'} al ${checkOut || 'da concordare'}`,
      `• *Numero Ospiti:* ${guests}`,
      needCot ? `• *Richiesta:* Culla / Letto aggiuntivo per bambini` : null,
      needParking ? `• *Posto Auto:* Sì, arriverò in auto (richiedo posto gratuito)` : null,
      notes ? `• *Note:* ${notes}` : null,
      `\nResto in attesa di una vostra conferma per queste date. Grazie!`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(parts)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#faf8f5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e2d8ca] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 p-2 text-[#7d7468] hover:text-[#1e3329] rounded-full hover:bg-[#eee6da] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d4a3e]/10 text-[#2d4a3e] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#c8a97e]" />
            <span>Contatto Diretto Marilena Liuzzi</span>
          </div>
          <h3 className="text-2xl font-heading font-semibold text-[#172e24]">
            {t.bookingModal.title}
          </h3>
          <p className="text-xs text-[#6d6459] mt-1 font-sans">
            {t.bookingModal.subtitle}
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
          
          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
                <span>{t.bookingModal.checkIn}</span>
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2d4a3e]" />
                <span>{t.bookingModal.checkOut}</span>
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
              />
            </div>
          </div>

          {/* Guests & Options */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#2d4a3e]" />
              <span>{t.bookingModal.guestsLabel}</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
            >
              <option value="1 Ospite">1 Ospite</option>
              <option value="2 Ospiti">2 Ospiti</option>
              <option value="3 Ospiti">3 Ospiti</option>
              <option value="4 Ospiti (Capienza massima)">4 Ospiti (Capienza massima)</option>
              <option value="4 Ospiti + Neonato in culla">4 Ospiti + Neonato in culla</option>
              <option value="4 Ospiti + Letto extra">4 Ospiti + Letto extra</option>
            </select>
          </div>

          {/* Checkboxes for Cot & Free Parking */}
          <div className="space-y-2 pt-1 bg-white p-3 rounded-xl border border-[#e6decf]">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-[#413932]">
              <input
                type="checkbox"
                checked={needCot}
                onChange={(e) => setNeedCot(e.target.checked)}
                className="w-4 h-4 rounded text-[#2d4a3e] focus:ring-[#2d4a3e] accent-[#2d4a3e]"
              />
              <Baby className="w-3.5 h-3.5 text-[#9f3757]" />
              <span>{t.bookingModal.cotsOption}</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs text-[#413932]">
              <input
                type="checkbox"
                checked={needParking}
                onChange={(e) => setNeedParking(e.target.checked)}
                className="w-4 h-4 rounded text-[#2d4a3e] focus:ring-[#2d4a3e] accent-[#2d4a3e]"
              />
              <Car className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-semibold text-[#1e3a2f]">{t.bookingModal.parkingOption}</span>
            </label>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1">
                {t.bookingModal.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder="Mario Rossi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1">
                {t.bookingModal.phoneLabel}
              </label>
              <input
                type="tel"
                placeholder="+39 333 ..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
              />
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1">
              {t.bookingModal.notesLabel}
            </label>
            <textarea
              rows={2}
              placeholder="Orario stimato di arrivo o richieste speciali..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2d4a3e]"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.bookingModal.sendWhatsApp}</span>
            </button>

            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-6 rounded-full bg-white hover:bg-[#f6f2ea] border border-[#d6cbbe] text-[#2d4a3e] font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Oppure Chiama: {t.brand.phone}</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};

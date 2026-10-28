import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Users, Car, Baby, Bed, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [needCot, setNeedCot] = useState(false);
  const [needExtraBed, setNeedExtraBed] = useState(false);
  const [needParking, setNeedParking] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = isEn ? [
      `Hello Marilena, I would like to check availability for a stay at *Il Giardino dei Ricordi* in Alberobello:`,
      `• *Name:* ${name || 'Not specified'}`,
      `• *Phone:* ${phone || 'Not specified'}`,
      `• *Dates:* from ${checkIn || 'to be agreed'} to ${checkOut || 'to be agreed'}`,
      `• *Number of Guests:* ${guests}`,
      needCot ? `• *Extra Requested:* Baby cot / crib (0-3 years)` : null,
      needExtraBed ? `• *Extra Requested:* Extra single bed` : null,
      needParking ? `• *Parking:* Yes, arriving by car (request free spot in private driveway)` : null,
      notes ? `• *Special requests:* ${notes}` : null,
      `\nCould you please confirm availability and direct rate? Thank you!`,
    ].filter(Boolean).join('\n') : [
      `Buongiorno Marilena, vorrei verificare la disponibilità per un soggiorno a *Il Giardino dei Ricordi* ad Alberobello:`,
      `• *Nome:* ${name || 'Non specificato'}`,
      `• *Telefono:* ${phone || 'Non specificato'}`,
      `• *Date soggiorno:* dal ${checkIn || 'da concordare'} al ${checkOut || 'da concordare'}`,
      `• *Numero Ospiti:* ${guests}`,
      needCot ? `• *Opzione Extra:* Culla bebè / neonato (0-3 anni)` : null,
      needExtraBed ? `• *Opzione Extra:* Letto singolo aggiuntivo` : null,
      needParking ? `• *Posto Auto:* Sì, arriverò in auto (richiedo posto gratuito nel viale)` : null,
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#03624c]/10 text-[#03624c] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#c8a97e]" />
            <span>{isEn ? 'Direct Host Contact • Marilena Liuzzi' : 'Contatto Diretto Marilena Liuzzi'}</span>
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
                <Calendar className="w-3.5 h-3.5 text-[#03624c]" />
                <span>{t.bookingModal.checkIn}</span>
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#03624c]" />
                <span>{t.bookingModal.checkOut}</span>
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
              />
            </div>
          </div>

          {/* Guests Count (Clean & Simple) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#60574d] mb-1 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#03624c]" />
              <span>{t.bookingModal.guestsLabel}</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
            >
              <option value={isEn ? "1 Guest" : "1 Ospite"}>{isEn ? "1 Guest" : "1 Ospite"}</option>
              <option value={isEn ? "2 Guests" : "2 Ospiti"}>{isEn ? "2 Guests" : "2 Ospiti"}</option>
              <option value={isEn ? "3 Guests" : "3 Ospiti"}>{isEn ? "3 Guests" : "3 Ospiti"}</option>
              <option value={isEn ? "4 Guests" : "4 Ospiti"}>{isEn ? "4 Guests" : "4 Ospiti"}</option>
            </select>
          </div>

          {/* Independent Extra Options: Culla & Letto Singolo & Parcheggio a prescindere dal numero di ospiti */}
          <div className="space-y-2.5 pt-1 bg-white p-3.5 rounded-xl border border-[#e6decf]">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#8a7f72]">
              {isEn ? 'Optional Extras on Request' : 'Opzioni Extra su Richiesta'}
            </span>

            {/* Culla Bebè */}
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#3b342e] hover:text-[#03624c]">
              <input
                type="checkbox"
                checked={needCot}
                onChange={(e) => setNeedCot(e.target.checked)}
                className="w-4 h-4 rounded text-[#03624c] focus:ring-[#03624c] accent-[#03624c]"
              />
              <Baby className="w-4 h-4 text-[#9f3757] shrink-0" />
              <span>{t.bookingModal.cotsOption}</span>
            </label>

            {/* Letto Singolo Extra */}
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#3b342e] hover:text-[#03624c]">
              <input
                type="checkbox"
                checked={needExtraBed}
                onChange={(e) => setNeedExtraBed(e.target.checked)}
                className="w-4 h-4 rounded text-[#03624c] focus:ring-[#03624c] accent-[#03624c]"
              />
              <Bed className="w-4 h-4 text-[#c8a97e] shrink-0" />
              <span>{t.bookingModal.extraBedOption}</span>
            </label>

            {/* Posto Auto Gratuito */}
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#3b342e] hover:text-[#03624c]">
              <input
                type="checkbox"
                checked={needParking}
                onChange={(e) => setNeedParking(e.target.checked)}
                className="w-4 h-4 rounded text-[#03624c] focus:ring-[#03624c] accent-[#03624c]"
              />
              <Car className="w-4 h-4 text-[#03624c] shrink-0" />
              <span className="font-semibold text-[#03624c]">{t.bookingModal.parkingOption}</span>
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
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
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
                className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
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
              className="w-full px-3 py-2 rounded-xl border border-[#d6cbbe] text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-[#03624c]"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 px-6 rounded-full bg-[#03624c] hover:bg-[#024d3c] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.bookingModal.sendWhatsApp}</span>
            </button>

            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-6 rounded-full bg-white hover:bg-[#f6f2ea] border border-[#d6cbbe] text-[#03624c] font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
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

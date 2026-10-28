import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { SleekHero } from './components/SleekHero';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { GateAnimation } from './components/GateAnimation';
import { EditorialProposal } from './views/EditorialProposal';
import { MessageCircle, Sparkles } from 'lucide-react';

export function AppContent() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showGate, setShowGate] = useState(true);

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1c2420] flex flex-col font-sans selection:bg-[#03624c] selection:text-white relative">
      
      {/* Intro Gate Animation con Logo */}
      {showGate && <GateAnimation onComplete={() => setShowGate(false)} />}

      {/* Navigation Minimale con Menu Drawer */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Architetturale Sleek (Ispirata al template Wix wh-1112) */}
      <SleekHero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Contenuto Principale Editorial */}
      <main className="flex-1">
        <EditorialProposal onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <div className="pb-20 md:pb-0">
        <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button (Desktop) */}
      <div className="fixed bottom-6 right-6 z-30 hidden md:block">
        <a
          href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
            'Buongiorno Marilena, vorrei richiedere informazioni e disponibilità per Il Giardino dei Ricordi ad Alberobello.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          title="Scrivi su WhatsApp a Marilena Liuzzi"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
        </a>
      </div>

      {/* Sticky Luxury Mobile Action Bar (Always within thumb reach on smartphones) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#faf8f5]/95 backdrop-blur-md border-t border-[#e2d8ca] p-2.5 px-3.5 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] flex items-center gap-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
            'Buongiorno Marilena, vorrei verificare la disponibilità a Il Giardino dei Ricordi ad Alberobello.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-emerald-100" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          className="cursor-pointer flex-1 py-3 px-3 rounded-xl bg-[#03624c] hover:bg-[#024d3c] text-white text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#e6cfab]" />
          <span>Disponibilità</span>
        </button>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

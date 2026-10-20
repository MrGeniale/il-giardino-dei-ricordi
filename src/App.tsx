import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { SleekHero } from './components/SleekHero';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { GateAnimation } from './components/GateAnimation';
import { EditorialProposal } from './views/EditorialProposal';
import { MessageCircle } from 'lucide-react';

export function AppContent() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showGate, setShowGate] = useState(true);

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1c2420] flex flex-col font-sans selection:bg-[#2d4a3e] selection:text-white relative">
      
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
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button (in basso a destra) */}
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

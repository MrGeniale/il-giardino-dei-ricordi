import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, MessageCircle, Sparkles, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setShowNav(y > 420); // Compare solo dopo aver superato la Hero e arrivando alla sezione 'La quiete rara di Alberobello'
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#about', label: t.nav.story, sub: 'La nostra storia ad Alberobello' },
    { href: '#privileges', label: t.nav.privileges, sub: '3 Posti Auto e comfort unici' },
    { href: '#garden', label: t.nav.garden, sub: 'L’oasi verde con fico secolare' },
    { href: '#spaces', label: t.nav.spaces, sub: '2 Camere, 2 Bagni e Cucina' },
    { href: '#gallery', label: t.nav.gallery, sub: 'Gli scatti della dimora' },
    { href: '#location', label: t.nav.location, sub: '700m dai Trulli storici' },
    { href: '#reviews', label: t.nav.reviews, sub: 'Valutazione 9.6 su Booking' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf7f2]/95 backdrop-blur-md py-3 border-b border-[#e5dac9] shadow-md'
            : 'bg-[#faf7f2]/90 backdrop-blur-xs py-4 border-b border-[#ece2d3]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Brand Name */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/images/logo-badge.png"
                alt="Logo Il Giardino dei Ricordi"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full border border-[#c8a97e]/60 shadow-xs group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-heading text-xl sm:text-2xl font-normal text-[#172e24] tracking-wide leading-tight group-hover:text-[#2d4a3e] transition-colors">
                  Il Giardino dei Ricordi
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8a7f72] font-sans font-medium">
                  Alberobello • Valle d'Itria
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links: Centrati in modo assoluto per NON spostare mai logo e controlli a destra */}
            <nav
              className={`hidden xl:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out ${
                showNav
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {navLinks.slice(0, 5).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.16em] text-[#33463d] hover:text-[#9f3757] font-medium transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls: Lingua (Pill Fissa Senza Salti), Richiedi Disponibilità & Menù */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 ml-auto">
              
              {/* Rock-solid, non-shifting Sliding Language Switch */}
              <div className="relative flex items-center bg-[#eee7db] p-0.5 rounded-full border border-[#d8cdbc] w-[64px] h-[30px] shrink-0 shadow-2xs">
                {/* Sliding indicator */}
                <div
                  className={`absolute top-0.5 bottom-0.5 w-[30px] rounded-full bg-[#1e382b] transition-transform duration-250 ease-out shadow-xs pointer-events-none ${
                    language === 'en' ? 'translate-x-[30px]' : 'translate-x-0'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setLanguage('it')}
                  className={`relative z-10 w-[30px] h-full flex items-center justify-center text-[10px] font-bold tracking-wider cursor-pointer select-none transition-colors duration-200 ${
                    language === 'it' ? 'text-white' : 'text-[#6b6256] hover:text-[#1e382b]'
                  }`}
                  aria-label="Lingua italiana"
                >
                  IT
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`relative z-10 w-[30px] h-full flex items-center justify-center text-[10px] font-bold tracking-wider cursor-pointer select-none transition-colors duration-200 ${
                    language === 'en' ? 'text-white' : 'text-[#6b6256] hover:text-[#1e382b]'
                  }`}
                  aria-label="English language"
                >
                  EN
                </button>
              </div>

              {/* Tasto "Richiedi Disponibilità" con larghezza rigorosamente FISSA (zero spostamenti tra IT ed EN) */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-2 w-[160px] sm:w-[215px] rounded-full bg-[#1e382b] hover:bg-[#162d22] text-white text-[10px] sm:text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-200 shadow-sm hover:shadow shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e6cfab] shrink-0" />
                <span className="truncate">{language === 'en' ? 'Check Availability' : 'Richiedi Disponibilità'}</span>
              </button>

              {/* Tasto Menù Laterale con larghezza rigorosamente FISSA */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-2 w-[42px] sm:w-[86px] rounded-full bg-white hover:bg-[#f2ece0] border border-[#d8cdbc] text-[#1e3329] text-xs uppercase tracking-wider font-semibold transition-colors shadow-2xs shrink-0"
                aria-label="Apri Menu"
              >
                <Menu className="w-4 h-4 text-[#2d4a3e] shrink-0" />
                <span className="hidden sm:inline">{language === 'en' ? 'Menu' : 'Menù'}</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Minimal Half-Screen Slide-Over Menu Drawer */}
      {/* Backdrop overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-400 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-over Panel from the right */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[500px] md:w-[50vw] lg:w-[45vw] xl:w-[38vw] bg-[#faf8f5] text-[#1c2420] shadow-2xl flex flex-col justify-between border-l border-[#e4d9c7] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu di navigazione"
      >
        {/* Top Header of Drawer */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-[#ece2d3]">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-badge.png"
              alt="Logo"
              className="w-10 h-10 object-contain rounded-full border border-[#c8a97e]/60 shadow-2xs"
            />
            <div>
              <span className="font-heading text-lg sm:text-xl text-[#172e24] font-medium block leading-tight">
                Il Giardino dei Ricordi
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#857b6f] font-sans">
                Alberobello • Valle d'Itria
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0eae0] hover:bg-[#e6decf] text-[#172e24] text-xs uppercase tracking-wider font-semibold transition-colors"
            aria-label="Chiudi menu"
          >
            <span>Chiudi</span>
            <X className="w-4 h-4 text-[#2d4a3e]" />
          </button>
        </div>

        {/* Minimal Navigation List */}
        <nav className="px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-center space-y-3 sm:space-y-4 flex-1">
          {navLinks.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between py-2 border-b border-[#eee5d6] hover:border-[#2d4a3e] transition-colors duration-300"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs font-semibold text-[#c8a97e] tracking-widest">
                  0{idx + 1}
                </span>
                <span className="font-heading text-2xl sm:text-3xl text-[#172e24] group-hover:text-[#2d4a3e] group-hover:translate-x-2 transition-transform duration-300 font-normal">
                  {item.label}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#2d4a3e] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Bottom Drawer Actions & Direct Contact */}
        <div className="px-6 sm:px-10 py-6 bg-[#f4eee3] border-t border-[#e5dac9] space-y-4">
          
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onOpenBooking();
            }}
            className="cursor-pointer w-full py-3.5 px-5 rounded-xl bg-[#1e382b] hover:bg-[#152a20] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#e6cfab]" />
            <span>Richiedi Disponibilità</span>
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#6b6256] pt-1">
            <a
              href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
                'Buongiorno Marilena, vorrei verificare la disponibilità a Il Giardino dei Ricordi ad Alberobello.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-[#1e382b] hover:text-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {t.brand.phone}</span>
            </a>

            <div className="flex items-center gap-1.5 text-amber-600 font-medium">
              <span>★ 9.6 Booking.com</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#887e72]">
            <MapPin className="w-3.5 h-3.5 text-[#c8a97e] shrink-0" />
            <span>Via Capitano V. di Mola 35, Alberobello</span>
          </div>

        </div>
      </aside>
    </>
  );
};

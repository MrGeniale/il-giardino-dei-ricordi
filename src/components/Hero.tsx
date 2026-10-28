import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, ChevronDown, Car, Trees, MapPin, Users } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const slides = [
  {
    image: '/images/ndf_8231.jpg',
    tag: 'L’Oasi al Crepuscolo',
    title: 'Il Giardino sotto le Stelle',
  },
  {
    image: '/images/ndf_8038.jpg',
    tag: 'Natura & Relax',
    title: 'Il Fico Secolare',
  },
  {
    image: '/images/ndf_8246.jpg',
    tag: 'Rarità ad Alberobello',
    title: 'Parcheggio Privato per 2 Auto',
  },
  {
    image: '/images/ndf_8001.jpg',
    tag: 'Comfort & Charme',
    title: 'La Camera Padronale',
  },
  {
    image: '/images/ndf_8058.jpg',
    tag: 'Posizione Strategica',
    title: 'Scorcio sui Trulli Storici',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07130d] flex items-end">
      
      {/* Background Slideshow con dissolvenza fluida */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms] ease-out will-change-transform"
            />
          </div>
        ))}
      </div>

      {/* Modern Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07130d] via-black/35 to-black/60 z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#07130d] via-[#07130d]/85 to-transparent z-20 pointer-events-none" />

      {/* Main Content: Pulito, Editoriale, a Sinistra che Respira */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 pt-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          
          {/* Main Editorial Block */}
          <div className="max-w-3xl text-left">
            
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[#c8a97e]/50 text-[#f7e0bc] text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#e6cfab]" />
              <span>★ 9.7 Eccezionale su Booking.com • Alberobello</span>
            </div>

            {/* Name & Title */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.06] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Il Giardino dei Ricordi
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#ded6c9] max-w-2xl font-sans leading-relaxed mb-6 font-light drop-shadow-md">
              Il raro privilegio di un ampio giardino privato e <span className="text-[#f7e0bc] font-medium">fino a 2 posti auto gratuiti</span> all'interno della dimora, a soli 700 metri a piedi dai celebri Trulli.
            </p>

            {/* 4 Feature Badges Bar */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
              {[
                { label: '2 Posti Auto Gratuiti', icon: <Car className="w-3.5 h-3.5 text-emerald-400" /> },
                { label: '700m dai Trulli a Piedi', icon: <MapPin className="w-3.5 h-3.5 text-[#e6cfab]" /> },
                { label: 'Ampio Giardino con Fico', icon: <Trees className="w-3.5 h-3.5 text-emerald-400" /> },
                { label: '4 Posti Letto (+ Culla su richiesta)', icon: <Users className="w-3.5 h-3.5 text-[#e6cfab]" /> },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs text-[#eae2d5] font-light"
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#244535] via-[#2f5a45] to-[#1f3c2e] hover:from-[#2f5a45] hover:to-[#244535] border border-[#c8a97e]/60 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(200,169,126,0.35)] hover:scale-102"
              >
                <Sparkles className="w-4 h-4 text-[#e6cfab]" />
                <span>Richiedi Disponibilità Diretta</span>
              </button>

              <a
                href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
                  'Buongiorno Marilena, vorrei richiedere la disponibilità a Il Giardino dei Ricordi ad Alberobello.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp con Marilena</span>
              </a>
            </div>

          </div>

          {/* Discreet Minimalist Slide Indicators (Senza box o colonne ingombranti) */}
          <div className="hidden lg:flex flex-col items-end gap-2 text-right">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d8c29d] font-sans">
              {slides[activeSlide].tag}
            </span>
            <span className="font-heading text-lg text-white font-light">
              {slides[activeSlide].title}
            </span>
            <div className="flex items-center gap-1.5 mt-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  className={`h-1 transition-all duration-400 rounded-full cursor-pointer ${
                    i === activeSlide ? 'w-8 bg-[#c8a97e]' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 hidden sm:block">
        <a
          href="#about"
          className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
        >
          <span>Scorri per scoprire</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

    </section>
  );
};

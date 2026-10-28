import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, MessageCircle, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#172e24] text-[#d6cebf] pt-16 pb-12 border-t border-[#234234]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#244537]">
          
          {/* Brand & Presentation */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/logo-nav.png"
                alt="Logo Il Giardino dei Ricordi"
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="font-heading text-2xl font-bold text-white tracking-wide block">
                  Il Giardino dei Ricordi
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#d8c29d] font-sans">
                  Alberobello • Valle d'Itria
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#bab1a1] leading-relaxed mb-6 font-sans max-w-sm">
              {t.footer.about}
            </p>

            <div className="text-xs text-[#d8c29d] font-medium flex items-center gap-1.5">
              <span>{t.footer.hostGreeting}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#privileges" className="hover:text-white transition-colors">
                  {t.nav.privileges}
                </a>
              </li>
              <li>
                <a href="#garden" className="hover:text-white transition-colors">
                  {t.nav.garden}
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-white transition-colors">
                  {t.nav.spaces}
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">
                  {t.nav.amenities}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.nav.location}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Social */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t.footer.contacts}
            </h4>

            <div className="space-y-3 text-xs text-[#c5bcad] mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <span>{t.brand.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d8c29d] shrink-0" />
                <a href={`tel:${t.brand.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {t.brand.phone} ({t.brand.hostName})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
                    'Buongiorno Marilena, vorrei informazioni su Il Giardino dei Ricordi ad Alberobello.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Diretto
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={t.brand.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
              >
                <span>Booking.com (9.7)</span>
                <ExternalLink className="w-3 h-3 text-[#d8c29d]" />
              </a>

              <a
                href={t.brand.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
              >
                <span>Pagina Facebook</span>
                <ExternalLink className="w-3 h-3 text-[#d8c29d]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9a9182] gap-4">
          <div>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            <span>Realizzato con cura per la Puglia</span>
            <Heart className="w-3 h-3 text-[#9f3757] fill-[#9f3757]" />
          </div>
        </div>

      </div>
    </footer>
  );
};

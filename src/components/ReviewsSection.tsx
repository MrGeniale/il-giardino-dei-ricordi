import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, CheckCircle, ExternalLink, Sparkles, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03624c]/10 text-[#03624c] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-base text-[#665e55] font-sans">
            {t.reviews.subtitle}
          </p>

          {/* Booking Rating Box */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-[#e5dcce] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#03624c] text-white flex items-center justify-center font-heading text-2xl font-bold">
              {t.reviews.ratingScore}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#172e24]">
                {t.reviews.ratingLabel}
              </div>
              <div className="text-xs text-[#736a5f] flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#03624c]" />
                <span>{t.reviews.source} • 91+ recensioni</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {t.reviews.items.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#e8dfd2] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#03624c]/10 group-hover:text-[#03624c]/20 transition-colors" />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#03624c]">
                    {rev.rating}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-[#172e24] mb-3">
                  "{rev.highlight}"
                </h3>

                <p className="text-sm text-[#61584e] leading-relaxed font-sans mb-6">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2ece2] flex items-center justify-between text-xs">
                <div className="font-semibold text-[#1e3329]">
                  {rev.name}
                </div>
                <div className="text-[#7d7468] flex items-center gap-1.5">
                  <span className="text-base">{rev.flag}</span>
                  <span>{rev.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Link */}
        <div className="text-center">
          <a
            href={t.brand.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#03624c] hover:text-[#9f3757] transition-colors"
          >
            <span>Leggi tutte le 91+ recensioni su Booking.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

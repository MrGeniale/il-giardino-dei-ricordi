import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/images/ndf_7960.jpg"
                  alt="Ingresso e cortile privato de Il Giardino dei Ricordi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#03624c] text-white p-5 sm:p-6 rounded-3xl shadow-xl max-w-xs border border-[#024d3c]">
                <Quote className="w-6 h-6 text-[#d8c29d] mb-2" />
                <p className="font-serif-italic text-xs sm:text-sm leading-relaxed text-[#ded8cb]">
                  "{t.about.quote}"
                </p>
                <div className="text-[11px] font-semibold text-[#f7e0bc] mt-2.5">
                  — {t.brand.hostName}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03624c]/10 text-[#03624c] text-xs font-semibold uppercase tracking-widest mb-4 self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#172e24] leading-tight mb-5">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-[#03624c] font-serif-italic leading-relaxed mb-6 font-medium">
              "{t.about.lead}"
            </p>

            <p className="text-sm sm:text-base text-[#5a5247] leading-relaxed mb-4 font-sans">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-[#5a5247] leading-relaxed mb-8 font-sans">
              {t.about.p2}
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#eee5d8]">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#e8dfd2] text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#03624c]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#73695e] mt-0.5 leading-tight font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

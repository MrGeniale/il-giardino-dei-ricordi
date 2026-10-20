import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, Phone, Clock, MapPin, Check, Car, Bed, Trees, ExternalLink, ArrowRight } from 'lucide-react';

interface FilmProposalProps {
  onOpenBooking: () => void;
}

export const FilmProposal: React.FC<FilmProposalProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const chapters = [
    {
      act: 'Capitolo I',
      time: 'Ore 08:30',
      title: 'Il Risveglio e la Colazione sotto il Fico',
      subtitle: 'La pace che non ti aspetti nel centro di Alberobello',
      desc: 'Apri le finestre della camera padronale e senti solo la brezza tra le foglie. Niente clacson, nessun rumore turistico: scendi nel giardino privato, ti siedi al tavolo in pietra sotto le fronde generose dell’albero di fico e assapori un caffè espresso mentre il sole pugliese scalda la pietra chiara.',
      image: '/images/ndf_8048.jpg',
      badge: 'Il Giardino Privato',
      highlight: 'Tavolo esterno all’ombra • Cinguettio e silenzio • Aria pura',
    },
    {
      act: 'Capitolo II',
      time: 'Ore 10:30',
      title: 'A Piedi nei Trulli: Lascia la Macchina a Casa',
      subtitle: '8 minuti di passeggiata per entrare nella storia UNESCO',
      desc: 'Nessuna ricerca di parcheggio, nessuna navetta affollata: varchi il cancello e cammini a piedi per appena 700 metri. Prima la Chiesa a Trullo di Sant’Antonio, poi il Rione Monti e il Trullo Sovrano. Tutta Alberobello è a portata di passi.',
      image: '/images/ndf_8058.jpg',
      badge: 'Posizione Centralissima',
      highlight: '700m dalla Chiesa a Trullo • Rione Monti a piedi • Zero stress traffico',
    },
    {
      act: 'Capitolo III',
      time: 'Ore 16:30',
      title: 'Il Rientro nel Viale Privato: 3 Posti Auto Riservati',
      subtitle: 'La rarità più preziosa della Capitale dei Trulli',
      desc: 'Mentre migliaia di visitatori cercano disperatamente un parcheggio a pagamento da 25-30€ al giorno lungo la circonvallazione, tu entri comodamente con la tua auto nel viale carrabile recintato de Il Giardino dei Ricordi. Posto garantito per fino a 3 autovetture in totale sicurezza.',
      image: '/images/ndf_8246.jpg',
      badge: 'Fino a 3 Posti Auto Gratuiti',
      highlight: 'Viale recintato esclusivo • 0€ di costo sosta • Spazio per tutta la famiglia',
    },
    {
      act: 'Capitolo IV',
      time: 'Ore 19:30',
      title: 'L’Aperitivo al Crepuscolo sotto le Lucine',
      subtitle: 'La magia delle serate d’estate in Valle d’Itria',
      desc: 'Il cielo si tinge di blu cobalto e le lucine sospese tra i rami si accendono dolcemente. Un calice di vino locale, taralli pugliesi e chiacchiere all’aria aperta sul patio in pietra, con le sagome dei trulli all’orizzonte. È qui che nascono i ricordi da portare a casa.',
      image: '/images/ndf_8231.jpg',
      badge: 'Atmosfera Sotto le Stelle',
      highlight: 'Illuminazione d’atmosfera • Patio solarium • Vista sui tetti conici',
    },
    {
      act: 'Capitolo V',
      time: 'Ore 22:30',
      title: 'Il Riposo Profondo: 2 Camere e 2 Bagni Indipendenti',
      subtitle: 'Spazio e privacy per coppie, famiglie e amici (4+1 Ospiti)',
      desc: 'Una notte rigenerante nelle due ampie camere matrimoniali indipendenti: la padronale con specchiera d’epoca e la seconda contemporanea in rovere chiaro. Grazie ai 2 bagni completi con doccia e alla disponibilità di culla e letto extra, ognuno ha la sua massima privacy.',
      image: '/images/ndf_8001.jpg',
      badge: 'Comfort & Spazio Familiare',
      highlight: '4 Posti letto + Culla • 2 Bagni con doccia • Climatizzazione autonoma',
    },
  ];

  return (
    <div className="bg-[#faf8f5] text-[#1c2420]">
      
      {/* Intestazione Narrativa del Film */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9f3757] font-bold block mb-4">
          Una Giornata Ideale ad Alberobello
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#172e24] font-light leading-tight mb-6">
          Vivi il tuo soggiorno come una storia <span className="font-serif italic font-normal text-[#2a4f3d]">senza pensieri</span>.
        </h2>
        <p className="text-base sm:text-lg text-[#665e55] font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Non un semplice affittacamere, ma il racconto della tua vacanza perfetta: ecco come si svolge una tipica giornata a Il Giardino dei Ricordi.
        </p>
      </section>

      {/* La Sequenza dei Capitoli (Timeline Cinematografica) */}
      <div className="space-y-24 sm:space-y-36 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {chapters.map((chap, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={chap.act}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Foto della Scena */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-2 border-white group">
                  <img
                    src={chap.image}
                    alt={chap.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-mono tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e6cfab]" />
                    <span>{chap.time}</span>
                  </div>
                </div>
              </div>

              {/* Contenuto della Scena */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#9f3757] font-bold">
                    {chap.act}
                  </span>
                  <span className="text-[#c8a97e]">•</span>
                  <span className="text-xs font-mono text-[#786f66]">
                    {chap.time}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-4xl text-[#172e24] leading-snug mb-3 font-medium">
                  {chap.title}
                </h3>

                <p className="font-serif italic text-base text-[#2a4f3d] mb-4">
                  {chap.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#5a5247] font-light leading-relaxed font-sans mb-6">
                  {chap.desc}
                </p>

                <div className="p-3.5 rounded-2xl bg-white border border-[#e8dfd2] text-xs text-[#2a4f3d] font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c8a97e] shrink-0" />
                  <span>{chap.highlight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scheda Tecnica e Servizi Completi (Senza fronzoli) */}
      <section className="bg-[#172e24] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8c29d] font-bold block mb-2">
              Dotazioni della Dimora
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-white font-light">
              Tutto ciò che trovi all'interno
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[#ded8cb]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">3 Posti Auto</span>
              <p className="text-xs text-[#b8b0a2]">Viale privato custodito e cancello d'accesso</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">Giardino Esclusivo</span>
              <p className="text-xs text-[#b8b0a2]">Fico secolare, patio in pietra e solarium</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">2 Bagni Completi</span>
              <p className="text-xs text-[#b8b0a2]">Due cabine doccia cristallo, bidet e phon</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">4+1 Posti Letto</span>
              <p className="text-xs text-[#b8b0a2]">2 camere matrimoniali + culla o letto extra</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">Aria Condizionata</span>
              <p className="text-xs text-[#b8b0a2]">Climatizzatori indipendenti in ogni ambiente</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">Wi-Fi Fibra Ultra</span>
              <p className="text-xs text-[#b8b0a2]">Internet veloce e gratuito per tutta la casa</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">Cucina Attrezzata</span>
              <p className="text-xs text-[#b8b0a2]">Forno, microonde, frigo e macchina del caffè</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-heading text-lg text-white font-medium block mb-1">700m dai Trulli</span>
              <p className="text-xs text-[#b8b0a2]">Tutta Alberobello raggiungibile a piedi</p>
            </div>
          </div>

        </div>
      </section>

      {/* Prenota il tuo soggiorno narrativo */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9f3757] font-bold block mb-3">
          Inizia la tua storia ad Alberobello
        </span>
        <h3 className="font-heading text-3xl sm:text-5xl text-[#172e24] font-light mb-6">
          Prenota direttamente con Marilena Liuzzi
        </h3>
        <p className="text-base text-[#61584e] max-w-xl mx-auto mb-10 font-sans">
          Verifica le date e ricevi subito la migliore tariffa garantita senza costi di portale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#172e24] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#254838] transition-all shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#e6cfab]" />
            <span>Richiedi Disponibilità</span>
          </button>

          <a
            href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
              'Buongiorno Marilena, vorrei verificare la disponibilità a Il Giardino dei Ricordi ad Alberobello.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Diretto ({t.brand.phone})</span>
          </a>
        </div>
      </section>

    </div>
  );
};

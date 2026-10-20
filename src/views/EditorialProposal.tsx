import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck, MapPin, ExternalLink, Sparkles } from 'lucide-react';

interface EditorialProposalProps {
  onOpenBooking: () => void;
}

export const EditorialProposal: React.FC<EditorialProposalProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="bg-[#fbf9f5] text-[#1c2420] overflow-hidden">
      
      {/* 1. Nastro Editoriale Continuo (Editorial Marquee Ticker) */}
      <div className="bg-[#172e24] text-[#f7e0bc] py-3.5 border-y border-[#29483b] overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-[11px] uppercase tracking-[0.28em] font-medium">
          <span>{isEn ? '★ 9.6 on Booking.com (Exceptional)' : '★ 9.6 su Booking.com (Eccezionale)'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Up to 3 Free Reserved Parking Spots' : 'Fino a 3 Posti Auto Gratuiti Riservati'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Just 700m Walk to Historic Trulli' : 'A soli 700m dai Trulli Storici a Piedi'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Spacious Private Garden with Ancient Fig Tree' : 'Ampio Giardino Privato con Fico Secolare'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Sleeps 4 with 2 Bedrooms & 2 Full Bathrooms' : '4 Posti Letto con 2 Camere e 2 Bagni'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Baby Cot & Extra Bed on Request' : 'Culla e Letto Extra su Richiesta'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? '★ 9.6 on Booking.com (Exceptional)' : '★ 9.6 su Booking.com (Eccezionale)'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Up to 3 Free Reserved Parking Spots' : 'Fino a 3 Posti Auto Gratuiti Riservati'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Just 700m Walk to Historic Trulli' : 'A soli 700m dai Trulli Storici a Piedi'}</span>
          <span className="text-[#c8a97e]">•</span>
          <span>{isEn ? 'Spacious Private Garden with Ancient Fig Tree' : 'Ampio Giardino Privato con Fico Secolare'}</span>
          <span className="text-[#c8a97e]">•</span>
        </div>
      </div>

      {/* 2. Il Manifesto della Dimora (Asymmetric Sanctuary Manifesto) */}
      <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Colonna Sinistra: Grande Foto con cornice sobria e nota d'autore */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/ndf_7960.jpg"
                alt={isEn ? "Private entrance of Il Giardino dei Ricordi" : "Ingresso e cortile privato de Il Giardino dei Ricordi"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-xs tracking-wider uppercase">
                <span className="font-semibold text-[#f7e0bc]">Via Capitano V. di Mola 35</span>
                <span className="block text-[10px] sm:text-[11px] text-white/80 font-light mt-0.5">
                  {isEn ? 'Alberobello • Historic Center' : 'Alberobello • Centro Storico'}
                </span>
              </div>
            </div>

            {/* Nota d'autore: Su desktop fluttuante, su mobile card elegante sotto la foto */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl border border-[#e8dfd2] shadow-xl sm:max-w-[220px]">
              <span className="text-[10px] uppercase tracking-widest text-[#9f3757] font-bold block mb-1">
                {isEn ? 'Hospitality' : "L'Accoglienza"}
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-[#1e3329] leading-snug">
                {isEn ? '"Making you feel part of a cherished memory amidst the colors of Puglia."' : '"Farvi sentire parte di una memoria felice tra i colori di Puglia."'}
              </p>
              <span className="text-[10px] text-[#7d7468] block mt-1 font-medium">
                — Marilena Liuzzi
              </span>
            </div>
          </div>

          {/* Colonna Destra: Grande Tipografia Editoriale e Paragrafi che Respirano */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6 pt-4 lg:pt-0">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold mb-2 sm:mb-3 block">
              {isEn ? 'The Rare Serenity of Alberobello' : 'La Quiete Rara di Alberobello'}
            </span>
            
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-[#172e24] leading-[1.12] mb-5 sm:mb-8 font-light">
              {isEn ? (
                <>The privilege of living central, with the breath of a <span className="font-serif italic font-normal text-[#2a4f3d]">true private oasis</span>.</>
              ) : (
                <>Il privilegio di vivere il centro, con il respiro di una <span className="font-serif italic font-normal text-[#2a4f3d]">vera oasi privata</span>.</>
              )}
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-lg text-[#524b43] font-light leading-relaxed font-sans mb-8 sm:mb-10">
              {isEn ? (
                <>
                  <p>
                    Alberobello is a world-renowned UNESCO gem, but anyone who visits knows how challenging it can be to find accommodations that combine walking convenience to the Trulli with true tranquility and effortless parking.
                  </p>
                  <p>
                    <strong>Il Giardino dei Ricordi</strong> was created specifically to bridge this gap: an impeccably curated holiday home featuring a private gated driveway accommodating up to 3 cars, 2 independent double bedrooms, 2 full bathrooms, and a lush private garden crowned by an ancient fig tree where time slows down.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Alberobello è una gemma celebre in tutto il mondo, ma chi la visita sa quanto possa essere difficile trovare un alloggio che unisca la comodità di raggiungere a piedi i Trulli alla pace e alla facilità di parcheggio.
                  </p>
                  <p>
                    <strong>Il Giardino dei Ricordi</strong> nasce esattamente per colmare questa distanza: una dimora curata nei dettagli, con viale privato per custodire fino a 3 autovetture, 2 ampie camere indipendenti, 2 bagni completi e un rigoglioso giardino dominato da un fico secolare dove il tempo torna a scorrere lento.
                  </p>
                </>
              )}
            </div>

            {/* Dati essenziali in linea sobria */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-[#e2d8ca]">
              <div>
                <span className="font-heading text-2xl sm:text-4xl text-[#1e3329] font-medium block">
                  700 m
                </span>
                <span className="text-[11px] sm:text-xs text-[#786f66] uppercase tracking-wider block mt-0.5 sm:mt-1">
                  {isEn ? 'Walk to historic Trulli' : 'Dai Trulli storici'}
                </span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-4xl text-[#1e3329] font-medium block">
                  {isEn ? '3 Cars' : '3 Auto'}
                </span>
                <span className="text-[11px] sm:text-xs text-[#786f66] uppercase tracking-wider block mt-0.5 sm:mt-1">
                  {isEn ? 'Free private parking' : 'Parcheggio gratuito'}
                </span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-4xl text-[#1e3329] font-medium block">
                  4+1
                </span>
                <span className="text-[11px] sm:text-xs text-[#786f66] uppercase tracking-wider block mt-0.5 sm:mt-1">
                  {isEn ? 'Guests & Baby cot' : 'Ospiti & Culla bebè'}
                </span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-4xl text-[#1e3329] font-medium block">
                  9.6
                </span>
                <span className="text-[11px] sm:text-xs text-[#786f66] uppercase tracking-wider block mt-0.5 sm:mt-1">
                  {isEn ? 'Booking.com Score' : 'Voto Booking'}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Lookbook Visuale delle Camere & Spazi */}
      <section id="spaces" className="py-16 sm:py-24 bg-[#f4eee3] px-4 sm:px-6 lg:px-12 border-y border-[#e5dcce]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-3 sm:gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold block mb-2">
                {isEn ? 'Interior Spaces • Lookbook' : 'Gli Spazi Interni • Lookbook'}
              </span>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl text-[#172e24] font-light">
                {isEn ? 'Spacious rooms, independence & complete privacy' : 'Camere ampie, indipendenza e privacy totale'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#665e55] max-w-md font-sans">
              {isEn ? 'Two separate double bedrooms, two full bathrooms, and fully equipped kitchen for couples, friends, or families.' : 'Due camere matrimoniali separate, doppi servizi completi e cucina attrezzata per un soggiorno rilassante in coppia, con amici o in famiglia.'}
            </p>
          </div>

          {/* Lookbook: grandi blocchi fotografici alternati */}
          <div className="space-y-12 sm:space-y-28">
            
            {/* Blocco 1: Camera Padronale */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/ndf_8001.jpg"
                    alt={isEn ? "Master double bedroom" : "Camera matrimoniale padronale"}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="text-xs font-mono uppercase text-[#c8a97e] font-semibold tracking-widest block mb-2">
                  {isEn ? '01 • Master Double Bedroom' : '01 • Camera Matrimoniale Padronale'}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#172e24] mb-4">
                  {isEn ? 'Timeless charm & serene tradition' : 'Il fascino senza tempo della tradizione'}
                </h3>
                <p className="text-sm sm:text-base text-[#5a5247] font-light leading-relaxed mb-6 font-sans">
                  {isEn ? 'Bright and spacious bedroom with antique dresser, carved vanity mirror, king-size bed, independent climate control, and space for baby cot.' : 'Camera spaziosa e luminosa con comò d\'epoca, specchiera intagliata, letto matrimoniale king size, climatizzatore autonomo e possibilità di aggiungere culla per neonati.'}
                </p>
                <div className="text-xs text-[#2a4f3d] font-semibold tracking-wider uppercase border-l-2 border-[#2a4f3d] pl-3 py-1">
                  {isEn ? 'King Size • Antique Vanity • Climate Control • Bright Window' : 'King Size • Specchiera Antica • Climatizzatore • Finestra Luminosa'}
                </div>
              </div>
            </div>

            {/* Blocco 2: Seconda Camera Moderna */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase text-[#c8a97e] font-semibold tracking-widest block mb-2">
                  {isEn ? '02 • Second Double Bedroom' : '02 • Seconda Camera Matrimoniale'}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#172e24] mb-4">
                  {isEn ? 'Contemporary lines & absolute quiet' : 'Linee contemporanee e quiete assoluta'}
                </h3>
                <p className="text-sm sm:text-base text-[#5a5247] font-light leading-relaxed mb-6 font-sans">
                  {isEn ? 'Furnished in light oak, generous three-door wardrobe, and polished stone flooring. Relaxing quiet space with option for extra single bed on request.' : 'Rifinita con arredi in rovere chiaro, grande armadio a tre ante e pavimento in pietra levigata. Uno spazio rilassante e silenzioso con opzione per letto extra singolo su richiesta.'}
                </p>
                <div className="text-xs text-[#2a4f3d] font-semibold tracking-wider uppercase border-l-2 border-[#2a4f3d] pl-3 py-1">
                  {isEn ? 'Double Bed • Light Oak • Large Wardrobe • Extra Bed' : 'Letto Matrimoniale • Rovere Chiaro • Armadio Capiente • Letto Extra'}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/ndf_8022.jpg"
                    alt={isEn ? "Second modern double bedroom" : "Seconda camera matrimoniale moderna"}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Blocco 3: I Due Bagni e la Cucina Open Space */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bagni */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dcce] shadow-md flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <img
                      src="/images/ndf_7978.jpg"
                      alt={isEn ? "Bathroom with glass shower" : "Bagno con doccia in cristallo"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase text-[#c8a97e] font-semibold tracking-widest block mb-1">
                    {isEn ? '03 • Dual Full Bathrooms' : '03 • Doppi Servizi Completi'}
                  </span>
                  <h4 className="font-heading text-2xl text-[#172e24] mb-2">
                    {isEn ? 'Two separate private bathrooms with showers' : 'Due bagni privati indipendenti con doccia'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#61584e] font-sans leading-relaxed">
                    {isEn ? 'Zero waiting in the morning: two full bathrooms both equipped with glass shower enclosures, bidet, heated towel rails, hair dryer, and plush linen sets.' : 'Nessuna attesa al mattino: due bagni completi dotati entrambi di cabina doccia in cristallo, bidet, termoarredo, asciugacapelli e set biancheria morbida.'}
                  </p>
                </div>
              </div>

              {/* Cucina & Living */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dcce] shadow-md flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <img
                      src="/images/ndf_7963.jpg"
                      alt={isEn ? "Equipped kitchen and living space" : "Cucina attrezzata e zona living"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase text-[#c8a97e] font-semibold tracking-widest block mb-1">
                    {isEn ? '04 • Living & Fully Equipped Kitchen' : '04 • Living & Cucina Attrezzata'}
                  </span>
                  <h4 className="font-heading text-2xl text-[#172e24] mb-2">
                    {isEn ? 'Open space with oven, microwave & dining table for 6' : 'Open space con forno, microonde e tavolo per 6'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#61584e] font-sans leading-relaxed">
                    {isEn ? 'Complete kitchen for full culinary autonomy: stovetop, refrigerator, espresso machine, Smart TV, and two comfortable relaxing sofas.' : 'Cucina completa per preparare i pasti in totale autonomia: piano cottura, frigorifero, macchina del caffè espresso, Smart TV e due comodi divani relax.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Il Giardino e il Fico Secolare */}
      <section id="garden" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold block mb-2 sm:mb-3">
              {isEn ? 'The Soul of the Place' : "L'Anima del Luogo"}
            </span>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl text-[#172e24] leading-tight mb-4 sm:mb-6 font-light">
              {isEn ? (
                <>The private garden that gives name to your <span className="font-serif italic font-normal text-[#2a4f3d]">dearest memories</span></>
              ) : (
                <>Il Giardino privato che dà il nome ai tuoi <span className="font-serif italic font-normal text-[#2a4f3d]">ricordi migliori</span></>
              )}
            </h2>
            <p className="text-sm sm:text-lg text-[#524b43] font-light leading-relaxed mb-4 sm:mb-6 font-sans">
              {isEn ? 'An exclusive outdoor haven, fully fenced and protected from outside views. Crowned by a majestic ancient fig tree creating a natural canopy of cooling green shade for sunny afternoons.' : 'Uno spazio aperto esclusivo, interamente recintato e protetto dalla vista esterna. Qui troneggia un maestoso albero di fico che crea una naturale cattedrale d\'ombra verde per i pomeriggi estivi.'}
            </p>
            <p className="text-sm sm:text-lg text-[#524b43] font-light leading-relaxed mb-6 sm:mb-8 font-sans">
              {isEn ? 'At dusk, hanging fairy lights cast a magical glow: ideal for a glass of Primitivo or Verdeca, local taralli, and the distant silhouettes of Alberobello\'s stone cones.' : 'All\'imbrunire le lucine sospese creano un\'atmosfera sospesa nel tempo: perfetto per un calice di Primitivo o Verdeca, taralli e la vista in lontananza dei coni in pietra di Alberobello.'}
            </p>

            <div className="flex items-center gap-4 sm:gap-6 pt-4 border-t border-[#e2d8ca]">
              <div>
                <span className="font-heading text-xl sm:text-2xl text-[#1e3329] font-medium block">
                  {isEn ? 'Outdoor Table' : 'Tavolo Esterno'}
                </span>
                <span className="text-[11px] sm:text-xs text-[#7d7468]">
                  {isEn ? 'For al fresco dining & breakfasts' : 'Per pranzi e colazioni all\'aperto'}
                </span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-[#e2d8ca]" />
              <div>
                <span className="font-heading text-xl sm:text-2xl text-[#1e3329] font-medium block">
                  {isEn ? 'Solarium & Flora' : 'Solarium & Fiori'}
                </span>
                <span className="text-[11px] sm:text-xs text-[#7d7468]">
                  {isEn ? 'Bougainvillea & pure serenity' : 'Bougainvillea e pace assoluta'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/ndf_8231.jpg"
                alt={isEn ? "Garden at night with fairy lights" : "Il Giardino di sera con le lucine accese"}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Dettaglio secondario sovrapposto */}
            <div className="absolute -bottom-8 -left-6 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <img
                src="/images/ndf_8038.jpg"
                alt={isEn ? "The ancient fig tree by day" : "Il grande albero di fico di giorno"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Il Parcheggio Privato: Una Rarità ad Alberobello */}
      <section className="bg-[#172e24] text-white py-16 sm:py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8c29d] font-bold block mb-2 sm:mb-3">
              {isEn ? 'An Invaluable Asset' : 'Un Vantaggio Inestimabile'}
            </span>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl text-white font-light leading-tight mb-4 sm:mb-6">
              {isEn ? 'Up to 3 free parking spaces inside the gated private driveway' : 'Fino a 3 posti auto gratuiti nel viale privato custodito'}
            </h2>
            <p className="text-sm sm:text-lg text-[#ded8cb] font-light leading-relaxed mb-4 sm:mb-6 font-sans max-w-2xl">
              {isEn ? 'Anyone who has visited Alberobello knows the parking ordeal: costly paid parking lots (€25-30+ per day), hourly meters, and congested traffic.' : 'Chiunque abbia visitato Alberobello conosce la complessità del parcheggio: stalli a pagamento costosi (oltre 25-30€ al giorno), tariffe a ore e traffico congestionato.'}
            </p>
            <p className="text-sm sm:text-lg text-[#ded8cb] font-light leading-relaxed font-sans max-w-2xl">
              {isEn ? 'At Il Giardino dei Ricordi, drive right in, pass through the private gate, and park up to 3 vehicles safely on site. From that moment, leave your car behind and explore all of Alberobello on foot in complete serenity.' : <>A <strong>Il Giardino dei Ricordi</strong> arrivi in auto, varchi il cancello privato e parcheggi fino a 3 veicoli all'interno della proprietà. Da quel momento la macchina non ti serve più: vivi tutta Alberobello a piedi in totale serenità.</>}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="/images/ndf_8246.jpg"
                alt={isEn ? "Private gated driveway with parking" : "Viale carrabile privato con posti auto"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#f7e0bc] font-medium">
                  {isEn ? 'Exclusive private driveway access' : "Viale carrabile d'accesso esclusivo"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Distanze a Piedi & Mappa Territorio */}
      <section id="location" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold block mb-2">
            {isEn ? 'Privileged Location' : 'Posizione Privilegiata'}
          </span>
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl text-[#172e24] font-light">
            {isEn ? 'In the heart of Alberobello, steps from the historic Trulli cones' : 'Nel cuore di Alberobello, a pochi passi dai coni storici'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <p className="text-sm sm:text-base text-[#524b43] font-light leading-relaxed font-sans">
              {isEn ? 'Located in Via Capitano V. di Mola 35, in a peaceful residential neighborhood, within comfortable walking distance from all major UNESCO sights:' : 'La struttura si trova in Via Capitano V. di Mola 35, in un contesto residenziale tranquillo e silenzioso, a breve distanza a piedi da tutte le principali meraviglie UNESCO di Alberobello:'}
            </p>

            <div className="divide-y divide-[#e8dfd2] border-y border-[#e8dfd2]">
              {[
                { name: isEn ? "Trullo Church of St. Anthony" : "Chiesa a Trullo di Sant'Antonio", dist: "700 m", time: isEn ? "8 min walk" : "8 min a piedi" },
                { name: isEn ? "Rione Monti (Monumental Quarter)" : "Rione Monti (Quartiere monumentale)", dist: "850 m", time: isEn ? "10 min walk" : "10 min a piedi" },
                { name: isEn ? "Trullo Sovrano" : "Trullo Sovrano", dist: "900 m", time: isEn ? "11 min walk" : "11 min a piedi" },
                { name: isEn ? "Basilica of SS. Cosmas & Damian" : "Basilica SS. Cosma e Damiano", dist: "650 m", time: isEn ? "7 min walk" : "7 min a piedi" },
                { name: isEn ? "Locorotondo & Martina Franca" : "Locorotondo & Martina Franca", dist: "9 - 14 km", time: isEn ? "12 min by car" : "12 min in auto" },
                { name: isEn ? "Beaches of Monopoli & Polignano a Mare" : "Spiagge di Monopoli e Polignano a Mare", dist: "28 km", time: isEn ? "30 min by car" : "30 min in auto" },
              ].map((item, idx) => (
                <div key={idx} className="py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium text-[#1e3329] pr-2">{item.name}</span>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] sm:text-xs text-[#9f3757] font-semibold block">{item.time}</span>
                    <span className="text-[10px] sm:text-[11px] text-[#786f66] block">{item.dist}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Capitano+V.+di+Mola+35+Alberobello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1e3329] hover:text-[#9f3757] transition-colors"
              >
                <span>{isEn ? 'Open location on Google Maps' : 'Apri posizione su Google Maps'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#e6decf] border border-[#d8cfbe] shadow-lg">
              <iframe
                title="Mappa Il Giardino dei Ricordi"
                src="https://maps.google.com/maps?q=Via%20Capitano%20V.%20di%20Mola%2035,%20Alberobello&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. Recensioni d'Autore & Voto Booking */}
      <section id="reviews" className="py-16 sm:py-20 bg-[#f4eee3] border-t border-[#e2d8ca] px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-10 border-b border-[#ded3c2] mb-8 sm:mb-12 gap-3 sm:gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold block mb-1">
                {isEn ? 'Guest Reviews' : 'La Parola agli Ospiti'}
              </span>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl text-[#172e24]">
                {isEn ? 'Rating 9.6 out of 10 • Exceptional' : 'Punteggio 9.6 su 10 • Giudizio Eccezionale'}
              </h2>
            </div>
            <a
              href={t.brand.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#2a4f3d] hover:text-[#9f3757] transition-colors"
            >
              <span>{isEn ? 'Verified on Booking.com (91+ reviews)' : 'Verificato su Booking.com (91+ recensioni)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                author: "Perina",
                country: "Italia",
                countryEn: "Italy",
                flag: "🇮🇹",
                date: "Ottobre 2025",
                dateEn: "October 2025",
                score: "10",
                title: isEn ? "Exceptional" : "Eccezionale",
                text: isEn
                  ? "Steps from the center, the kindest and most helpful host, clean apartment equipped with many comforts and small thoughtful touches for guests (in the bathroom you even find bandages and disinfectant!). The two bedrooms are enormous, the bathrooms curated and spacious, large and welcoming living area, private courtyard parking, but the true highlight is the private garden where you can dine in absolute tranquility."
                  : "Posizione a due passi dal centro, host gentilissima e disponibilissima, appartamento pulito e dotato di molti comfort e piccole accortezze per gli ospiti (in bagno si trovano anche cerotti e disinfettante!). Le due camere sono enormi, i bagni curati e spaziosi, zona comune grande ed accogliente, parcheggio in corte privato, ma la vera chicca è il giardino privato dove poter cenare in un'assoluta tranquillità.",
              },
              {
                author: "Miceli",
                country: "Italia",
                countryEn: "Italy",
                flag: "🇮🇹",
                date: "Agosto 2026",
                dateEn: "August 2026",
                score: "10",
                title: isEn ? "Exceptional" : "Eccezionale",
                text: isEn
                  ? "A 10-out-of-10 experience! The villa in Alberobello is perfect from every point of view: welcoming, curated in the smallest details and immersed in tranquility. But what struck us most was the owners: exceptionally kind and super helpful people, always ready with a tip or help. We felt truly pampered. Highly recommended!"
                  : "Esperienza da 10 e lode! La villa ad Alberobello è perfetta sotto ogni punto di vista: accogliente, curata nei minimi dettagli e immersa nella tranquillità. Ma la cosa che ci ha colpito di più sono i proprietari: persone gentilissime e super disponibili, sempre pronti con un consiglio o un aiuto. Ci siamo sentiti coccolati. Consigliatissima!",
              },
              {
                author: "Fabiana",
                country: "Svizzera",
                countryEn: "Switzerland",
                flag: "🇨🇭",
                date: "Maggio 2026",
                dateEn: "May 2026",
                score: "10",
                title: isEn ? "Exceptional" : "Eccezionale",
                text: isEn
                  ? "Signora Marilena is wonderfully kind and very helpful. A very beautiful, well-cared-for apartment. Excellent location, very close to the center. Everything was perfect. Thank you so much."
                  : "La Signora Marilena gentilissima, e molto disponibile. Un appartamento molto bello e ben curato. Posizione ottima, vicinissima al centro. Tutto perfetto. Grazie mille.",
              },
            ].map((rev, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-7 rounded-2xl border border-[#e2d8ca] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f0eae0]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1e382b] text-[#f7e0bc] font-bold text-xs sm:text-sm flex items-center justify-center font-heading">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-xs sm:text-sm text-[#1e3329]">{rev.author}</span>
                          <span className="text-sm">{rev.flag}</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-[#8a7f72] block">
                          {isEn ? rev.countryEn : rev.country} • {isEn ? rev.dateEn : rev.date}
                        </span>
                      </div>
                    </div>
                    <div className="px-2 sm:px-2.5 py-1 rounded-lg bg-[#003580] text-white font-bold text-xs shadow-2xs flex items-center gap-1">
                      <span>{rev.score}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#2d4a3e] block mb-2">
                    ★ {rev.title}
                  </span>

                  <p className="font-serif italic text-sm sm:text-base text-[#4a4239] leading-relaxed mb-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="text-[10px] sm:text-[11px] font-medium text-[#7a7064] pt-3 border-t border-[#f4ede3] flex items-center justify-between">
                  <span>{isEn ? 'Verified on Booking.com' : 'Recensione verificata Booking.com'}</span>
                  <span className="text-emerald-700 font-bold">10 / 10</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Contatto Diretto con Marilena Liuzzi (Minimalist Direct Booking) */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#9f3757] font-bold block mb-3">
          {isEn ? 'Direct Reservation' : 'Prenotazione Diretta'}
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl text-[#172e24] mb-4 font-light">
          {isEn ? 'Contact Marilena Liuzzi Directly' : 'Contatta direttamente Marilena Liuzzi'}
        </h2>
        <p className="text-base sm:text-lg text-[#665e55] font-light max-w-xl mx-auto mb-10 font-sans">
          {isEn ? 'No booking agency commissions: guaranteed best direct rates, 3 reserved parking spaces, and warm hospitality before and throughout your stay.' : 'Nessuna commissione d\'agenzia: miglior tariffa garantita, 3 posti auto riservati e assistenza calorosa prima e durante il tuo soggiorno ad Alberobello.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#172e24] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#254838] transition-all shadow-lg hover:scale-102"
          >
            <Sparkles className="w-4 h-4 text-[#e6cfab]" />
            <span>{isEn ? 'Check Availability' : 'Richiedi Disponibilità'}</span>
          </button>

          <a
            href={`https://wa.me/${t.brand.phoneRaw}?text=${encodeURIComponent(
              isEn
                ? 'Hello Marilena, I would like to check availability and direct rates for Il Giardino dei Ricordi in Alberobello.'
                : 'Buongiorno Marilena, vorrei richiedere la migliore tariffa diretta per Il Giardino dei Ricordi ad Alberobello.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isEn ? `WhatsApp Marilena (${t.brand.phone})` : `Scrivi su WhatsApp (${t.brand.phone})`}</span>
          </a>
        </div>
      </section>

    </div>
  );
};

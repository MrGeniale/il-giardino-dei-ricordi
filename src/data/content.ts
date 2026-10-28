export interface ContentData {
  brand: {
    name: string;
    tagline: string;
    hostName: string;
    phone: string;
    phoneRaw: string;
    email: string;
    address: string;
    bookingUrl: string;
    facebookUrl: string;
    rating: string;
    reviewCount: string;
  };
  nav: {
    story: string;
    privileges: string;
    garden: string;
    spaces: string;
    amenities: string;
    gallery: string;
    location: string;
    reviews: string;
    bookNow: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    features: {
      label: string;
      sub: string;
      icon: string;
    }[];
    bookDirect: string;
    contactWhatsApp: string;
    explore: string;
  };
  quickBar: {
    title: string;
    parkingBadge: string;
    bedsBadge: string;
    centerBadge: string;
    cta: string;
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    quote: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  privileges: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      desc: string;
      tag: string;
      icon: string;
    }[];
  };
  garden: {
    badge: string;
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    highlights: {
      title: string;
      desc: string;
    }[];
    cta: string;
  };
  spaces: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      desc: string;
      image: string;
      features: string[];
    }[];
  };
  amenities: {
    badge: string;
    title: string;
    subtitle: string;
    list: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterGarden: string;
    filterRooms: string;
    filterLiving: string;
    filterDetails: string;
  };
  location: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    openInMaps: string;
    address: string;
    places: {
      name: string;
      distance: string;
      time: string;
      desc: string;
    }[];
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    ratingScore: string;
    ratingLabel: string;
    source: string;
    items: {
      name: string;
      country: string;
      flag: string;
      rating: string;
      text: string;
      highlight: string;
    }[];
  };
  directBooking: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    perks: {
      title: string;
      desc: string;
    }[];
    ctaWhatsApp: string;
    ctaPhone: string;
    orBooking: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    datesLabel: string;
    checkIn: string;
    checkOut: string;
    guestsLabel: string;
    guestsCount: (n: number) => string;
    cotsOption: string;
    extraBedOption: string;
    parkingOption: string;
    nameLabel: string;
    phoneLabel: string;
    notesLabel: string;
    sendWhatsApp: string;
    close: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    contacts: string;
    rights: string;
    hostGreeting: string;
  };
}

export const content: Record<'it' | 'en', ContentData> = {
  it: {
    brand: {
      name: "Il Giardino dei Ricordi",
      tagline: "Dimora Turistica con Giardino & Parcheggio Privato",
      hostName: "Marilena Liuzzi",
      phone: "+39 338 344 1412",
      phoneRaw: "393383441412",
      email: "info@ilgiardinodeiricordi.it",
      address: "Via Capitano V. di Mola 35, 70011 Alberobello (BA), Italia",
      bookingUrl: "https://www.booking.com/hotel/it/il-giardino-dei-ricordi.it.html",
      facebookUrl: "https://www.facebook.com/profile.php?id=100094762976863",
      rating: "9.7",
      reviewCount: "91+",
    },
    nav: {
      story: "La Dimora",
      privileges: "I Privilegi",
      garden: "Il Giardino",
      spaces: "Gli Spazi",
      amenities: "Servizi",
      gallery: "Galleria",
      location: "Posizione",
      reviews: "Recensioni",
      bookNow: "Prenota Diretto",
      contact: "Contattaci",
    },
    hero: {
      badge: "★ 9.7 ECCEZIONALE SU BOOKING.COM • ALBEROBELLO CENTRO",
      title: "L'Oasi Segreta nel Cuore di",
      titleAccent: "Alberobello",
      subtitle: "Il raro privilegio di un ampio giardino privato e fino a 2 posti auto gratuiti all'interno della proprietà, a soli 700 metri dai celebri Trulli.",
      features: [
        {
          label: "Posizione Centrale",
          sub: "A piedi nel centro storico",
          icon: "MapPin",
        },
        {
          label: "Fino a 2 Auto",
          sub: "Parcheggio privato gratuito",
          icon: "Car",
        },
        {
          label: "4 Posti Letto",
          sub: "+ Culla bebè su richiesta",
          icon: "Bed",
        },
        {
          label: "Giardino Esclusivo",
          sub: "Con patio e maestoso fico",
          icon: "Trees",
        },
      ],
      bookDirect: "Richiedi Disponibilità",
      contactWhatsApp: "WhatsApp con Marilena",
      explore: "Scopri la Dimora",
    },
    quickBar: {
      title: "Punti di forza esclusivi per il tuo soggiorno:",
      parkingBadge: "2 Posti Auto Gratuiti Riservati",
      bedsBadge: "4 Posti Letto + Culla su Richiesta",
      centerBadge: "700m a Piedi dai Trulli",
      cta: "Verifica Date su WhatsApp",
    },
    about: {
      badge: "BENVENUTI A CASA",
      title: "Una quiete rara nel centro della Capitale dei Trulli",
      lead: "Un rifugio accogliente pensato per chi desidera esplorare Alberobello senza rinunciare a spazio, privacy e serenità.",
      p1: "Situato in Via Capitano V. di Mola, Il Giardino dei Ricordi nasce dal desiderio di offrire un'esperienza autentica di accoglienza pugliese. La dimora combina la comodità di raggiungere a piedi Rione Monti e i trulli monumentali con la tranquillità impagabile di un cortile e giardino privato interamente recintato.",
      p2: "Ad Alberobello trovare parcheggio è notoriamente una delle sfide più complesse: qui hai a disposizione un viale privato capace di ospitare comodamente fino a 2 auto, cancello d'accesso e ampi spazi esterni all'ombra di un fico secolare dove rinfrescarsi d'estate o sorseggiare un calice di vino la sera.",
      quote: "Accogliere i nostri ospiti non è solo aprire una porta: è farli sentire parte di una memoria felice tra i colori e i profumi della nostra terra.",
      stats: [
        { value: "9.7", label: "Punteggio su Booking.com" },
        { value: "700m", label: "Dalla Chiesa a Trullo" },
        { value: "2", label: "Posti Auto Gratuiti" },
        { value: "4", label: "Posti Letto Ospitabili" },
      ],
    },
    privileges: {
      badge: "PERCHÉ SCEGLIERCI",
      title: "I 4 Privilegi Rari ad Alberobello",
      subtitle: "Vantaggi unici che trasformano una semplice vacanza in un soggiorno impeccabile e senza pensieri.",
      items: [
        {
          id: "parking",
          title: "Parcheggio Privato fino a 2 Auto",
          desc: "Nel centro di Alberobello il parcheggio è scarso e costoso. Da noi entri direttamente nel viale privato recintato e parcheggi fino a 2 vetture in totale sicurezza e gratis.",
          tag: "Rarità Assoluta",
          icon: "Car",
        },
        {
          id: "location",
          title: "Centralissimo ma Fuori dal Caos",
          desc: "A soli 700 metri dalla Chiesa a Trullo di Sant'Antonio e dal Rione Monti. Lasci la macchina e vivi tutta Alberobello a piedi, godendoti la sera un silenzio rigenerante.",
          tag: "Tutto a Piedi",
          icon: "MapPin",
        },
        {
          id: "garden",
          title: "Giardino Privato con Fico Secolare",
          desc: "Un'oasi verde riservata ed esclusiva: patio in pietra, sedute all'aperto, bougainvillea, vasi decorati e lucine serali per cene e colazioni all'aria aperta.",
          tag: "Oasi di Pace",
          icon: "Trees",
        },
        {
          id: "capacity",
          title: "Spazio per Famiglie (4 Posti Letto)",
          desc: "Due camere matrimoniali separate, due bagni completi con doccia e la possibilità di aggiungere una culla per neonati. Ideale per famiglie e coppie di amici.",
          tag: "Comfort Totale",
          icon: "Users",
        },
      ],
    },
    garden: {
      badge: "L'OASI NATURALE",
      title: "Il Giardino che dà il nome ai tuoi ricordi",
      subtitle: "Uno spazio all'aperto intimo e rigenerante, dove il tempo rallenta al ritmo della brezza pugliese.",
      desc1: "Al centro del nostro giardino svetta un maestoso fico dalle fronde generose, che regala ombra fresca nelle ore calde estive e crea una cornice fiabesca per le serate all'aperto. I pavimenti in pietra chiara, i vasi in terracotta e le damigiane in vetro verde raccontano l'anima rurale e accogliente della nostra terra.",
      desc2: "Al crepuscolo, le file di lucine sospese tra i rami si accendono dolcemente: il luogo perfetto per un aperitivo pugliese con taralli e vino locale, mentre sullo sfondo si scorgono i profili dei tetti conici di Alberobello.",
      highlights: [
        {
          title: "Colazioni e Cene all'Aperto",
          desc: "Tavolo esterno con sedie per godersi ogni momento sotto il cielo azzurro.",
        },
        {
          title: "Solarium e Relax",
          desc: "Spazio ideale per leggere un libro, prendere il sole o far giocare i bambini in sicurezza.",
        },
        {
          title: "Atmosfera Sotto le Stelle",
          desc: "Illuminazione notturna suggestiva per serate indimenticabili in compagnia.",
        },
      ],
      cta: "Scopri la Galleria Esterni",
    },
    spaces: {
      badge: "GLI INTERNI",
      title: "Spazi luminosi, ampi e curati in ogni dettaglio",
      subtitle: "Un intero appartamento con ingresso indipendente, climatizzazione in cucina, riscaldamento a pavimento e finiture contemporanee.",
      items: [
        {
          id: "camera-padronale",
          title: "Camera Matrimoniale Padronale",
          subtitle: "Eleganza senza tempo",
          desc: "Ampia camera con letto matrimoniale, comò d'epoca con specchiera intagliata, armadio, biancheria di pregio e riscaldamento a pavimento.",
          image: "/images/ndf_8001.jpg",
          features: ["Letto matrimoniale king", "Comò e specchio d'epoca", "Riscaldamento a pavimento", "Finestra panoramica", "Possibilità culla bebè"],
        },
        {
          id: "camera-moderna",
          title: "Seconda Camera Matrimoniale",
          subtitle: "Comfort e design moderno",
          desc: "Spaziosa e accogliente, rifinita con arredi in rovere chiaro, grande armadio a tre ante, sedute coordinate, pavimento in pietra e riscaldamento a pavimento.",
          image: "/images/ndf_8022.jpg",
          features: ["Letto matrimoniale", "Armadio capiente", "Riscaldamento a pavimento", "Tavolino toilette", "Ampia finestra"],
        },
        {
          id: "bagni-privati",
          title: "Due Bagni Completi con Doccia",
          subtitle: "Massima privacy per tutti",
          desc: "La presenza di ben 2 bagni indipendenti evita ogni attesa: entrambi dotati di spaziosa cabina doccia in cristallo, bidet, termoarredo e asciugacapelli.",
          image: "/images/ndf_7978.jpg",
          features: ["2 Bagni indipendenti", "Box doccia in cristallo", "Bidet e sanitari moderni", "Termoarredo", "Set cortesia & phon"],
        },
        {
          id: "living-cucina",
          title: "Open Space Living & Cucina Attrezzata",
          subtitle: "La convivialità di casa",
          desc: "Cucina completa con lavastoviglie, climatizzatore, forno, piano cottura a gas, microonde, frigo e macchina del caffè. Tavolo da pranzo allungabile per 6 persone e salotto relax con Smart TV.",
          image: "/images/ndf_7963.jpg",
          features: ["Cucina completa con lavastoviglie", "Climatizzatore autonomo", "Tavolo da pranzo per 6", "Due comodi divani", "Smart TV a schermo piatto", "Macchina caffè e bollitore"],
        },
      ],
    },
    amenities: {
      badge: "TUTTI I COMFORT",
      title: "I servizi inclusi nella tua permanenza",
      subtitle: "Tutto ciò di cui hai bisogno per sentirti a casa, con le comodità di una struttura di alto livello.",
      list: [
        {
          title: "Parcheggio per 2 Auto",
          desc: "Viale carrabile recintato con cancello privato, totalmente gratuito.",
          icon: "Car",
        },
        {
          title: "Giardino e Patio Privato",
          desc: "Spazio esterno attrezzato con tavolo, sedie e zona solarium.",
          icon: "Trees",
        },
        {
          title: "Climatizzatore in Cucina & Riscaldamento a Pavimento",
          desc: "Climatizzatore nella zona giorno/cucina e riscaldamento a pavimento in tutta la casa per un comfort ideale in ogni stagione.",
          icon: "Wind",
        },
        {
          title: "Wi-Fi Fibra Veloce",
          desc: "Connessione internet gratuita ad alta velocità per lavoro e streaming.",
          icon: "Wifi",
        },
        {
          title: "Cucina Completa con Lavastoviglie",
          desc: "Lavastoviglie, frigorifero, forno, microonde, fornelli, stoviglie e macchina caffè.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Culla Bebè",
          desc: "Disponibilità su richiesta di culla bebè per neonati e bimbi 0-3 anni.",
          icon: "Baby",
        },
        {
          title: "Due Bagni con Doccia",
          desc: "Box doccia, bidet, asciugamani morbidi e phon in dotazione.",
          icon: "Bath",
        },
        {
          title: "Ingresso Indipendente",
          desc: "Massima libertà di orari e privacy totale per la tua famiglia.",
          icon: "Key",
        },
      ],
    },
    gallery: {
      badge: "I NOSTRI SCATTI",
      title: "Uno sguardo alla dimora",
      subtitle: "Esplora gli spazi interni e l'oasi verde de Il Giardino dei Ricordi.",
      filterAll: "Tutti gli Scatti",
      filterGarden: "Il Giardino",
      filterRooms: "Le Camere",
      filterLiving: "Living & Cucina",
      filterDetails: "Dettagli & Bagni",
    },
    location: {
      badge: "DOVE SIAMO",
      title: "Nel cuore della Valle d'Itria, a piedi nei Trulli",
      subtitle: "Via Capitano V. di Mola 35, Alberobello: una posizione privilegiata e silenziosa a ridosso del centro.",
      desc: "La dimora ti consente di dimenticare l'automobile per tutta la durata del soggiorno. In pochi minuti di piacevole passeggiata sarai al cospetto del Trullo Sovrano, della Chiesa a Trullo di Sant'Antonio o del Belvedere di Piazza del Popolo.",
      openInMaps: "Apri su Google Maps",
      address: "Via Capitano V. di Mola 35, 70011 Alberobello (BA)",
      places: [
        {
          name: "Chiesa a Trullo di Sant'Antonio",
          distance: "700 metri",
          time: "8 min a piedi",
          desc: "Celebre architettura sacra a forma di trullo",
        },
        {
          name: "Belvedere dei Trulli",
          distance: "700 metri",
          time: "8 min a piedi",
          desc: "La celebre terrazza panoramica con vista sull'intero Rione Monti",
        },
        {
          name: "Aia Piccola",
          distance: "750 metri",
          time: "9 min a piedi",
          desc: "Il borgo di trulli più autentico e tranquillo di Alberobello",
        },
        {
          name: "Rione Monti (Trulli storici)",
          distance: "850 metri",
          time: "10 min a piedi",
          desc: "Il quartiere monumentale patrimonio UNESCO",
        },
        {
          name: "Trullo Sovrano",
          distance: "900 metri",
          time: "11 min a piedi",
          desc: "L'unico trullo a due piani visitabile",
        },
        {
          name: "Basilica SS. Cosma e Damiano",
          distance: "650 metri",
          time: "7 min a piedi",
          desc: "Santuario centrale della città",
        },
        {
          name: "Locorotondo & Martina Franca",
          distance: "9 - 14 km",
          time: "12 min in auto",
          desc: "I borghi bianchi più suggestivi della Valle d'Itria",
        },
        {
          name: "Cisternino",
          distance: "18 km",
          time: "20 min in auto",
          desc: "Caratteristico borgo autentico tra i più belli d'Italia",
        },
        {
          name: "Ostuni (La Città Bianca)",
          distance: "34 km",
          time: "35 min in auto",
          desc: "L'iconica perla bianca arroccata con scorci mozzafiato sul mare",
        },
        {
          name: "Spiagge di Monopoli e Polignano",
          distance: "28 km",
          time: "30 min in auto",
          desc: "Il mare cristallino e le scogliere adriatiche",
        },
      ],
    },
    reviews: {
      badge: "OSPITI ENTUSIASTI",
      title: "Cosa dicono di noi i nostri viaggiatori",
      subtitle: "Oltre 90 recensioni verificate con una valutazione media straordinaria.",
      ratingScore: "9.7",
      ratingLabel: "Eccezionale",
      source: "Verificato su Booking.com",
      items: [
        {
          name: "Perina",
          country: "Italia",
          flag: "🇮🇹",
          rating: "10/10",
          highlight: "La vera chicca è il giardino privato per cenare in tranquillità",
          text: "Posizione a due passi dal centro, host gentilissima e disponibilissima, appartamento pulito e dotato di molti comfort e piccole accortezze per gli ospiti (in bagno si trovano anche cerotti e disinfettante!). Le due camere sono enormi, i bagni curati e spaziosi, zona comune grande ed accogliente, parcheggio in corte privato, ma la vera chicca è il giardino privato dove poter cenare in un'assoluta tranquillità.",
        },
        {
          name: "Miceli",
          country: "Italia",
          flag: "🇮🇹",
          rating: "10/10",
          highlight: "Esperienza da 10 e lode! Villa perfetta sotto ogni punto di vista",
          text: "Esperienza da 10 e lode! La villa ad Alberobello è perfetta sotto ogni punto di vista: accogliente, curata nei minimi dettagli e immersa nella tranquillità. Ma la cosa che ci ha colpito di più sono i proprietari: persone gentilissime e super disponibili, sempre pronti con un consiglio o un aiuto. Ci siamo sentiti coccolati. Consigliatissima!",
        },
        {
          name: "Fabiana",
          country: "Svizzera",
          flag: "🇨🇭",
          rating: "10/10",
          highlight: "Signora Marilena gentilissima, appartamento molto bello e curato",
          text: "La Signora Marilena gentilissima, e molto disponibile. Un appartamento molto bello e ben curato. Posizione ottima, vicinissima al centro. Tutto perfetto. Grazie mille.",
        },
      ],
    },
    directBooking: {
      badge: "PRENOTAZIONE DIRETTA",
      title: "Prenota direttamente con Marilena",
      subtitle: "Ricevi subito la migliore tariffa garantita senza commissioni di intermediari.",
      desc: "Contattandoci direttamente potrai concordare orari flessibili di check-in, richiedere la culla bebè e ricevere consigli preziosi per vivere Alberobello come un vero locale.",
      perks: [
        {
          title: "Miglior Tariffa Garantita",
          desc: "Nessun costo di agenzia o rincari di portale: prezzo trasparente.",
        },
        {
          title: "2 Posti Auto Inclusi & Riservati",
          desc: "Il tuo posto nel viale recintato è garantito all'arrivo.",
        },
        {
          title: "Contatto Diretto con l'Ospite",
          desc: "Parli direttamente con la signora Marilena su WhatsApp o per telefono.",
        },
        {
          title: "Flessibilità Culla Bebè",
          desc: "Personalizziamo la sistemazione con culla per i più piccoli.",
        },
      ],
      ctaWhatsApp: "Scrivici su WhatsApp",
      ctaPhone: "Chiama Marilena Liuzzi",
      orBooking: "Oppure consulta la nostra pagina su Booking.com",
    },
    bookingModal: {
      title: "Richiedi Disponibilità",
      subtitle: "Verifica subito le date con Marilena Liuzzi su WhatsApp senza intermediari",
      datesLabel: "Date del soggiorno",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guestsLabel: "Numero Ospiti",
      guestsCount: (n: number) => `${n} ${n === 1 ? 'Ospite' : 'Ospiti'}`,
      cotsOption: "Culla per neonato / bebè (0-3 anni)",
      extraBedOption: "Letto singolo aggiuntivo",
      parkingOption: "Arriverò in auto (fino a 2 posti gratuiti nel viale privato)",
      nameLabel: "Il tuo nome e cognome",
      phoneLabel: "Il tuo recapito telefonico",
      notesLabel: "Messaggio o richieste particolari",
      sendWhatsApp: "Invia Richiesta su WhatsApp",
      close: "Chiudi",
    },
    footer: {
      about: "Dimora turistica di charme ad Alberobello con giardino privato, 2 posti auto gratuiti e comfort contemporaneo per famiglie e coppie.",
      quickLinks: "Link Rapidi",
      contacts: "Contatti Diretti",
      rights: "Tutti i diritti riservati. Locazione Turistica Alberobello.",
      hostGreeting: "Ospitalità a cura di Marilena Liuzzi",
    },
  },
  en: {
    brand: {
      name: "Il Giardino dei Ricordi",
      tagline: "Tourist Residence with Private Garden & Parking",
      hostName: "Marilena Liuzzi",
      phone: "+39 338 344 1412",
      phoneRaw: "393383441412",
      email: "info@ilgiardinodeiricordi.it",
      address: "Via Capitano V. di Mola 35, 70011 Alberobello (BA), Italy",
      bookingUrl: "https://www.booking.com/hotel/it/il-giardino-dei-ricordi.it.html",
      facebookUrl: "https://www.facebook.com/profile.php?id=100094762976863",
      rating: "9.7",
      reviewCount: "91+",
    },
    nav: {
      story: "The Residence",
      privileges: "Privileges",
      garden: "The Garden",
      spaces: "The Rooms",
      amenities: "Amenities",
      gallery: "Gallery",
      location: "Location",
      reviews: "Reviews",
      bookNow: "Direct Booking",
      contact: "Contact",
    },
    hero: {
      badge: "★ 9.7 EXCEPTIONAL ON BOOKING.COM • ALBEROBELLO CENTER",
      title: "The Secret Garden in the Heart of",
      titleAccent: "Alberobello",
      subtitle: "The rare luxury of an expansive private garden and up to 2 complimentary private parking spaces on-site, just 700 meters from the world-famous Trulli.",
      features: [
        {
          label: "Central Location",
          sub: "Walking distance to trulli",
          icon: "MapPin",
        },
        {
          label: "Up to 2 Cars",
          sub: "Free private parking",
          icon: "Car",
        },
        {
          label: "Sleeps 4",
          sub: "+ Baby cot on request",
          icon: "Bed",
        },
        {
          label: "Private Oasis",
          sub: "Patio with majestic fig tree",
          icon: "Trees",
        },
      ],
      bookDirect: "Check Availability",
      contactWhatsApp: "WhatsApp with Marilena",
      explore: "Explore the Home",
    },
    quickBar: {
      title: "Exclusive highlights for your stay:",
      parkingBadge: "2 Free Private Parking Spots",
      bedsBadge: "Sleeps 4 + Baby Cot on Request",
      centerBadge: "700m Walk to Historic Trulli",
      cta: "Check Dates on WhatsApp",
    },
    about: {
      badge: "WELCOME HOME",
      title: "Rare serenity in the Capital of Trulli",
      lead: "A welcoming sanctuary designed for travelers who want to explore Alberobello without sacrificing space, privacy, and calm.",
      p1: "Located on Via Capitano V. di Mola, Il Giardino dei Ricordi was born from the desire to offer an authentic, warm Apulian hospitality experience. The property combines walking convenience to Rione Monti with the priceless peace of a fully fenced private courtyard and garden.",
      p2: "Parking in Alberobello is notoriously challenging: here you have a private gated driveway accommodating up to 2 cars with complete peace of mind, alongside generous outdoor grounds shaded by a majestic fig tree where you can unwind after a day of sightseeing.",
      quote: "Welcoming guests is not just handing over keys: it's creating lasting happy memories amidst the colors and fragrances of Puglia.",
      stats: [
        { value: "9.7", label: "Booking.com Score" },
        { value: "700m", label: "To Trullo Church" },
        { value: "2", label: "Free Parking Spaces" },
        { value: "4", label: "Guests Capacity" },
      ],
    },
    privileges: {
      badge: "WHY CHOOSE US",
      title: "4 Rare Privileges in Alberobello",
      subtitle: "Unmatched benefits that make your vacation seamless, convenient, and truly special.",
      items: [
        {
          id: "parking",
          title: "Private Parking for up to 2 Cars",
          desc: "In central Alberobello, parking is scarce and expensive. Here you drive straight into a gated private driveway and park up to 2 cars safely and for free.",
          tag: "Rare Luxury",
          icon: "Car",
        },
        {
          id: "location",
          title: "Central Yet Peaceful",
          desc: "Only 700 meters from the Trullo Church of St. Anthony and Rione Monti. Leave your car behind and explore all of Alberobello on foot, returning to quiet evenings.",
          tag: "Walk Everywhere",
          icon: "MapPin",
        },
        {
          id: "garden",
          title: "Private Garden with Heritage Fig Tree",
          desc: "An exclusive green retreat with stone patio, outdoor seating, bougainvillea blooms, and fairy string lights for al fresco breakfasts and sunset drinks.",
          tag: "Peaceful Oasis",
          icon: "Trees",
        },
        {
          id: "capacity",
          title: "Family Space (4 Guests)",
          desc: "Two independent double bedrooms, two full bathrooms with showers, plus the option of a baby cot. Perfect for families and couples traveling together.",
          tag: "Full Comfort",
          icon: "Users",
        },
      ],
    },
    garden: {
      badge: "NATURE RETREAT",
      title: "The Garden that gives your memories their name",
      subtitle: "An intimate, revitalizing outdoor haven where time slows down to the rhythm of the Apulian breeze.",
      desc1: "At the center of our garden stands a grand heritage fig tree providing lush natural shade during warm sunny afternoons. Light stone paths, terracotta planters, and antique glass demijohns celebrate the rustic beauty of our homeland.",
      desc2: "At twilight, soft fairy lights twinkle among the branches: the perfect setting for an evening aperitivo with taralli and local wine while admiring the trullo cone silhouettes on the horizon.",
      highlights: [
        {
          title: "Al Fresco Dining",
          desc: "Outdoor stone table and chairs to savor every moment under the Mediterranean sky.",
        },
        {
          title: "Sun Terrace & Relax",
          desc: "Ideal space for reading, sunbathing, or letting children play freely and safely.",
        },
        {
          title: "Enchanted Night Ambiance",
          desc: "Magical fairy lighting for unforgettable evenings under the Apulian stars.",
        },
      ],
      cta: "View Garden Gallery",
    },
    spaces: {
      badge: "THE INTERIORS",
      title: "Bright, spacious rooms crafted for your comfort",
      subtitle: "A complete residence with private entrance, kitchen climate control, underfloor heating throughout, and modern amenities.",
      items: [
        {
          id: "camera-padronale",
          title: "Master Double Bedroom",
          subtitle: "Timeless charm",
          desc: "Generous bedroom featuring a king-size double bed, vintage vanity with carved mirror, spacious wardrobe, fine linens, and underfloor heating throughout.",
          image: "/images/ndf_8001.jpg",
          features: ["King double bed", "Antique mirror dresser", "Underfloor heating", "Scenic window", "Baby cot available"],
        },
        {
          id: "camera-moderna",
          title: "Second Double Bedroom",
          subtitle: "Contemporary serenity",
          desc: "Light-filled and quiet, appointed with light oak furniture, a large three-door wardrobe, matching chairs, and polished limestone flooring with underfloor heating.",
          image: "/images/ndf_8022.jpg",
          features: ["Double bed", "Spacious wardrobe", "Underfloor heating", "Vanity desk", "Large window"],
        },
        {
          id: "bagni-privati",
          title: "Two Full Bathrooms with Showers",
          subtitle: "Complete privacy for everyone",
          desc: "Having two independent bathrooms ensures total convenience: each equipped with a glass-enclosed shower, bidet, heated towel rail, and hairdryer.",
          image: "/images/ndf_7978.jpg",
          features: ["2 Independent bathrooms", "Glass shower cabins", "Bidet and modern fixtures", "Heated towel rack", "Toiletries & hair dryer"],
        },
        {
          id: "living-cucina",
          title: "Open Space Living & Fully Equipped Kitchen",
          subtitle: "The warmth of home",
          desc: "Full kitchen with dishwasher, air conditioning, oven, gas stove, microwave, large fridge, and espresso coffee machine. Extendable dining table for 6 and relaxing lounge with Smart TV.",
          image: "/images/ndf_7963.jpg",
          features: ["Full modern appliances & dishwasher", "Air conditioning unit", "Dining table for 6", "Two cozy sofas", "Flat-screen Smart TV", "Coffee maker & kettle"],
        },
      ],
    },
    amenities: {
      badge: "EVERY COMFORT",
      title: "Amenities included with your stay",
      subtitle: "Everything you need to feel right at home with the perks of a top-rated stay.",
      list: [
        {
          title: "Parking for 2 Cars",
          desc: "Private gated driveway inside the property, 100% free.",
          icon: "Car",
        },
        {
          title: "Private Garden & Patio",
          desc: "Furnished outdoor area with dining table, chairs, and sun terrace.",
          icon: "Trees",
        },
        {
          title: "Kitchen A/C & Underfloor Heating",
          desc: "Air conditioning in kitchen/living space and whole-home underfloor heating for year-round comfort.",
          icon: "Wind",
        },
        {
          title: "Fast Fiber Wi-Fi",
          desc: "High-speed wireless internet for work and streaming.",
          icon: "Wifi",
        },
        {
          title: "Fully Equipped Kitchen with Dishwasher",
          desc: "Dishwasher, refrigerator, oven, microwave, stove, cookware, and coffee machine.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Baby Cot",
          desc: "Available upon request for infants (0-3 years).",
          icon: "Baby",
        },
        {
          title: "Two Full Bathrooms",
          desc: "Glass showers, bidets, plush towels, and hair dryer provided.",
          icon: "Bath",
        },
        {
          title: "Private Entrance",
          desc: "Complete privacy and autonomous check-in flexibility.",
          icon: "Key",
        },
      ],
    },
    gallery: {
      badge: "OUR GALLERY",
      title: "A glimpse of the property",
      subtitle: "Explore the comfortable interiors and lush garden of Il Giardino dei Ricordi.",
      filterAll: "All Photos",
      filterGarden: "The Garden",
      filterRooms: "Bedrooms",
      filterLiving: "Living & Kitchen",
      filterDetails: "Details & Bathrooms",
    },
    location: {
      badge: "LOCATION",
      title: "In the heart of Valle d'Itria, steps from the Trulli",
      subtitle: "Via Capitano V. di Mola 35, Alberobello: a prime, quiet location right next to the historic center.",
      desc: "Our location allows you to park your car and leave it untouched throughout your visit. A pleasant short stroll takes you directly to Trullo Sovrano, the Trullo Church of St. Anthony, and Rione Monti.",
      openInMaps: "Open in Google Maps",
      address: "Via Capitano V. di Mola 35, 70011 Alberobello (BA), Italy",
      places: [
        {
          name: "Trullo Church of St. Anthony",
          distance: "700 meters",
          time: "8 min walk",
          desc: "Famous trullo-shaped historic church",
        },
        {
          name: "Belvedere dei Trulli (Panoramic Terrace)",
          distance: "700 meters",
          time: "8 min walk",
          desc: "Iconic scenic overlook with sweeping views of the historic trulli cones",
        },
        {
          name: "Aia Piccola (Historic District)",
          distance: "750 meters",
          time: "9 min walk",
          desc: "The most authentic, peaceful, and residential trulli quarter",
        },
        {
          name: "Rione Monti (Historic Trulli)",
          distance: "850 meters",
          time: "10 min walk",
          desc: "UNESCO World Heritage monumental district",
        },
        {
          name: "Trullo Sovrano",
          distance: "900 meters",
          time: "11 min walk",
          desc: "The only two-story historic trullo in town",
        },
        {
          name: "Basilica of SS. Cosmas & Damian",
          distance: "650 meters",
          time: "7 min walk",
          desc: "Grand central sanctuary of Alberobello",
        },
        {
          name: "Locorotondo & Martina Franca",
          distance: "9 - 14 km",
          time: "12 min drive",
          desc: "The picturesque whitewashed towns of Valle d'Itria",
        },
        {
          name: "Cisternino",
          distance: "18 km",
          time: "20 min drive",
          desc: "Charming historic village ranked among the most beautiful in Italy",
        },
        {
          name: "Ostuni (The White City)",
          distance: "34 km",
          time: "35 min drive",
          desc: "The iconic whitewashed hill town with sweeping Adriatic views",
        },
        {
          name: "Beaches of Monopoli & Polignano",
          distance: "28 km",
          time: "30 min drive",
          desc: "Crystal-clear Adriatic sea and dramatic cliffs",
        },
      ],
    },
    reviews: {
      badge: "GUEST REVIEWS",
      title: "What our travelers say about us",
      subtitle: "Over 90 verified reviews with an extraordinary average rating.",
      ratingScore: "9.7",
      ratingLabel: "Exceptional",
      source: "Verified on Booking.com",
      items: [
        {
          name: "Perina",
          country: "Italy",
          flag: "🇮🇹",
          rating: "10/10",
          highlight: "The true highlight is the private garden for dining in peace",
          text: "Steps from the center, the kindest and most helpful host, clean apartment equipped with many comforts and small thoughtful touches for guests (in the bathroom you even find bandages and disinfectant!). The two bedrooms are enormous, the bathrooms curated and spacious, large and welcoming living area, private courtyard parking, but the true highlight is the private garden where you can dine in absolute tranquility.",
        },
        {
          name: "Miceli",
          country: "Italy",
          flag: "🇮🇹",
          rating: "10/10",
          highlight: "A 10-out-of-10 experience! Flawless villa in every aspect",
          text: "A 10-out-of-10 experience! The villa in Alberobello is perfect from every point of view: welcoming, curated in the smallest details and immersed in tranquility. But what struck us most was the owners: exceptionally kind and super helpful people, always ready with a tip or help. We felt truly pampered. Highly recommended!",
        },
        {
          name: "Fabiana",
          country: "Switzerland",
          flag: "🇨🇭",
          rating: "10/10",
          highlight: "Signora Marilena was wonderfully kind, beautiful and curated home",
          text: "Signora Marilena is wonderfully kind and very helpful. A very beautiful, well-cared-for apartment. Excellent location, very close to the center. Everything was perfect. Thank you so much.",
        },
      ],
    },
    directBooking: {
      badge: "DIRECT BOOKING",
      title: "Book directly with Marilena",
      subtitle: "Get the guaranteed best rate with zero booking fees or middleman markups.",
      desc: "By contacting us directly, you enjoy flexible check-in arrangements, custom baby cot setup, and local insider tips from Marilena for making the most of your stay.",
      perks: [
        {
          title: "Best Rate Guarantee",
          desc: "No platform fees or commissions: direct, honest rates.",
        },
        {
          title: "2 Parking Spots Guaranteed",
          desc: "Your spot in the private gated driveway is reserved for arrival.",
        },
        {
          title: "Direct Host Contact",
          desc: "Chat directly with Marilena on WhatsApp or phone.",
        },
        {
          title: "Family Flexibility",
          desc: "Customized setup with baby cot upon request.",
        },
      ],
      ctaWhatsApp: "Message on WhatsApp",
      ctaPhone: "Call Marilena Liuzzi",
      orBooking: "Or view our listing on Booking.com",
    },
    bookingModal: {
      title: "Check Availability",
      subtitle: "Send a direct inquiry to Marilena Liuzzi on WhatsApp or phone",
      datesLabel: "Dates of stay",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guestsLabel: "Number of Guests",
      guestsCount: (n: number) => `${n} ${n === 1 ? 'Guest' : 'Guests'}`,
      cotsOption: "Baby cot / crib (0-3 years)",
      extraBedOption: "Extra single bed",
      parkingOption: "Arriving by car (up to 2 free parking spots on site)",
      nameLabel: "Your Name",
      phoneLabel: "Phone Number",
      notesLabel: "Message or special requests",
      sendWhatsApp: "Send Request via WhatsApp",
      close: "Close",
    },
    footer: {
      about: "Charming vacation residence in Alberobello featuring a private garden, 2 free parking spots, and contemporary comforts for families and couples.",
      quickLinks: "Quick Links",
      contacts: "Direct Contacts",
      rights: "All rights reserved. Tourist Rental Alberobello.",
      hostGreeting: "Hospitality hosted by Marilena Liuzzi",
    },
  },
};

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { content, ContentData } from '../data/content';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ContentData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('it');

  useEffect(() => {
    const saved = localStorage.getItem('gdr_lang') as Language;
    if (saved === 'it' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const descMeta = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');

    if (language === 'en') {
      const enTitle = "Il Giardino dei Ricordi | Holiday Home with Garden & Free Parking in Alberobello";
      const enDesc = "Charming holiday home just 700m from Alberobello's UNESCO Trulli. Private garden with ancient fig tree, up to 2 free parking spaces inside gated driveway, 4 sleeps with 2 double bedrooms, 2 bathrooms, equipped kitchen with dishwasher and underfloor heating throughout. Booking.com 9.7 Exceptional rating.";
      document.title = enTitle;
      if (descMeta) descMeta.setAttribute('content', enDesc);
      if (ogTitle) ogTitle.setAttribute('content', enTitle);
      if (ogDesc) ogDesc.setAttribute('content', enDesc);
    } else {
      const itTitle = "Il Giardino dei Ricordi | Dimora con Giardino e Parcheggio Privato ad Alberobello";
      const itDesc = "Elegante dimora a soli 700m dai trulli di Alberobello. Ampio giardino privato con fico secolare, fino a 2 posti auto gratuiti custoditi, 4 posti letto (2 camere matrimoniali, 2 bagni), cucina attrezzata con lavastoviglie e climatizzatore, riscaldamento a pavimento in tutta la casa. Voto Booking 9.7 Eccezionale.";
      document.title = itTitle;
      if (descMeta) descMeta.setAttribute('content', itDesc);
      if (ogTitle) ogTitle.setAttribute('content', itTitle);
      if (ogDesc) ogDesc.setAttribute('content', itDesc);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('gdr_lang', lang);
  };

  const t = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};

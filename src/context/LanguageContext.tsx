import * as React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';

// Import translations
import enTranslations from '../../locales/en/translation.json';
import zhTranslations from '../../locales/zh/translation.json';

// Define the translations
const translations = {
  en: enTranslations,
  zh: zhTranslations,
};

// Define context types
type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

// Helper function to get URL parameters
const getUrlParam = (param: string): string | null => {
  if (typeof window === 'undefined') return null;

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Create context
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: key => key,
});

// Create provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Custom setLanguage function that updates URL
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Update URL query parameter without page reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.pushState({ path: url.toString() }, '', url.toString());
    }
  };

  // Detect language from URL or browser on first load
  useEffect(() => {
    const detectLanguage = (): Language => {
      // First check URL parameter
      const langParam = getUrlParam('lang');
      if (langParam === 'en' || langParam === 'zh') {
        return langParam;
      }

      // If no URL parameter, check browser language
      if (typeof navigator === 'undefined') return 'en';

      const browserLang = navigator.language || (navigator as any).userLanguage;

      // Check if the browser language starts with 'zh'
      if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
        return 'zh';
      }

      return 'en';
    };

    // Set language based on detection
    const detectedLang = detectLanguage();
    setLanguageState(detectedLang);

    // If URL doesn't have lang parameter but we detected a language, add it to URL
    const langParam = getUrlParam('lang');
    if (!langParam && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', detectedLang);
      window.history.replaceState({ path: url.toString() }, '', url.toString());
    }
  }, []);

  // Translation function
  const t = (key: string, defaultValue?: string): string => {
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');

    // Try to get the translation
    let translation: any = translations[language];

    // Use reduce instead of for...of loop
    translation = keys.reduce((obj, k) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return obj[k];
      }
      return null;
    }, translation);

    if (translation === null) {
      return defaultValue || key;
    }

    return typeof translation === 'string' ? translation : defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easier usage
export const useLanguage = () => useContext(LanguageContext);

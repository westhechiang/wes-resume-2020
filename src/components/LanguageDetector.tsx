import * as React from 'react';
import { useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

// Component to detect user's language and set it automatically
export const LanguageDetector: React.FC = () => {
  const { changeLanguage } = useI18next();

  useEffect(() => {
    // Function to detect browser language
    const detectBrowserLanguage = (): string => {
      if (typeof navigator === 'undefined') return 'en';

      const browserLang = navigator.language || (navigator as any).userLanguage;

      // Check if the browser language starts with 'zh'
      if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
        return 'zh';
      }

      return 'en';
    };

    // Set language based on browser language
    const detectedLang = detectBrowserLanguage();

    // Only change if it's a supported language
    if (['en', 'zh'].includes(detectedLang)) {
      changeLanguage(detectedLang);
    }
  }, [changeLanguage]);

  // This component doesn't render anything
  return null;
};

export default LanguageDetector;

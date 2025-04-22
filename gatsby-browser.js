/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

// Wrap the root element with LanguageProvider to ensure language detection on initial load
export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};

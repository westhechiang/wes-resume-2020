import * as React from 'react';

import { CSSReset, Flex, BoxProps } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';
import { Blurb } from './Blurb';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageProvider } from '../context/LanguageContext';

// Import the image directly to ensure it's processed by Gatsby
import backgroundImageFile from '../images/bg.png';

// Ensure static assets are loaded without query parameters
const getStaticAssetUrl = (path: string): string => {
  // Remove any existing query parameters and ensure path starts with /
  const cleanPath = path.split('?')[0];
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
};

// Background image path - use the imported image path
const backgroundImage = getStaticAssetUrl(backgroundImageFile);

export const Layout: React.FC<BoxProps> = ({ children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <LanguageProvider>
      <LanguageSwitcher />
      <Flex
        width="100%"
        pt={['100%']}
        position="fixed"
        bottom={0}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg="beige"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundRepeat="repeat"
        backgroundPosition="center"
        willChange="transform"
        opacity={0.9}
      />
      <Flex
        bg="beige"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        {...rest}
      >
        <Flex>{children}</Flex>
        <Blurb />
      </Flex>
    </LanguageProvider>
  </ThemeProvider>
);

import * as React from 'react';

import { CSSReset, Flex, BoxProps } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';
import { Blurb } from './Blurb';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageProvider } from '../context/LanguageContext';

// Correct path for Gatsby static assets
const backgroundImage = '/images/bg.png';

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

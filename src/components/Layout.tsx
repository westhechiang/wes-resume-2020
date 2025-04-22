import * as React from 'react';

import { ThemeProvider, Flex, BoxProps } from '@chakra-ui/core';
import { theme } from '../theme';
import { Blurb } from './Blurb';
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageProvider } from '../context/LanguageContext';

// Use the existing background image
const backgroundImage = '/images/bg.png';

export const Layout = ({ children }: BoxProps) => (
  <ThemeProvider theme={theme}>
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
      >
        <Flex>{children}</Flex>
        <Blurb />
      </Flex>
    </LanguageProvider>
  </ThemeProvider>
);

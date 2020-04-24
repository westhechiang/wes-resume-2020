import * as React from 'react';

import { ThemeProvider, Flex, BoxProps } from '@chakra-ui/core';
import { theme } from '../theme';
import { Blurb } from './Blurb';
import image from '../images/lawyers-bg.png';

export const Layout = ({ children }: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Flex
      width="100%"
      pt={['calc(918/2500 * 100%)']}
      position="fixed"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="beige"
      backgroundImage={`url(${image})`}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
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
  </ThemeProvider>
);

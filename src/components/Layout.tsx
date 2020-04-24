import * as React from 'react';

import { ThemeProvider, Flex, BoxProps } from '@chakra-ui/core';
import { theme } from '../theme';
import { Blurb } from './Blurb';

export const Layout = ({ children }: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Flex
      width="100%"
      pt={['100%']}
      position="fixed"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="beige"
      backgroundImage="url(https://images.unsplash.com/photo-1534030645-3ecc6e3c929d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80)"
      backgroundSize="cover"
      backgroundRepeat="repeat"
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

import { Flex, FlexProps } from '@chakra-ui/core';
import * as React from 'react';

export const Paper = ({ children }: FlexProps) => (
  <Flex
    bg="white"
    boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 14px;"
    flexDirection="column"
    width={['100%', '100%', '8.5 in']}
    maxWidth={['100%', '100%', 794]}
    height={['100%']}
    minHeight="11in"
    position="relative"
    shadow="md"
    my={[0, 0, 0]}
  >
    {children}
  </Flex>
);

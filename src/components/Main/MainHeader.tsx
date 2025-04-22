import * as React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';

import { Icon } from '../Icon/Icon';

interface MainHeaderProps {
  icon: string;
  text: string;
}

export const MainHeader = ({ icon, text }: MainHeaderProps) => (
  <Flex width="100%" alignItems="flex-start" pb={2}>
    <Box pr={2}>
      <Flex
        justifyContent="center"
        alignItems="center"
        border="1px solid"
        borderColor="navy.500"
        borderRadius="50%"
        width="40px"
        height="40px"
        bg="navy.50"
      >
        <Icon
          border={1}
          borderColor="navy.500"
          height="30px"
          name={icon}
          width="30px"
          color="navy.700"
        />
      </Flex>
    </Box>
    <Box width="100%" borderBottom="2px solid" borderColor="red.500" py={1}>
      <Heading m={0} color="navy.700" fontSize="3xl" fontWeight="bold">
        {text}
      </Heading>
    </Box>
  </Flex>
);

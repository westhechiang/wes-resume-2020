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
        borderColor="border"
        borderRadius="50%"
        width="40px"
        height="40px"
      >
        <Icon
          border={1}
          borderColor="border"
          height="30px"
          name={icon}
          width="30px"
        />
      </Flex>
    </Box>
    <Box width="100%" borderBottom="1px solid" borderColor="border" py={1}>
      <Heading m={0} color="heading" fontSize="3xl">
        {text}
      </Heading>
    </Box>
  </Flex>
);

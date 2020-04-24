import * as React from 'react';
import { Avatar, Flex } from '@chakra-ui/core';

import * as Image from './assets/me.jpg';

export const ProfileImage = () => (
  <Flex justifyContent={['center']}>
    <Flex borderRadius="50%" shadow="sm">
      <Avatar
        width={125}
        height={125}
        src={Image}
        border="2px solid"
        borderColor="border"
      />
    </Flex>
  </Flex>
);

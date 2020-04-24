import { Box } from '@chakra-ui/core';
import * as React from 'react';
import { Profile } from './Profile';

export const Sidebar = () => (
  <Box width={['100%', 250, 350]} p={4}>
    <Profile />
  </Box>
);

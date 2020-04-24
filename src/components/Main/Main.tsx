import * as React from 'react';
import { Flex } from '@chakra-ui/core';
import { WorkExperience } from './WorkExperience';

export const Main = () => (
  <Flex
    width="100%"
    height="100%"
    flexDirection="column"
    borderLeft="1px dashed"
    borderColor="border"
    py={4}
  >
    <WorkExperience />
  </Flex>
);

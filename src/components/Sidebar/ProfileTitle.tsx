import * as React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export interface ProfileTitleProps {
  title: string;
}

export const ProfileTitle = ({ title }: ProfileTitleProps) => (
  <Flex width="100%" flexDirection="column" alignItems="center" mb={4}>
    <Text
      fontFamily="heading"
      textAlign="center"
      fontSize="xl"
      lineHeight={1}
      fontWeight={600}
      color="body"
      textTransform="capitalize"
    >
      {title}
    </Text>
  </Flex>
);

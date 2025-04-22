import { Flex, Text } from '@chakra-ui/core';

import * as React from 'react';

export interface ProfileNameProps {
  nickName: string;
  lastName: string;
  chineseName?: string;
}

export const ProfileName = ({
  nickName,
  lastName,
  chineseName,
}: ProfileNameProps) => (
  <Flex width="100%" flexDirection="column" alignItems="center" py={4}>
    <Text
      fontFamily="heading"
      fontSize="3xl"
      color="heading"
      fontWeight="bold"
      textTransform="uppercase"
      lineHeight={1}
    >
      {nickName}
    </Text>
    <Text
      lineHeight={1}
      color="heading"
      fontFamily="heading"
      fontSize="lg"
      textTransform="uppercase"
    >
      {lastName}
    </Text>
    {chineseName && (
      <Text
        lineHeight={1.5}
        color="heading"
        fontFamily="heading"
        fontSize="lg"
        mt={2}
      >
        {chineseName}
      </Text>
    )}
  </Flex>
);

ProfileName.defaultProps = {
  chineseName: '',
};

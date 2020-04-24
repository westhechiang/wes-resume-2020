import * as React from 'react';
import { Flex, Text, Box, Heading } from '@chakra-ui/core';

export interface ProfileSummaryProps {
  highlight: string;
  details: string[];
}

export const ProfileSummary = ({ highlight, details }: ProfileSummaryProps) => (
  <Flex
    flexDirection="column"
    alignItems={['flex-start', 'flex-start', 'flex-start']}
    width="100%"
  >
    <Text
      m={0}
      mb={3}
      width="100%"
      textAlign={['left', 'center', 'left']}
      fontStyle="italic"
      fontFamily="body"
      fontSize={3}
      fontWeight={200}
      color="white"
    >
      {highlight}
    </Text>
    <Heading fontSize="md" color="body" m={0} mb={1}>
      I am:
    </Heading>
    {details.map((detail, index, arr) => {
      return (
        <Flex
          key={detail.slice(0, 5)}
          width="100%"
          flexDirection="column"
          flexShrink={0}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            width="100%"
            fontSize="xs"
            fontFamily="body"
            m={0}
            textAlign={['left', 'left', 'left']}
            color="body"
          >
            {detail}
          </Text>
          {!(arr.length - 1 === index) && <Box height="10px" width="100%" />}
        </Flex>
      );
    })}
  </Flex>
);

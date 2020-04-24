import * as React from 'react';
import { Flex, Text } from '@chakra-ui/core';

import { IconLabel } from './IconLabel';
import { Icon } from '../Icon/Icon';

interface WorkExperienceHeaderProps {
  title: string;
  location: string;
  company: string;
  duration: {
    start: string;
    end: string;
  };
}

export const WorkExperienceHeader = ({
  title,
  location,
  company,
  duration,
}: WorkExperienceHeaderProps) => (
  <Flex flexDirection="column" pb={2}>
    <Flex
      alignItems="flex-start"
      justifyContent={['space-between']}
      flexDirection={['column', 'row']}
      width="100%"
    >
      <Flex alignItems="center">
        <Flex
          alignItems={['flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'row']}
          pb={[1, 0]}
        >
          <Text
            fontFamily="heading"
            fontSize="md"
            color="body"
            lineHeight={1}
            fontWeight="bold"
            m={0}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <IconLabel label={`${duration.start} - ${duration.end}`} />
    </Flex>
    <Flex
      alignItems={['flex-start', 'flex-start', 'center']}
      flexDirection={['column', 'column', 'row']}
    >
      <IconLabel label={`${company}, ${location}`} />
    </Flex>
  </Flex>
);

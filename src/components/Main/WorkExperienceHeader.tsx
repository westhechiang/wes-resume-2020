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
  isZh?: boolean;
}

export const WorkExperienceHeader = ({
  title,
  location,
  company,
  duration,
  isZh = false,
}: WorkExperienceHeaderProps) => {
  // Format dates for Chinese if needed
  const formatChineseDates = (start: string, end: string) => {
    if (!isZh) return `${start} - ${end}`;

    // For Chinese dates, format like "2020年6月 - 至今" for "06/2020 - Current"
    const formatDate = (date: string) => {
      if (date.toLowerCase() === 'current') return '至今';

      // Assuming date format is MM/YYYY
      const parts = date.split('/');
      if (parts.length === 2) {
        const [month, year] = parts;
        return `${year}年${month}月`;
      }
      return date;
    };

    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const formattedDuration = formatChineseDates(duration.start, duration.end);

  return (
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
              color="navy.700"
              lineHeight={1}
              fontWeight="bold"
              m={0}
            >
              {title}
            </Text>
          </Flex>
        </Flex>
        <IconLabel label={formattedDuration} />
      </Flex>
      <Flex
        alignItems={['flex-start', 'flex-start', 'center']}
        flexDirection={['column', 'column', 'row']}
      >
        <IconLabel label={`${company}, ${location}`} />
      </Flex>
    </Flex>
  );
};

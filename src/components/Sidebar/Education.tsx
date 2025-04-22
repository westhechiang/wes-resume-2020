import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Heading, Text, Stack } from '@chakra-ui/core';
import { useLanguage } from '../../context/LanguageContext';

export const Education = () => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  const {
    dataJson: { education },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        education {
          school
          duration
          location
          degree
          zh_degree
        }
      }
    }
  `);

  const educationTitle = t('education.title', 'Education');
  const schoolLabel = t('education.school', 'School');
  const durationLabel = t('education.duration', 'Duration');
  const locationLabel = t('education.location', 'Location');
  const degreeLabel = t('education.degree', 'Degree');

  // Format Chinese dates if in Chinese mode
  const formatChineseDuration = duration => {
    if (!isZh) return duration;

    // Split the duration (e.g., "2008 - 2011")
    const parts = duration.split('-').map(part => part.trim());
    if (parts.length !== 2) return duration;

    return `${parts[0]}年 - ${parts[1]}年`;
  };

  return (
    <Box>
      <Heading
        fontSize="md"
        color="navy.700"
        borderBottom="2px solid"
        borderColor="red.500"
        pb={1}
        mb={3}
        textTransform="uppercase"
      >
        {educationTitle}
      </Heading>
      <Stack mt={2} direction="column" spacing={2}>
        <Box pb={[2, 2, 0]}>
          <Heading
            fontSize="xs"
            color="navy.600"
            textTransform="capitalize"
            lineHeight={1}
          >
            {schoolLabel}
          </Heading>
          <Text color="gray.700" fontSize="sm" lineHeight={1}>
            {education.school}
          </Text>
        </Box>

        <Box pb={[2, 2, 0]}>
          <Heading
            fontSize="xs"
            color="navy.600"
            textTransform="capitalize"
            lineHeight={1}
          >
            {durationLabel}
          </Heading>
          <Text color="gray.700" fontSize="sm" lineHeight={1}>
            {formatChineseDuration(education.duration)}
          </Text>
        </Box>

        <Box pb={[2, 2, 0]}>
          <Heading
            fontSize="xs"
            color="navy.600"
            textTransform="capitalize"
            lineHeight={1}
          >
            {locationLabel}
          </Heading>
          <Text color="gray.700" fontSize="sm" lineHeight={1}>
            {education.location}
          </Text>
        </Box>

        <Box pb={[2, 2, 0]}>
          <Heading
            fontSize="xs"
            color="navy.600"
            textTransform="capitalize"
            lineHeight={1}
          >
            {degreeLabel}
          </Heading>
          <Text color="gray.700" fontSize="sm" lineHeight={1}>
            {isZh && education.zh_degree
              ? education.zh_degree
              : education.degree}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

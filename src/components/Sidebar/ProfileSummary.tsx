import * as React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/core';
import { useLanguage } from '../../context/LanguageContext';

export interface SummaryProps {
  highlight: string;
  zh_highlight?: string;
  details: string[];
  zh_details?: string[];
}

export const ProfileSummary = ({
  highlight,
  zh_highlight,
  details,
  zh_details,
}: SummaryProps) => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  // Use translated content or fallback to default
  const summaryTitle = t('profile.summary.title', 'Summary');

  // Use Chinese highlight if available and in Chinese mode, otherwise use translation from i18n file
  const summaryHighlight =
    isZh && zh_highlight
      ? zh_highlight
      : t('profile.summary.highlight', highlight);

  const detailsToShow = isZh && zh_details ? zh_details : details;
  const iAmText = isZh ? '我是:' : 'I am:';

  return (
    <Box>
      <Heading
        as="h3"
        fontSize="md"
        textTransform="uppercase"
        fontFamily="heading"
        fontWeight="bold"
        color="navy.700"
        letterSpacing="0.05em"
        mb={2}
        borderBottom="2px solid"
        borderColor="red.500"
        pb={1}
      >
        {summaryTitle}
      </Heading>
      <Text fontWeight="bold" mb={4} color="gray.800" fontSize="sm">
        {summaryHighlight}
      </Text>

      <Text fontWeight="bold" fontSize="xs" color="navy.600" mb={2}>
        {iAmText}
      </Text>

      <Stack spacing={2} pl={2}>
        {detailsToShow.map(detail => (
          <Text
            key={`detail-${detail.substring(0, 15).replace(/\s+/g, '-')}`}
            fontSize="xs"
            color="gray.800"
          >
            {detail}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

// Add default props
ProfileSummary.defaultProps = {
  zh_highlight: undefined,
  zh_details: undefined,
};

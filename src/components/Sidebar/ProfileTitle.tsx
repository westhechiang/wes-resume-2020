import { Text } from '@chakra-ui/core';
import * as React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface ProfileTitleProps {
  title: string;
  zh_title?: string;
}

export const ProfileTitle = ({ title, zh_title }: ProfileTitleProps) => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  // Use Chinese title if available and in Chinese mode, otherwise use translated title from i18n, or fallback to provided title
  const displayTitle = isZh && zh_title ? zh_title : t('profile.title', title);

  return (
    <Text
      color="navy.700"
      fontFamily="heading"
      fontWeight="bold"
      fontSize="xl"
      textAlign="center"
      py={2}
      width="100%"
    >
      {displayTitle}
    </Text>
  );
};

ProfileTitle.defaultProps = {
  zh_title: undefined,
};

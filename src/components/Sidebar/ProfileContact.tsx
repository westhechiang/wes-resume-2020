import * as React from 'react';
import { Flex, Text, Link } from '@chakra-ui/core';
import { useLanguage } from '../../context/LanguageContext';

export interface ProfileContactProps {
  contact: {
    email: string;
    github: string;
    linkedIn: string;
    city: string;
    zh_city?: string;
  };
}

export const ProfileContact = ({ contact }: ProfileContactProps) => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  // Process contact entries for display
  const displayContact = Object.entries(contact).filter(([key]) => {
    // Don't show zh_* fields directly
    return !key.startsWith('zh_');
  });

  return (
    <Flex
      flexDirection="column"
      width={[200, 200, '100%']}
      alignItems="center"
      py={3}
    >
      {displayContact.map(([key, value]) => {
        // Get label translation for the field
        const label = t(`profile.contact.${key}`, key);

        // For city field, use zh_city if in Chinese mode and available
        const displayValue =
          key === 'city' && isZh && contact.zh_city ? contact.zh_city : value;

        return (
          <Flex
            key={key}
            width={['100%']}
            pb={2}
            justifyContent={['flex-start']}
            alignItems={['center', 'flex-start']}
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text
                fontFamily="heading"
                fontSize="xs"
                fontWeight="bold"
                color="navy.600"
                lineHeight={1}
                textTransform="capitalize"
              >
                {label}
              </Text>
              <Text
                fontFamily="body"
                fontSize="sm"
                color="gray.700"
                lineHeight={1}
              >
                {displayValue.indexOf &&
                displayValue.indexOf('https://') !== -1 ? (
                  <Link
                    href={displayValue}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayValue}
                  </Link>
                ) : (
                  displayValue
                )}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

import * as React from 'react';
import { Button, Flex, Text } from '@chakra-ui/core';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const languages = ['en', 'zh'];

  return (
    <Flex
      position="fixed"
      top="1rem"
      right="1rem"
      zIndex={10}
      alignItems="center"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={2}
    >
      {languages.map(lng => (
        <Button
          key={lng}
          onClick={() => setLanguage(lng as 'en' | 'zh')}
          variant={language === lng ? 'solid' : 'outline'}
          bg={language === lng ? '#FF0300' : 'transparent'}
          _hover={{
            bg: language === lng ? '#FF0300' : 'gray.50',
          }}
          borderColor={language === lng ? '#FF0300' : 'gray.200'}
          size="sm"
          mr={lng !== languages[languages.length - 1] ? 2 : 0}
        >
          <Text
            fontFamily="heading"
            fontSize="sm"
            color={language === lng ? 'white' : 'navy.700'}
          >
            {t(`language.${lng === 'en' ? 'english' : 'chinese'}`)}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};

export default LanguageSwitcher;

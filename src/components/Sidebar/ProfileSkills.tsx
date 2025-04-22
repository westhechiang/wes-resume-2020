import * as React from 'react';
import { Flex, Text, Box, Heading } from '@chakra-ui/core';
import { useLanguage } from '../../context/LanguageContext';

export interface ProfileSkillsProps {
  skills: {
    languages: string[];
    zh_languages?: string[];
    database: string[];
    zh_database?: string[];
    technologies: string[];
    zh_technologies?: string[];
    hobbies: string[];
    zh_hobbies?: string[];
  };
}

export const ProfileSkills = ({ skills }: ProfileSkillsProps) => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  // Get only the categories we want to display (not the zh_ prefixed ones)
  const categories = Object.keys(skills).filter(key => !key.startsWith('zh_'));

  return (
    <Flex width="100%" mt={4} flexDirection="column" alignItems="center">
      {categories.map((category: string) => {
        // Get translated category name
        const categoryTitle = t(`profile.skills.${category}`, category);

        // Use Chinese data if available and in Chinese mode
        const zhCategory = `zh_${category}`;
        const skillItems =
          isZh && skills[zhCategory] ? skills[zhCategory] : skills[category];

        return (
          <Flex
            key={category}
            width="100%"
            alignItems={['flex-start', 'center', 'flex-start']}
            flexDirection="column"
          >
            <Heading
              color="navy.700"
              fontSize="md"
              mt={2}
              mb={2}
              textTransform="capitalize"
              borderBottom="1px solid"
              borderColor="red.500"
              pb={1}
              width="100%"
            >
              {categoryTitle}
            </Heading>
            <Flex
              flexWrap="wrap"
              mb={4}
              flexShrink={0}
              alignItems={['flex-start', 'center', 'flex-start']}
            >
              {skillItems.map((item: string) => {
                return (
                  <Box
                    key={String(item)}
                    borderRadius="5px"
                    py="3px"
                    bg="red.500"
                    px={2}
                    mt={1}
                    mr={1}
                  >
                    <Text
                      m={0}
                      fontWeight="bold"
                      fontFamily="body"
                      color="white"
                      fontSize="xs"
                    >
                      {item}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

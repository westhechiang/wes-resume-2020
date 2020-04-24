import * as React from 'react';
import { Flex, Text, Box, Heading } from '@chakra-ui/core';

export interface ProfileSkillsProps {
  skills: {
    languages: string[];
    database: string[];
    technologies: string[];
    hobbies: string[];
  };
}

export const ProfileSkills = ({ skills }: ProfileSkillsProps) => (
  <Flex width="100%" mt={4} flexDirection="column" alignItems="center">
    {Object.keys(skills).map((category: string) => {
      return (
        <Flex
          key={category}
          width="100%"
          alignItems={['flex-start', 'center', 'flex-start']}
          flexDirection="column"
        >
          <Heading
            color="body"
            fontSize="md"
            mt={2}
            m={0}
            textTransform="capitalize"
          >
            {`${category} `}
          </Heading>
          <Flex
            key={category}
            flexWrap="wrap"
            mb={4}
            flexShrink={0}
            alignItems={['flex-start', 'center', 'flex-start']}
          >
            {skills[category].map((item: string[]) => {
              return (
                <Box
                  key={String(item)}
                  borderRadius="5px"
                  py="3px"
                  bg="accent"
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

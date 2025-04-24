import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Text, Flex } from '@chakra-ui/core';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';
import { useLanguage } from '../../context/LanguageContext';

interface Experience {
  id: string;
  title: string;
  zh_title?: string;
  location: string;
  company: string;
  duration: {
    start: string;
    end: string;
  };
  accomplishments: string[];
  zh_accomplishments?: string[];
}

export const WorkExperience = () => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  const {
    dataJson: { experience: experiences },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        experience {
          id
          title
          zh_title
          location
          company
          duration {
            start
            end
          }
          accomplishments
          zh_accomplishments
        }
      }
    }
  `);

  const experienceTitle = t('experience.title', 'Work Experience');

  return (
    <Flex width="100%" height="100%" flexDirection="column" px={3} pt={3}>
      <MainHeader icon="work" text={experienceTitle} />
      {experiences.map((experience: Experience, index: number) => {
        const title =
          isZh && experience.zh_title ? experience.zh_title : experience.title;
        const accomplishments =
          isZh && experience.zh_accomplishments
            ? experience.zh_accomplishments
            : experience.accomplishments;

        return (
          <Flex
            key={experience.id}
            flexDirection="column"
            pb={experiences.length - 1 === index ? 0 : 3}
          >
            <WorkExperienceHeader
              title={title}
              location={experience.location}
              company={experience.company}
              duration={experience.duration}
              isZh={isZh}
            />
            <Flex flexDirection="column">
              {accomplishments.map((accomplishment: string) => (
                <Flex
                  key={`${experience.id}-${accomplishment}`}
                  alignItems="center"
                  justifyContent="flex-start"
                  borderLeft="3px solid"
                  borderColor="red.500"
                  mb={2}
                >
                  <Text
                    fontFamily="body"
                    fontSize="xs"
                    m={0}
                    pl={1}
                    color="gray.700"
                  >
                    {accomplishment}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

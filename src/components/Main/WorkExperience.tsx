import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Text, Flex } from '@chakra-ui/core';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';

export const WorkExperience = () => {
  const {
    dataJson: { experience: experiences },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        experience {
          id
          title
          location
          company
          duration {
            start
            end
          }
          accomplishments
        }
      }
    }
  `);

  return (
    <Flex width="100%" height="100%" flexDirection="column" px={3} pt={3}>
      <MainHeader icon="work" text="Work Experience" />
      {experiences.map((experience, index) => {
        return (
          <Flex
            key={experience.id}
            flexDirection="column"
            pb={experiences.length - 1 === index ? 0 : 3}
          >
            <WorkExperienceHeader
              title={experience.title}
              location={experience.location}
              company={experience.company}
              duration={experience.duration}
            />
            <Flex flexDirection="column">
              {experience.accomplishments.map(accomplishment => {
                return (
                  <Flex
                    key={accomplishment}
                    alignItems="center"
                    justifyContent="flex-start"
                    borderLeft="3px solid"
                    borderColor="accent"
                    mb={2}
                  >
                    <Text
                      fontFamily="body"
                      fontSize="xs"
                      m={0}
                      pl={1}
                      color="body"
                    >
                      {accomplishment}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

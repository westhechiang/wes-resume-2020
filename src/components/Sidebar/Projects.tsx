import * as React from 'react';
import { Box, Heading, Text, Stack, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  name: string;
  zh_name?: string;
  url?: string;
  notes: string;
  zh_notes?: string;
}

export const Projects = () => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  const {
    dataJson: { projects },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        projects {
          name
          zh_name
          url
          notes
          zh_notes
        }
      }
    }
  `);

  const projectsTitle = t('projects.title', 'Side Projects');
  const nameLabel = t('projects.name', 'Name');
  const urlLabel = t('projects.url', 'Url');
  const notesLabel = t('projects.notes', 'Notes');

  return (
    <Box mb={4}>
      <Heading
        fontSize="md"
        color="navy.700"
        borderBottom="2px solid"
        borderColor="red.500"
        pb={1}
        mb={3}
        textTransform="uppercase"
      >
        {projectsTitle}
      </Heading>
      <Stack mt={2} direction="column" spacing={4}>
        {projects.map((project: Project) => {
          // Use Chinese name if available and in Chinese mode
          const displayName =
            isZh && project.zh_name ? project.zh_name : project.name;

          return (
            <Stack key={project.name} spacing={2}>
              <Box>
                <Heading color="navy.600" fontSize="xs" lineHeight={1}>
                  {nameLabel}
                </Heading>
                <Text
                  fontSize="sm"
                  color="gray.700"
                  lineHeight={1}
                  fontWeight="bold"
                >
                  {displayName}
                </Text>
              </Box>
              {project.url && (
                <Box>
                  <Heading color="navy.600" fontSize="xs" lineHeight={1}>
                    {urlLabel}
                  </Heading>
                  <Link
                    href={project.url}
                    target="_blank"
                    fontFamily="body"
                    fontSize="sm"
                    color="blue.500"
                    lineHeight={1}
                  >
                    {project.url}
                  </Link>
                </Box>
              )}
              <Box>
                <Heading color="navy.600" fontSize="xs" lineHeight={1}>
                  {notesLabel}
                </Heading>
                <Text fontSize="xs" color="gray.700">
                  {isZh && project.zh_notes ? project.zh_notes : project.notes}
                </Text>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

import * as React from 'react';
import { Box, Heading, Text, Stack, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

export const Projects = () => {
  const {
    dataJson: { projects },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        projects {
          name
          url
          notes
        }
      }
    }
  `);

  return (
    <Box mb={4}>
      <Heading fontSize="md" color="heading">
        Side Project
      </Heading>
      <Stack mt={2} direction="column" spacing={2}>
        {projects.map(project => (
          <Stack key={project.name} spacing={2}>
            <Box>
              <Heading color="heading" fontSize="xs" lineHeight={1}>
                Name
              </Heading>
              <Text fontSize="sm" color="body" lineHeight={1}>
                {project.name}
              </Text>
            </Box>
            <Box>
              <Heading color="heading" fontSize="xs" lineHeight={1}>
                Url
              </Heading>
              <Link
                href={project.url}
                target="_blank"
                fontFamily="body"
                fontSize="sm"
                color="body"
                lineHeight={1}
              >
                {project.url}
              </Link>
            </Box>
            <Box>
              <Heading color="heading" fontSize="xs" lineHeight={1}>
                Notes
              </Heading>
              <Text fontSize="xs" color="body">
                {project.notes}
              </Text>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

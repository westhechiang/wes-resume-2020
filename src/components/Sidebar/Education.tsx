import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Heading, Text, Stack } from '@chakra-ui/core';

export const Education = () => {
  const {
    dataJson: { education },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        education {
          school
          duration
          location
          degree
        }
      }
    }
  `);

  return (
    <Box>
      <Heading fontSize="md" color="heading">
        Education
      </Heading>
      <Stack mt={2} direction="column" spacing={2}>
        {Object.entries(education).map(entry => {
          return (
            <Box pb={[2, 2, 0]} key={entry[0]}>
              <Heading
                fontSize="xs"
                color="heading"
                textTransform="capitalize"
                lineHeight={1}
              >
                {entry[0]}
              </Heading>
              <Text color="body" fontSize="sm" lineHeight={1}>
                {entry[1]}
              </Text>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

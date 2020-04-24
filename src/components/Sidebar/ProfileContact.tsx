import * as React from 'react';
import { Flex, Text, Link } from '@chakra-ui/core';

export interface ProfileContactProps {
  contact: {
    email: string;
    github: string;
    linkedIn: string;
    city: string;
  };
}

export const ProfileContact = ({ contact }: ProfileContactProps) => (
  <Flex flexDirection="column" width={[200, 200, '100%']} alignItems="center">
    {Object.entries(contact).map((entry, index) => {
      return (
        <Flex
          key={entry[0]}
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
              color="body"
              lineHeight={1}
              textTransform="capitalize"
            >
              {entry[0]}
            </Text>
            <Text fontFamily="body" fontSize="sm" color="body" lineHeight={1}>
              {entry[1].indexOf('https://') !== -1 ? (
                <Link
                  href={entry[1]}
                  color="body"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry[1]}
                </Link>
              ) : (
                entry[1]
              )}
            </Text>
          </Flex>
        </Flex>
      );
    })}
  </Flex>
);

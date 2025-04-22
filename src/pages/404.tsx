import React from 'react';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { Flex, Heading, Text } from '@chakra-ui/core';
import { useLanguage } from '../context/LanguageContext';

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={10}
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={4}>
          404 - {t('notFound.title', 'Page Not Found')}
        </Heading>
        <Text>
          {t(
            'notFound.message',
            "The page you're looking for doesn't exist or has been moved.",
          )}
        </Text>
      </Flex>
    </Layout>
  );
};

export default NotFoundPage;

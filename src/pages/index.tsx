import React from 'react';
import { Flex } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { Paper } from '../components/Paper';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Main } from '../components/Main/Main';
import { useLanguage } from '../context/LanguageContext';

const IndexPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title={t('meta.title', 'Resume')}
        description={t(
          'meta.description',
          "Wesley Chiang's professional resume",
        )}
      />
      <Paper>
        <Flex alignItems="flex-start" flexDirection={['column', 'row', 'row']}>
          <Sidebar />
          <Main />
        </Flex>
      </Paper>
    </Layout>
  );
};

export default IndexPage;

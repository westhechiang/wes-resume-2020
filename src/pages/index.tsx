import React from 'react';

import { Flex } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { Paper } from '../components/Paper';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Main } from '../components/Main/Main';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Paper>
      <Flex alignItems="flex-start" flexDirection={['column', 'row', 'row']}>
        <Sidebar />
        <Main />
      </Flex>
    </Paper>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { ApolloProvider } from '../components/ApolloProvider';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider>{element}</ApolloProvider>
);

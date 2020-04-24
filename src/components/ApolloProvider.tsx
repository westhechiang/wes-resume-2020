import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

export const ApolloProvider = props => {
  const client = new ApolloClient({
    uri: `${process.env.GATSBY_MGU_API_URL}`,
    fetch,
  });

  return <Provider client={client} {...props} />;
};

import { ApolloClient, InMemoryCache, ApolloProvider,TypePolicies } from '@apollo/client';

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming]
        }
      }
    }
  }
}

const client = new ApolloClient({
  uri: 'https://xinhui.stepzen.net/api/linkedIn/__graphql',
  headers: {'Authorization':'apikey xinhui::stepzen.io+1000::916090f09160885a22eace8f5d1111fd71f7f5bb6b6ede68a1184225e9a795e2'},
  cache: new InMemoryCache({ typePolicies}),
});

export default client;
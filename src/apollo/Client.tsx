import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://xinhui.stepzen.net/api/linkedIn/__graphql',
  headers: {'Authorization':'apikey xinhui::stepzen.io+1000::916090f09160885a22eace8f5d1111fd71f7f5bb6b6ede68a1184225e9a795e2'},
  cache: new InMemoryCache(),
});

export default client;
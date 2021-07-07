import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://swapi-gpl.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

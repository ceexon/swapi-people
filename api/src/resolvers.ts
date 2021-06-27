import { IResolvers } from 'graphql-tools'
import axios from 'axios';
import { ApolloError } from 'apollo-server-errors';

import { ServerData, People, Planet, Person } from './types';

const URL = 'https://swapi.dev/api/people/'

const resolvers: IResolvers = {
  Query: {
    people: async (_: void, { page, url }) => await axios.get<ServerData>(
      url ? url : `${URL}${page ? '?page=' + page : ''}`,
      {
        transformResponse: (res: string): People => JSON.parse(res)
      }
    )
      .then(response => response.data)
      .catch(error => new ApolloError(error)),
  },
  Person: {
    homeworld: async (person) => await axios.get<Person>(
      person.homeworld,
      { transformResponse: (res: string): Planet => JSON.parse(res).name }
    )
      .then(response => response.data)
      .catch(error => new ApolloError(error))
  }
};
export default resolvers;
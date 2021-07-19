const fetch = require('node-fetch');

/**
 * A resolver is a function that's responsible for populating the data for a single field in a schema.
 * These resolvers will populate relevant fields in the peoples schema from https://swapi.dev/api
 */
export const resolvers: any = {
  Query: {    
    getPeople: async (parent: any, { page }: any, { dataSources }, info: any) => {
      return await dataSources.starWarsAPI.getPeople(page);
    },

    getPerson: async (parent: any, { name }: any, { dataSources }, info: any) => {
      return await dataSources.starWarsAPI.getPerson(name);
    }
  },

  Person: {
    homeworld: async (person: any) => {
      const response = await fetch(person.homeworld);
      return response.json();
    }
  }
};

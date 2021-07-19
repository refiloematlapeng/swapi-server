const { RESTDataSource } = require('apollo-datasource-rest');

export class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SWAPI_BASE_URL || 'https://swapi.dev/api';
  }

  getPeople = async (page: number) => await this.get(`people?page=${page}`);
  getPerson = async (name: string) => await this.get(`people?search=${name}`);
}

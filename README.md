# Apollo GraphQL Server 

This project creates an Apollo GraphQL API that wraps the Star Wars API https://swapi.dev

> This Application is built with Typescript and NodeJS

#
### Tools Used
- GraphQL
- Apollo Server
- Apollo Datasource Rest
#
## Project Setup

To launch the server at https://localhost:5000 , execute the following in the terminal:

- yarn install
- yarn dev
#

## Live view

https://0z5gd.sse.codesandbox.io/

## Project Instructions

1. You should develop an Apollo GraphQL API
2. Your GraphQL API should wrap the Star Wars API (https://swapi.dev/)
3. Your GraphQL API should have a Query type that resolves all People
(https://swapi.dev/api/people/), but only the Person's details (name, height,
mass, gender, homeworld).
4. The People Query should cater for pagination, you will notice the next
property in the response. When given a page number, the respective People
page should be returned (i.e. https://swapi.dev/api/people/?page=2)
5. Your GraphQL API should have a Query type that resolves (searches for) a
particular Person (People) given their name (i.e. https://swapi.dev/api/people/?
search=Anakin Skywalker)

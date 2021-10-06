const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String): Movie!
  }

  enum Nationality {
    CANADA
    FRANCE
    ARGENTINA
    PORTUGAL
    ENGLAND
    USA
  }
`

module.exports = { typeDefs }

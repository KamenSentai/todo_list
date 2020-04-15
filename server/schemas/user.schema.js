import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    tasks: [Task!]!
  }

  type Token {
    token: String!
  }

  extend type Query {
    user(id: ID!): User!
    signin(name: String!, password: String!): Token!
  }

  extend type Mutation {
    createUser(name: String!, password: String!): User!
  }
`;

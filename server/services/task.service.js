import { gql } from 'apollo-server';

export default gql`
  type Task {
    id: ID!
    author: User!
    content: String!
    expiry: String!
    priority: String!
    attained: Boolean!
  }

  extend type Query {
    task(id: ID!): Task!
    tasks: [Task!]!
  }

  extend type Mutation {
    createTask(content: String!, expiry: String!, priority: String!): Task!
    updateTask(id: ID!, content: String, expiry: String, priority: String, attained: Boolean): ID!
    deleteTask(id: ID!): ID!
  }
`;

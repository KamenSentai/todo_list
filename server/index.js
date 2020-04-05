import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import controllers from './controllers';
import models from './models';
import services from './services';

const app = express();
app.use(cors());
config();

const { DATABASE_URL, JWT_SECRET, SERVER_PORT } = process.env;

const checkToken = async (token) => {
  if (token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }

  return null;
};

const server = new ApolloServer({
  typeDefs: services,
  resolvers: controllers,
  context: async ({ req }) => {
    if (req) {
      const check = await checkToken(req.headers.token);

      return {
        check,
        models,
      };
    }

    return null;
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(SERVER_PORT, () => {
  mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
});

import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

config();

const { JWT_LIFESPAN, JWT_SECRET } = process.env;

export default {
  User: {
    tasks: async ({ id }, _, { models: { taskModel } }) => {
      const tasks = await taskModel.find({ author: id }).exec();
      return tasks;
    },
  },
  Query: {
    user: async (_, { id }, { models: { userModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
    signin: async (_, { name, password }, { models: { userModel } }) => {
      const user = await userModel.findOne({ name }).exec();
      if (!user) throw new AuthenticationError('Invalid credentials');

      const matchPassword = bcrypt.compareSync(password, user.password);
      if (!matchPassword) throw new AuthenticationError('Invalid credentials');

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_LIFESPAN });

      return {
        token,
      };
    },
  },
  Mutation: {
    createUser: async (_, { name, password }, { models: { userModel } }) => {
      const user = await userModel.create({ name, password: bcrypt.hashSync(password, 12) });
      return user;
    },
  },
};

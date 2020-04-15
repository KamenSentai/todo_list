import { AuthenticationError } from 'apollo-server';

export default {
  Task: {
    author: async ({ author }, _, { models: { userModel } }) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
  Query: {
    task: async (_, { id }, { models: { taskModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      const task = await taskModel.findById({ _id: id }).exec();
      return task;
    },
    tasks: async (_, __, { models: { taskModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      const tasks = await taskModel.find({ author: check.id }).exec();
      return tasks;
    },
  },
  Mutation: {
    createTask: async (_, { content, expiry, priority }, { models: { taskModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      const task = await taskModel.create({
        author: check.id,
        content,
        expiry,
        priority,
      });
      return task;
    },
    updateTask: async (_, {
      id,
      content,
      expiry,
      priority,
      attained,
    }, { models: { taskModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      const data = Object
        .entries({
          content,
          expiry,
          priority,
          attained,
        })
        .reduce((prev, [key, value]) => ({
          ...prev,
          ...![null, undefined].includes(value) && { [key]: value },
        }), {});
      await taskModel.updateOne({ _id: id }, data);
      return id;
    },
    deleteTask: async (_, { id }, { models: { taskModel }, check }) => {
      if (!check) throw new AuthenticationError('You are not authenticated');
      await taskModel.deleteOne({ _id: id }).exec();
      return id;
    },
  },
};

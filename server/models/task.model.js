import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  content: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    required: true,
  },
  attained: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('task', schema);

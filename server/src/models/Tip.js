const { Schema, model } = require('mongoose');

const tipSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required',
  },
  message: {
    type: String,
    required: 'Message property of Task is required',
  },
  shown: {
    type: Boolean,
    default: false,
  },
});

const Task = model('Tip', tipSchema);

module.exports = Task;

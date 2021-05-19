const { Schema, model } = require('mongoose');

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const LogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    ratting: {
      type: Number,
      min: [null || 1, 'Must be min 1 or null'],
      max: [5, 'Must be ratting min 1 max 5'],
      default: null,
    },
    image: String,
    location: pointSchema,
    visitDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const LogEntry = model('LogEntry', LogSchema);
module.exports = LogEntry;

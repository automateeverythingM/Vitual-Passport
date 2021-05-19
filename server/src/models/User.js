const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      minLength: [5, 'Username must be at least 5 characters'],
      maxLength: [20, 'Username must be at most 20 characters'],
    },
    email: {
      type: String,
      require: true,
      // validate: {
      //   // validator: (email) => new Promise((resolve, reject) => {}),
      //   message: 'Email validation failed',
      // },
      unique: true,
    },
    isNewUser: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;

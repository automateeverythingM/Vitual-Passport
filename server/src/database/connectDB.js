const mongoose = require('mongoose');

const connectDB = async (callback) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  mongoose.connection.once('open', () => {
    callback();
  });
};

module.exports = connectDB;

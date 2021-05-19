const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware');
const connectDB = require('./database/connectDB');
const logsRouter = require('./api/logs');
const tipRouter = require('./api/tips');

const app = express();
// middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: process.env.CORS }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api/logs', logsRouter);
app.use('/tips', tipRouter);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '👾' : error.stack,
  });
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3001;

connectDB(
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`server listening on port ${port}`))
);

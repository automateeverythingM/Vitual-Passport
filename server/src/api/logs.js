const express = require('express');
const LogEntry = require('../models/LogEntry');

const logsRouter = express.Router();

logsRouter.get('/', async (req, res, next) => {
  try {
    const logs = await LogEntry.find();
    // eslint-disable-next-line no-console
    res.json(logs);
  } catch (error) {
    next(error);
  }
});

logsRouter.post('/', async (req, res, next) => {
  try {
    const newLog = new LogEntry({
      location: { type: 'Point', coordinates: req.body.coordinates },
      ...req.body,
    });
    const createdEntry = await newLog.save();

    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.statusCode = 422;
    }
    next(error);
  }
});

logsRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  LogEntry.findByIdAndRemove(id, (err) => {
    if (err) {
      res.statusCode = 404;
      next(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

logsRouter.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, comments, description, image, ratting, visitDate } = req.body;
  LogEntry.findByIdAndUpdate(
    id,
    {
      title: title,
      comments: comments,
      description: description,
      image: image,
      ratting: ratting,
      visitDate: visitDate,
    },
    (err, doc) => {
      if (err) {
        res.statusCode = 404;
        next(err);
      }
      res.statusCode = 200;
      res.sendStatus(200).end();
    }
  );
});

module.exports = logsRouter;

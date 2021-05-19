const express = require('express');
const tipRouter = express.Router();

const Tips = require('../models/Tip');

tipRouter.post('/', async (req, res, next) => {
  try {
    const { title, message } = req.body;
    const tip = new Tips({ title, message });

    const tipDoc = await tip.save();

    res.status(200);
    res.send({ tip: tipDoc, status: 'success' });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

tipRouter.get('/', async (req, res, next) => {
  Tips.find((error, tips) => {
    if (error) {
      res.status(500);
      throw new Error(error);
    }

    res.send(tips);
  });
});

module.exports = tipRouter;

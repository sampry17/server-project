const express = require('express');
//const moment = require('moment');

const { Group } = require('../../../models');

const groupsRouter = express.Router();

groupsRouter.get('/', async (req, res) => {
  try {
    console.log('get groups');
    const groups = await Group.find({});
    res.json(groups);
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

groupsRouter.post('/', async (req, res) => {
  try {
    console.log('post groups');
    const group = new Group(req.body);
    res.json(await group.save());
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

module.exports = {
  groupsRouter,
};

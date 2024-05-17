const UserList = require('../models/UserList');

const createList = async (req, res) => {
  const { title, customProperties } = req.body;
  const newList = new UserList({ title, customProperties });
  await newList.save();
  res.status(201).send(newList);
};

module.exports = { createList };

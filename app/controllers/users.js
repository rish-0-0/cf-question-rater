const Users = require('../models/users');
const createUser = async (req, res) => {
  await Users.create({
    username: req.body.username,
    ranking: req.body.ranking,
  });
};

module.exports = { createUser };
const Users = require("../models/users");
const { statusResponse } = require("../utils/responses");
const createUser = async (req, res) => {
  try {
    await Users.create({
      username: req.body.username,
      ranking: req.body.ranking,
    });
    return statusResponse(res, 200, true, { message: "User created." });
  } catch (e) {
    console.error(e);
    return statusResponse(res, 500, false, {
      message: "Failed to create user",
    });
  }
};

module.exports = { createUser };

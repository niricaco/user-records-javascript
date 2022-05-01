const User = require("../models/user");

const queryAllUsers = async (req, res) => {
  const paramAll = req.query.all;
  const paramLimit = req.query.limit;
  const paramOrderByName = req.query.order_by;
  const paramName = req.query.name;

  if (paramAll === "true") {
    const query = await User.find();
    return res.status(200).json(query);
  }

  if (paramLimit > 0) {
    const query = await User.find().limit(paramLimit);
    return res.status(200).json(query);
  }

  if (paramOrderByName === "name") {
    const query = await User.find({}, "name").sort({ name: "asc" });
    return res.status(200).json(query);
  }

  if (paramName) {
    const regexp = new RegExp(`${paramName}`);
    const query = await User.find({ name: regexp }, "name");
    return res.status(200).json(query);
  }

  const query = await User.find().select("name -_id");
  return res.status(200).json(query);
};

const queryUsersById = async (req, res) => {
  const id = req.params.id;
  const query = await User.findOne({ id: id });
  return res.status(200).json(query);
};

const queryUsersByUsername = async (req, res) => {
  const username = req.params.username;
  const query = await User.findOne({ username: username });
  return res.status(200).json(query);
};

exports.queryAllUsers = queryAllUsers;
exports.queryUsersById = queryUsersById;
exports.queryUsersByUsername = queryUsersByUsername;

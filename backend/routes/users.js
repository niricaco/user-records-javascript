const express = require("express");
const router = express.Router();
const {
  queryAllUsers,
  queryUsersById,
  queryUsersByUsername,
} = require("../controllers/queryContoller");

router.get("/", queryAllUsers);
router.get("/id/:id", queryUsersById);
router.get("/username/:username", queryUsersByUsername);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  queryAllUsers,
  queryUsersById,
  queryUsersByUsername,
} = require("../controllers/queryContoller");

router.get("/", queryAllUsers);
router.get("/api/users/id/:id", queryUsersById);
router.get("/api/users/username/:username", queryUsersByUsername);

module.exports = router;

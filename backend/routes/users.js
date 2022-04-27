const express = require("express");
const router = express.Router();

router.get("/", queryAllUsers);

module.exports = router;

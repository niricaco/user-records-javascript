require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

//contollers
const fetchUsersData = require("./controllers/fetchUsersData");
const { createUser } = require("./controllers/createUser");

//models
const User = require("./models/user");

//routes
const usersRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

// endpoints
app.use("/api/users", usersRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((res) => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.connection.dropDatabase();

fetchUsersData()
  .then((users) => createUser(users))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", async (req, res) => {
  const query = await User.find();
  return res.status(200).json(query);
});

app.get("/api/users", async (req, res) => {
  const query = await User.find().select("name -_id");
  return res.status(200).json(query);
});

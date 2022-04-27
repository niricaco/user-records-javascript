const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: { lat: Number, lng: Number },
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;

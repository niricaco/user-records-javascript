const User = require("../models/user");

const createUser = (users) => {
  users.map((user) => {
    const newUser = new User({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: { lat: user.address.geo.lat, lng: user.address.geo.lng },
      },
    });
    newUser
      .save()
      .then((user) => {
        console.log(user.name, "created");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = createUser;

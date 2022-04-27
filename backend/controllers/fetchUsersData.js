const fetch = require("node-fetch");

const fetchUsersData = async () => {
  const response = await fetch(process.env.FETCH_USERS_DATA);
  const usersData = await response.json();
  return usersData;
};

module.exports = fetchUsersData;

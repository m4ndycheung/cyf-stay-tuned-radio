var request = require("request");
const { Pool } = require("pg");
const exchangeRefreshForAccessToken = require("./exchangeRefreshForAccessToken");

const getRefreshAndUpdatePlaylist = async function (req, res) {
  const serverURL = process.env.server_url;

  const requestRefreshToken = await fetch(`${serverURL}/refresh_token`);
  const newTokenObject = await requestRefreshToken.json();
  console.log(`NEW access token: ${newTokenObject.access_token}`);
};

module.exports = getRefreshAndUpdatePlaylist;

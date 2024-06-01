const { getAllSongs } = require("../data/database.js");

const apiCallToGetSongsFromDB = function (req, res) {
  getAllSongs()
    .then((result) => {
      console.log(result.rows);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = apiCallToGetSongsFromDB;

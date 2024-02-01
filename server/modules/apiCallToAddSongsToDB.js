const { Pool } = require("pg");

const apiCallToAddSongsToDB = function(req, res) {
    const db = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        ssl: true,
      });

    console.log(req.body)
    res.send(req.body)
}

module.exports = apiCallToAddSongsToDB
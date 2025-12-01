// Load environment variables from .env file
// require("dotenv").config();
const db = require("../db-config");
const Pool = require("pg").Pool; // Import postgreSQL Client

const pool = new Pool(db.getDbConfig());

// get Users
const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};

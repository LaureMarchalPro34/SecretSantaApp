// Load environment variables from .env file
require("dotenv").config();

// Connect to database
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const getDbConfig = () => {
  return dbConfig;
};

module.exports = {
  getDbConfig,
};

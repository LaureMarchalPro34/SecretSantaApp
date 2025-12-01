// Load environment variables from .env file
require("dotenv").config();
const express = require("express"); // Importing express
const Pool = require("pg").Pool; // Import postgreSQL Client
const app = express(); // Creating an express app

// Access a single environment variable
const nodeEnv = process.env.NODE_ENV || "development";
console.log(`Running in ${nodeEnv} mode`);

// Check if running in production
if (process.env.NODE_ENV === "production") {
  console.log("Production optimizations enabled");
  // Enable production features
}

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

// Create a route that sends a response when visiting the homepage
app.get("/", (req, res) => {
  res.send("<h1>Hello, Node.js, Express, and Postgres API!</h1>");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

// Connect to database
const pool = new Pool(dbConfig);

// test query
const getUsers = (request, response) => {
  console.log(`Test getUsers`);
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

app.get("/users", getUsers);

// Access multiple variables with destructuring
const { PORT = 3000, HOST = "localhost" } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

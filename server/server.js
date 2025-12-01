// Load environment variables from .env file
require("dotenv").config();
const express = require("express"); // Importing express
const bodyParser = require("body-parser");
const app = express(); // Creating an express app
const usersQueries = require("./routes/users-queries");

// Access a single environment variable
const nodeEnv = process.env.NODE_ENV || "development";
console.log(`Running in ${nodeEnv} mode`);

// Check if running in production
if (process.env.NODE_ENV === "production") {
  console.log("Production optimizations enabled");
  // Enable production features
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Create a route that sends a response when visiting the homepage
app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/users", usersQueries.getUsers);

// Access multiple variables with destructuring
const { PORT = 3000, HOST = "localhost" } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

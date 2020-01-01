const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Declare constant/environment variables
const NODE_PORT = 3000;
const ROUTES_PAGES = require("./routes/routes-pages.js");
const ROUTES_API = require("./routes/routes-api");

// Set up mongoose DB connection
let dev_db_url = "mongodb://localhost/wtfood-dev";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Express settings
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// TODO: Figure out what bodyPerson does and if it's required
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", ROUTES_PAGES);
app.use("/api", ROUTES_API);

// Handle 404 error for any URL that doesn't match our defined routes
app.use(function(req, res, next) {
  res.status(404).render("pages/404");
});

// Start the server
app.listen(NODE_PORT, () => {
  console.log("Listening at :" + NODE_PORT + "...");
});

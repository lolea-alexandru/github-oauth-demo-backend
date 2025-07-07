/* ============================== IMPORTS ============================== */
// core
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

// routers
const githubRouter = require("./routers/github");
const gitlabRouter = require("./routers/gitlab");

/* ============================== CONFIG ============================== */

const app = express();

// Register middlewares
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

// Register routers
app.use("/github", githubRouter);
app.use("/gitlab", gitlabRouter);

// TODO: use Swagger to document the endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});

/* ============================== IMPORTS ============================== */
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

/* ============================== CONFIG ============================== */
const CLIENT_ID = "Ov23li2DUsGWngQFU7q5";

const app = express();

// Register middlewares
app.use(cors);
app.use(bodyParser.json());
require("dotenv").config();

// Start the server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});

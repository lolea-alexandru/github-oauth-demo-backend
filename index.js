/* ============================== IMPORTS ============================== */
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

/* ============================== CONFIG ============================== */
const CLIENT_ID = "Ov23li2DUsGWngQFU7q5";

const app = express();

// Register middlewares
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getAccessToken", async (req, res) => {
  // Request configuration
  const accessTokenURL = "https://github.com/login/oauth/access_token";
  const params = `?client_id=${CLIENT_ID}&client_secret=${process.env.GITHUB_CLIEN_SECRET}&code=${req.query.code}`;
  const headers = {
    Accept: "application/json",
  };

  try {
    // Retrieve the access token from the GitHub server
    const response = await axios.post(
      accessTokenURL + params,
      {},
      {
        headers: headers,
      }
    );

    // Send the access token back to the frontend
    res.send(response.data.access_token).status(200);
  } catch (error) {
    // TODO: Add better error handling
    res.send(error).status(400);
  }
});

// Start the server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});

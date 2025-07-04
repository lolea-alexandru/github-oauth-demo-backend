/* ============================== IMPORTS ============================== */
// core
const express = require("express");

/* ============================== CONFIG ============================== */
// create router
const router = express.Router();
const CLIENT_ID = "Ov23li2DUsGWngQFU7q5";

// Define routes
// TODO: use Swagger to document the endpoint
router.get("/getAccessToken", async (req, res) => {
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

// TODO: use Swagger to document the endpoint
router.get("/getUserData", async (req, res) => {
  const userDataURL = "https://api.github.com/user";

  try {
    const response = await axios.get(userDataURL, {
      headers: {
        Authorization: req.get("Authorization"),
      },
    });

    res.send(response.data).status(200);
  } catch (error) {
    // TODO: Add better error handling
    res.send(error).status(400);
  }
});

module.exports = router;

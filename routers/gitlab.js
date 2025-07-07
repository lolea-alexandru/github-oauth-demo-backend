/* ============================== IMPORTS ============================== */
// core
const express = require("express");

/* ============================== CONFIG ============================== */
// create router
const router = express.Router();
const GITLAB_CLIENT_ID =
  "9de93adf65e2f4f222d5fd0d4f6a1794ce67ed97253e762b99482c938fcb81aa";

// TODO: use Swagger to document the endpoint
router.get("/getAccessToken", async (req, res) => {
  // Request configuration
  const accessTokenURL = "https://gitlab.com/oauth/token";
  const params = `?client_id=${GITLAB_CLIENT_ID}&client_secret=${process.env.GITLAB_CLIENT_SECRET}&code=${req.query.code}&grant_type=authorization_code`;
  const headers = {
    Accept: "application/json",
  };
  console.log(accessTokenURL + params);

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
    res.send(response.data).status(200);
  } catch (error) {
    // TODO: Add better error handling
    res.send(error).status(400);
  }
});

// TODO: use Swagger to document the endpoint
router.get("/getUserData", async (req, res) => {
  res.send("Not yet implemented").status(200);
});

module.exports = router;

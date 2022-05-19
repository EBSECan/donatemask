const express = require("express");

const router = express.Router();

router.use(require("./dbapi"));
router.use(require("./stripeapi"));

// For certain testing scenarios, we need to host the front-end from express,
// so we need to serve the static assets here.
if(process.env.USE_STATIC_HOSTING) {
  router.use(express.static("/home/donatemask/donatemask.ca/public"))

  // Handles wildcard requests, ensures direct links with routing works.
  // NOTE: we only bother doing this for the production domain, not locally
  // in development, where we proxy instead (see proxy in package.json)
  router.get("*", (req, res) => {
    res.sendFile("/home/donatemask/donatemask.ca/public/index.html");
  });
}

module.exports = router;

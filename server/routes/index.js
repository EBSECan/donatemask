const express = require("express");

const { isDonateMaskCa } = require("../util");

const router = express.Router();

router.use(require("./dbapi"));
router.use(require("./stripeapi"));

// Handles wildcard requests, ensures direct links with routing works.
// NOTE: we only bother doing this for the production domain, not locally
// in development, where we proxy instead (see proxy in package.json)
if (isDonateMaskCa()) {
  router.get("*", (req, res) => {
    res.sendFile("/home/donatemask/donatemask.ca/public/index.html");
  });
}

module.exports = router;

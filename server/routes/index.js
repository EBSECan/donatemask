const express = require('express');

const router = express.Router();

router.use(require('./dbapi'));
router.use(require('./stripeapi'));

// Handles wildcard requests, ensures direct links with routing works.
router.get('*', (req, res) => {
    res.sendFile('/home/donatemask/donatemask.ca/public/index.html');
});

module.exports = router;

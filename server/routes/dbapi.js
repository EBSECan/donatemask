const express = require("express");

const donations = require('../db/donations');
const maskRequests = require('../db/mask-requests');

const router = express.Router();

// Get stats for donations and mask requests.
router.get("/api/stats", async (req, res, next) => {
  try {
    const [donationsStats, maskRequestsStats] = await Promise.all([
      donations.stats(),
      maskRequests.stats(),
    ]);
    res.json({
      ...donationsStats,
      ...maskRequestsStats,
      unfundedMasks: maskRequestsStats.masksRequested > donationsStats.masksDonated ?
        maskRequestsStats.masksRequested - donationsStats.masksDonated : 0,
    });
  } catch(err) {
    next(err);
  }
});

// Get messages from donations and mask requests
router.get("/api/messages", async (req, res, next) => {
  const count = parseInt(req.query.count, 10) || 25;
  try {
    res.json(await maskRequests.messages(count));
  } catch(err) {
    next(err);
  }
});

// Add donation.
router.post("/api/donation_add", async (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    maskAmnt: req.body.maskAmnt,
    msg: req.body.msg,
    timestamp: req.body.timestamp,
  };

  try {
    res.status(201).json(await donations.add(data));
  } catch(err) {
    next(err);
  }
});

// Add mask requests.
router.post("/api/mask_request_add", async (req, res, next) => {
  const data = {
    requestorType: req.body.requestorType,
    organizationName: req.body.organizationName,
    organizationType: req.body.organizationType,
    name: req.body.name,
    address: req.body.address,
    maskAmntRegular: req.body.maskAmntRegular,
    maskAmntSmall: req.body.maskAmntSmall,
    testAmnt: req.body.testAmnt,
    postalCode: req.body.postal,
    province: req.body.province,
    email: req.body.email,
    msg: req.body.msg,
    requestFulfilled: false,
    timestamp: req.body.timestamp,
  };

  try {
    res.status(201).json(await maskRequests.add(data));
  } catch(err) {
    next(err);
  }
});

module.exports = router;

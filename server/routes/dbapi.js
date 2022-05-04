const express = require("express");

const donations = require('../db/donations');
const maskRequests = require('../db/mask-requests');

const router = express.Router();

// Get all donations.
router.get("/api/get_donations", async (req, res, next) => {
  try {
    res.json(await donations.get());
  } catch(err) {
    next(err);
  }
});

// Get all mask requests.
router.get("/api/get_mask_requests", async (req, res, next) => {
  try {
    res.json(await maskRequests.get());
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

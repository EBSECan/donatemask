const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const dbAPIRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// Get all donations.
dbAPIRoutes.route("/api/get_donations").get(function (req, res) {
  let db_connect = dbo.getDb("donateamask");
  db_connect
    .collection("donations")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Get all mask requests.
dbAPIRoutes.route("/api/get_mask_requests").get(function (req, res) {
  let db_connect = dbo.getDb("donateamask");
  db_connect
    .collection("maskrequests")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Add donation.
dbAPIRoutes.route("/api/donation_add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    maskAmnt: req.body.maskAmnt,
    totalDonation: req.body.totalDonation,
    donationgMsg: req.body.donationMsg,
  };
  db_connect.collection("donations").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Add mask requests.
dbAPIRoutes.route("/api/mask_request_add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    address: req.body.address,
    maskAmnt: req.body.maskAmnt,
    email: req.body.email,
    thanksMsg: req.body.thanksMsg,
  };
  db_connect.collection("maskrequests").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


module.exports = dbAPIRoutes;

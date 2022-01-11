const express = require("express");
const app = express();
var https = require('https')
var fs = require('fs')
const cors = require("cors");
const bodyParser = require('body-parser')
const axios = require('axios')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/dbapi"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get driver connection
const dbo = require("./db/conn");

const stripe = require('stripe')(process.env.STRIPE_TEST_API_KEY)
app.post('/create-checkout-session', async (req, res) => {
  // Creating a new stripe checkout session.
  const session = await stripe.checkout.sessions.create({
    customer_email: req.body.email,
    line_items: [{
      price: 'price_1KF4SwCOL3X1doeXr9IjhRij',
      quantity: req.body.maskAmnt,
    }],
    mode: 'payment',
    success_url: `https://donatemask.ca:5000/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: 'https://donatemask.ca:5000/cancel',
    metadata: {
      name: req.body.name,
      email: req.body.email,
      maskAmnt: parseInt(req.body.maskAmnt),
      msg: req.body.donationMsg,
      timestamp: new Date(),
    }
  });

  res.redirect(303, session.url);
});

app.get('/order/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  // Extracting payload, converting mask amount to int.
  const payload = session.metadata
  payload.maskAmnt = parseInt(payload.maskAmnt)

  // Updating the database on a successful checkout with donation information.
  axios.post('https://donatemask.ca:5000/api/donation_add', payload).then(res => console.log('success'))
  res.redirect('https://donatemask.ca/donate?success=true')
});

//Creating the proxy server, supporting SSL.
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

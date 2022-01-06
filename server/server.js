const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/dbapi"));
// get driver connection
const dbo = require("./db/conn");

const stripe = require('stripe')(process.env.STRIPE_API_KEY)
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: 'price_1KEOMhCOL3X1doeXxRmWdA1U',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

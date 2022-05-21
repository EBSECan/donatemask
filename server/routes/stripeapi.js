const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const donations = require("../db/donations");
const { webUrl, priceId } = require("../util");

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  // Creating a new stripe checkout session.
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: req.body.email,
      line_items: [
        {
          price: priceId,
          quantity: req.body.maskAmnt,
        },
      ],
      mode: "payment",
      success_url: `${webUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${webUrl}/cancel`,
      metadata: {
        name: req.body.name,
        email: req.body.email,
        maskAmnt: parseInt(req.body.maskAmnt, 10),
        msg: req.body.donationMsg,
        timestamp: new Date(),
      },
    });

    res.redirect(303, session.url);
  } catch (err) {
    console.error({ err }, "Error processing POST /create-checkout-session");
    res.redirect(`${webUrl}/donate?success=false`);
  }
});

router.get("/order/success", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    // Extracting payload, converting mask amount to int.
    const payload = session.metadata;
    payload.maskAmnt = parseInt(payload.maskAmnt, 10);

    // Update the database on a successful checkout with donation information.
    await donations.add(payload);

    res.redirect(`${webUrl}/donate?success=true`);
  } catch (err) {
    console.error({ err }, "Error processing GET /order/success");
    res.redirect(`${webUrl}/donate?success=false`);
  }
});

module.exports = router;

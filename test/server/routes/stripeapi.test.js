const request = require("supertest");

const app = require("../../../server/api");
const donations = require("../../../server/db/donations");
const { connectToServer, close } = require("../../../server/db/conn");

// Mock the stripe module, see __mocks__/stripe.js
jest.mock("stripe");

describe("stripeapi", () => {
  beforeAll((done) => connectToServer(done));
  afterAll((done) => close(done));

  const orderDetails = {
    name: "Stripe Checkout Name",
    email: "stripe-checkout-email@example.com",
    maskAmnt: 1,
    donationMsg: "Stripe Donation Message",
  };

  describe("/create-checkout-session", () => {
    test("Able to create a checkout session and should get redirected to Stripe", () =>
      request(app)
        .post("/create-checkout-session")
        .send(orderDetails)
        .expect(303)
        .expect("Location", "https://checkout.stripe.com/pay"));
  });

  describe("GET /order/success", () => {
    test("Successful orders are added to database", async () => {
      // 1. Start a checkout session
      await request(app)
        .post("/create-checkout-session")
        .send(orderDetails)
        .expect(303);

      // 2. Simulate a success callback
      await request(app)
        .get("/order/success?session_id=test")
        .expect(302)
        .expect("Location", "https://donatemask.ca/donate?success=true");

      // 3. Make sure a donation was added to the database
      const data = await donations.get();
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            maskAmnt: orderDetails.maskAmnt,
            msg: orderDetails.donationMsg,
          }),
        ])
      );
    });
  });
});

const request = require("supertest");

const { connectToServer, close } = require("../../../server/db/conn");
const app = require("../../../server/api");

describe("dbapi", () => {
  beforeAll((done) => connectToServer(done));
  afterAll((done) => close(done));

  describe("donations", () => {
    test("POST /api/donation_add should add a donation and return 201", () => {
      const donation = {
        name: "Name",
        email: "email@example.com",
        maskAmnt: 10,
        totalDonation: 10 * 1.25,
        msg: "Message",
        timestamp: new Date(),
      };

      return request(app).post("/api/donation_add").send(donation).expect(201);
    });

    test("GET /api/get_donations should return 200 and an array", () =>
      request(app)
        .get("/api/get_donations")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        }));

    test("A donation added should exist in returned results", async () => {
      const donation = {
        name: "New Donation",
        email: "new-donation@example.com",
        maskAmnt: 1,
        totalDonation: 1 * 1.25,
        msg: "New Donation Message",
        timestamp: new Date(),
      };

      // Create a new donation in the db
      await request(app).post("/api/donation_add").send(donation).expect(201);
      // Make sure we can get it back again
      return request(app)
        .get("/api/get_donations")
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                ...donation,
                // The timestamp will be an ISO string vs. Date Object
                timestamp: donation.timestamp.toISOString(),
              }),
            ])
          );
        });
    });
  });

  describe("masks", () => {
    test("POST /api/mask_request_add should add a mask request and return 201", () => {
      const maskRequest = {
        requestorType: "individual",
        organizationName: null,
        organizationType: null,
        name: "Name",
        address: "Address",
        maskAmntRegular: 1,
        maskAmntSmall: 1,
        testAmnt: 1,
        postal: "M5W 1E6",
        province: "Ontario",
        email: "email@example.com",
        msg: "Message",
        requestFulfilled: false,
        timestamp: new Date(),
      };

      return request(app)
        .post("/api/mask_request_add")
        .send(maskRequest)
        .expect(201);
    });

    test("GET /api/get_mask_requests should return 200 and an array", () =>
      request(app)
        .get("/api/get_mask_requests")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        }));

    test("A mask request added should exist in returned results", async () => {
      const maskRequest = {
        requestorType: "organization",
        organizationName: "Organization Name",
        organizationType: "Organization Type",
        name: "New Name",
        address: "New Address",
        maskAmntRegular: 2,
        maskAmntSmall: 2,
        testAmnt: 2,
        postalCode: "M5W 1E7",
        province: "Manitoba",
        email: "email2@example.com",
        msg: "New Message",
        timestamp: new Date(),
      };

      // Create a new mask request in the db
      await request(app)
        .post("/api/mask_request_add")
        .send({
          ...maskRequest,
          // The route expects .postal to be sent, but db uses .postalCode
          postal: maskRequest.postalCode,
        })
        .expect(201);

      // Make sure we can get it back again
      return request(app)
        .get("/api/get_mask_requests")
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                ...maskRequest,
                // The timestamp will be an ISO string vs. Date Object
                timestamp: maskRequest.timestamp.toISOString(),
              }),
            ])
          );
        });
    });
  });
});

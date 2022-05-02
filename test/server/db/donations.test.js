const { connectToServer, close } = require("../../../server/db/conn");
const donations = require("../../../server/db/donations");

describe("db/donations.js", () => {
  beforeAll((done) => connectToServer(done));
  afterAll((done) => close(done));

  test("get() returns an array of donations", () =>
    donations.get().then((result) => expect(Array.isArray(result)).toBe(true)));

  test("add() adds a donation", async () => {
    const donation = {
      name: "New Donation",
      email: "new-donation@example.com",
      maskAmnt: 1,
      totalDonation: 1 * 1.25,
      msg: "New Donation Message",
      timestamp: new Date(),
    };

    await donations.add(donation);

    const result = await donations.get();
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining(donation)])
    );
  });
});

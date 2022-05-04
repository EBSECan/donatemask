const { connectToServer, close } = require("../../../server/db/conn");
const donations = require("../../../server/db/donations");

describe("db/donations.js", () => {
  beforeAll((done) => connectToServer(done));
  afterAll((done) => close(done));

  test("get() returns an array of donations", () =>
    donations.get().then((result) => expect(Array.isArray(result)).toBe(true)));

  test("add() adds a donation", async () => {
    const donation = {
      name: "dZcb",
      email: "dZcb@example.com",
      maskAmnt: 1,
      msg: "dZcb Donation Message",
      timestamp: new Date(),
    };

    await donations.add(donation);

    const result = await donations.get();
    const { maskAmnt, msg, timestamp } = donation;
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          maskAmnt,
          // totalDonation should be calculated and added automatically
          totalDonation: 1.25,
          msg,
          timestamp })
      ])
    );
  });
});

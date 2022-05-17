const { connectToServer, close } = require("../../../server/db/conn");
const donations = require("../../../server/db/donations");

describe("db/donations.js", () => {
  // Connect and close before/after each test so we wipe the data
  beforeEach(() => connectToServer());
  afterEach(() => close());

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

  test("stats() gets correct number of totalMasksDonated", async () => {
    const donationData = [
      {
        name: "New Donation 1",
        email: "new-donation-1@example.com",
        maskAmnt: 100,
        totalDonation: 100 * 1.25,
        msg: "New Donation Message 1",
        timestamp: new Date(),
      },
      {
        name: "New Donation 2",
        email: "new-donation-2@example.com",
        maskAmnt: 251,
        totalDonation: 251 * 1.25,
        msg: "New Donation Message 2",
        timestamp: new Date(),
      },
    ];

    await Promise.all(donationData.map(donations.add));

    const result = await donations.stats();
    // The total could be slightly different, depending on order of test runs
    // so confirm that we're at least above 251, which is unique to this test.
    expect(result.masksDonated).toBeGreaterThanOrEqual(351);
  });
});

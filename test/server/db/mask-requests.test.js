const { connectToServer, close } = require("../../../server/db/conn");
const maskRequests = require("../../../server/db/mask-requests");

describe("db/mask-requests.js", () => {
  beforeAll((done) => connectToServer(done));
  afterAll((done) => close(done));

  test("get() returns an array of mask requests", () =>
    maskRequests
      .get()
      .then((result) => expect(Array.isArray(result)).toBe(true)));

  test("add() adds a mask request", async () => {
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
      requestFulfilled: true,
      timestamp: new Date(),
    };

    await maskRequests.add(maskRequest);

    const result = await maskRequests.get();
    const { maskAmntRegular, maskAmntSmall, msg, requestFulfilled, testAmnt, timestamp } = maskRequest;
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({
        maskAmntRegular, maskAmntSmall, msg, requestFulfilled, testAmnt, timestamp
      })])
    );
  });
});

const dbo = require("./conn");
const { toInt } = require("../util");

/**
 * Mask Request Schema:
 *
 * _id: "61e86ee591676123aaab97d1"
 * requestorType: "individual" | "organization"
 * organizationName: "Organization Name" | null
 * organizationType: "School, etc" | null
 * name: "John Smith"
 * address: "123 Main St."
 * maskAmntRegular: 2
 * maskAmntSmall: 1
 * email: "jsmith@email.com"
 * msg: "Thank you so much"
 * timestamp: "2022-01-19T20:04:52.611Z"
 * requestFulfilled: true | false
 */

module.exports.get = () => {
  const db = dbo.getDb();
  return db
    .collection("maskrequests")
    .find({})
    .project({
      organizationName: 0,
      organizationType: 0,
      name: 0,
      email: 0,
    })
    .toArray();
};

module.exports.add = (data) => {
  const db = dbo.getDb();
  return db.collection("maskrequests").insertOne(data);
};

module.exports.stats = async () => {
  const db = dbo.getDb();
  const maskRequests = await db
    .collection("maskrequests")
    .find({})
    .project({
      testAmnt: 1,
      requestFulfilled: 1,
      maskAmnt: 1,
      maskAmntSmall: 1,
      maskAmntRegular: 1,
    })
    .toArray();

  let masksRequested = 0;
  let masksFulfilled = 0;
  let testsRequested = 0;
  let testsFulfilled = 0;

  maskRequests.forEach(
    ({ testAmnt, requestFulfilled, maskAmntSmall, maskAmntRegular }) => {
      testsRequested += toInt(testAmnt);
      masksRequested += toInt(maskAmntSmall) + toInt(maskAmntRegular);

      if (requestFulfilled) {
        testsFulfilled += toInt(testAmnt);
        masksFulfilled += toInt(maskAmntSmall) + toInt(maskAmntRegular);
      }
    }
  );

  return {
    masksRequested,
    masksFulfilled,
    testsRequested,
    testsFulfilled,
  };
};

module.exports.messages = async (count = 25) => {
  const db = dbo.getDb();
  const messages = await db
    .collection("maskrequests")
    .find({})
    .project({ msg: 1, timestamp: 1 })
    .sort({ timestamp: -1 })
    .limit(count)
    .toArray();

  // Remove any empty/null messages
  return messages.filter(({ msg }) => msg.length);
};

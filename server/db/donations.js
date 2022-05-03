const dbo = require("./conn");
const { toInt } = require('../util');

/**
 * Donations Schema:
 *
 * _id: "61e86f3791676123aaab97d2"
 * name: "John Smith"
 * email: "jsmith@example.com"
 * maskAmnt :15,
 * totalDonation: 18.75
 * msg: "I hope this helps"
 * timestamp: "1642622725"
 */

module.exports.get = () => {
  const db = dbo.getDb();
  return db
    .collection("donations")
    .find({})
    .project({
      name: 0,
      email: 0,
    })
    .toArray();
};

module.exports.add = (data) => {
  const db = dbo.getDb();
  return db.collection("donations").insertOne(data);
};

module.exports.stats = async () => {
  const db = dbo.getDb();
  const donations = await db.collection("donations").find({}).project({ maskAmnt: 1 }).toArray();
  return {
    masksDonated: donations.reduce((total, { maskAmnt }) => total + toInt(maskAmnt), 0),
  };
};

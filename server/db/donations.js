const dbo = require("./conn");

// Use 1.25 as the default cost per mask if not set in env
const costPerMask = process.env.COST_PER_MASK || 1.25;

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

  // Add the total donation
  data.totalDonation = parseInt(data.maskAmnt, 10) * costPerMask;

  return db.collection("donations").insertOne(data);
};

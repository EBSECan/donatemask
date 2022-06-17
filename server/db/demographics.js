const dbo = require("./conn");

/**
 * Demographics Schema:
 *
 * _id: "61e86ee591676123aaab97d1"
 * groups: ["People with low income", "Children/youth", ...] | ["None Selected"]
 * timestamp: "2022-01-19T20:04:52.611Z"
 *
 * See const.js for current list of demographic groups.
 */

module.exports.get = () => {
  const db = dbo.getDb();
  return db.collection("demographics").find({}).toArray();
};

module.exports.add = (data) => {
  const db = dbo.getDb();
  return db.collection("demographics").insertOne(data);
};

module.exports.stats = async () => {
  const db = dbo.getDb();
  const demographics = await db.collection("demographics").find({}).toArray();

  // Go through all records, and all groups in those records,
  // and count how many times we encounter each one.
  const groupCounts = {};
  demographics.forEach(({ groups }) => {
    groups.forEach((group) => {
      groupCounts[group] = groupCounts[group] || 0;
      groupCounts[group] = groupCounts[group] + 1;
    });
  });

  return {
    count: demographics.length,
    groupCounts,
  };
};

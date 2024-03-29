const dbo = require("./conn");

/**
 * Demographics Schema:
 *
 * _id: "61e86ee591676123aaab97d1"
 * postalCode: "M5W 1E6",
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
  // Do the same for all request purpose data
  const groupCounts = {};
  const purposeCounts = {
    total: 0,
    purposes: {
      Unspecified: 0,
      "Return To School": 0,
      "Return To Work": 0,
    },
  };

  demographics.forEach(({ groups, purpose }) => {
    groups.forEach((group) => {
      groupCounts[group] = groupCounts[group] || 0;
      groupCounts[group] = groupCounts[group] + 1;
    });

    if (purpose) {
      // Keep a separate total for purpose counts, since we don't have as much historic data.
      purposeCounts.total += 1;

      let anySelected = false;
      if (purpose.returnToSchool) {
        purposeCounts.purposes["Return To School"] += 1;
        anySelected = true;
      }
      if (purpose.returnToWork) {
        purposeCounts.purposes["Return To Work"] += 1;
        anySelected = true;
      }

      // Deal with the case of neither being selected
      if (!anySelected) {
        purposeCounts.purposes["Unspecified"] += 1;
      }
    }
  });

  return {
    count: demographics.length,
    groupCounts,
    purposeCounts,
  };
};

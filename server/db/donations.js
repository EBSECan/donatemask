const dbo = require("./conn");

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

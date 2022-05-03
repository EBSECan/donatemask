const dbo = require("./conn");

module.exports.get = () => {
  const db = dbo.getDb();
  return db
    .collection("maskrequests")
    .find({})
    .project({
      requestorType: 0,
      organizationName: 0,
      organizationType: 0,
      name: 0,
      email: 0,
      address: 0,
      postal: 0,
      province: 0,
    })
    .toArray();
};

module.exports.add = (data) => {
  const db = dbo.getDb();
  return db.collection("maskrequests").insertOne(data);
};

const { MongoClient } = require("mongodb");

const dbUri = process.env.ATLAS_URI;
if (!dbUri) {
  throw new Error('Missing ATLAS_URI environment variable');
}

const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err) {
        return callback(err);
      }

      _db = db.db("donateamask");
      callback(null);
    });
  },

  getDb: function () {
    if (!_db) {
      throw new Error('getDb() called before connectToServer()');
    }
    return _db;
  },

  close: function(callback) {
    _db = null;
    client.close(callback);
  },
};

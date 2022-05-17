const { MongoClient } = require("mongodb");
const memoryServer = require("./memory-server");

let dbUri = process.env.ATLAS_URI;
if (!dbUri) {
  /* istanbul ignore next */
  throw new Error("Missing ATLAS_URI environment variable");
}

let _db;
let _client;

module.exports = {
  connectToServer: async function () {
    // Special case for "memory" URI, which means we run an
    // in-memory MongoDB instance for local testing
    if (dbUri === "memory") {
      /* istanbul ignore next */
      dbUri = await memoryServer.start();
    }

    return new Promise((resolve, reject) => {
      _client = new MongoClient(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      _client.connect(function (err, db) {
        if (err) {
          return reject(err);
        }

        _db = db.db("donateamask");
        resolve();
      });
    });
  },

  getDb: function () {
    if (!_db) {
      throw new Error("getDb() called before connectToServer()");
    }
    return _db;
  },

  close: function () {
    return new Promise((resolve, reject) => {
      _db = null;

      if (!_client) {
        return resolve();
      }

      _client.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
};

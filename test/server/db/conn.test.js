const { connectToServer, getDb, close } = require("../../../server/db/conn");

describe("db/conn.js", () => {
  test("connectToServer() works as expected", (done) => {
    connectToServer((err) => {
      expect(err).not.toBeTruthy();
      close(done);
    });
  });

  test("getDb() throws if called before connectToServer()", () => {
    expect(() => getDb()).toThrow();
  });

  test("getDb() returns a database instance with a collection() method", (done) => {
    connectToServer((err) => {
      expect(err).not.toBeTruthy();

      const db = getDb();
      expect(typeof db.collection).toBe("function");
      close(done);
    });
  });
});

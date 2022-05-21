const { connectToServer, getDb, close } = require("../../../server/db/conn");

describe("db/conn.js", () => {
  test("connectToServer() works as expected", async () => {
    await connectToServer();
    await close();
  });

  test("getDb() throws if called before connectToServer()", () => {
    expect(() => getDb()).toThrow();
  });

  test("getDb() returns a database instance with a collection() method", async () => {
    await connectToServer();
    const db = getDb();
    expect(typeof db.collection).toBe("function");
    await close();
  });
});

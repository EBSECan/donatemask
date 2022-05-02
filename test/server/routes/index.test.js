const request = require("supertest");

const app = require("../../../server/api");

describe("routes", () => {
  // TODO: fix the code so it doesn't render a file that doesn't exist
  test.skip("/ should return HTML for web app", () =>
    request(app).get("/").expect(200));
});

const util = require("../../server/util");

describe("util", () => {
  describe("toInt()", () => {
    test("toInt() should return 0 if value is null", () => {
      expect(util.toInt(null)).toEqual(0);
    });

    test("toInt() should return an integer if value is a double", () => {
      expect(util.toInt(3.14)).toEqual(3);
    });

    test("toInt() should always return a positive value", () => {
      expect(util.toInt(-10)).toEqual(10);
    });
  });
});

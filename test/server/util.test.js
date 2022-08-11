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

  describe('toPercent()', () => {
    test('toPercent() should return 100% with no decimals for value of 1', () => {
      expect(util.toPercent(1)).toEqual('100%');
    });

    test('toPercent() should return 0% with no decimals for value of 0', () => {
      expect(util.toPercent(0)).toEqual('0%');
    });

    test('toPercent() should format a value with 2 decimal places into a percent', () => {
      expect(util.toPercent(0.56781341)).toEqual('56.78%');
    });

    test('toPercent() should throw away decimal part if it is .00', () => {
      expect(util.toPercent(0.5600000)).toEqual('56%');
    });
  });
});

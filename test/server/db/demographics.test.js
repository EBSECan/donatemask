const { connectToServer, close } = require("../../../server/db/conn");
const demographics = require("../../../server/db/demographics");

describe("db/demographics.js", () => {
  beforeAll(() => connectToServer());
  afterAll(() => close());

  test("get() returns an array of demographic groups", () =>
    demographics
      .get()
      .then((result) => expect(Array.isArray(result)).toBe(true)));

  test("add() adds demographic data", async () => {
    const demographicData = {
      groups: ["Group1", "Group2"],
      timestamp: new Date(),
    };

    await demographics.add(demographicData);

    const result = await demographics.get();
    const { groups, timestamp } = demographicData;
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({
        groups, timestamp
      })])
    );
  });

  test("stats() returns expected counts", async () => {
    const demographicData = {
      // Group3 is unique to this test
      groups: ["Group1", "Group2", "Group3"],
      timestamp: new Date(),
    };

    await demographics.add(demographicData);

    const result = await demographics.stats();
    expect(result.count).toBeGreaterThan(1);
    expect(result.groupCounts).toBeDefined();
    // Group1 and Group2 are not unique, and might be more than 1 
    expect(result.groupCounts.Group1).toBeGreaterThanOrEqual(1);
    expect(result.groupCounts.Group2).toBeGreaterThanOrEqual(1);
    // Group3 is unique to this test, and should be exactly 1
    expect(result.groupCounts.Group3).toEqual(1);
  });
});

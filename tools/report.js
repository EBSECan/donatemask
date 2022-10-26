// Try to use server/config.env if present, otherwise the ATLAS_URI will need
// to be specified manually before running.
require("dotenv").config({ path: "server/config.env" });

const fs = require("fs/promises");
const Handlebars = require("handlebars");
const postalCodeHelpers = require("postal-code-helpers");

const { toInt, toPercent } = require("../server/util");
const { connectToServer } = require("../server/db/conn");
const demographics = require("../server/db/demographics");
const requests = require("../server/db/mask-requests");

// Format numbers for easier reading: 1024 -> "1,024"
const formatNumber = (value) => new Intl.NumberFormat().format(value);

// If we have a postalCode, use that. Otherwise try to
// extract it from the address (not all requests have both).
const extractPostalCode = (postalCode, address) => {
  const cleanPostalCode = (postalCode) => {
    if (!postalCode) {
      return null;
    }

    let cleaned = postalCode.trim().toUpperCase().replace(/ /g, "");
    // If it's not 6 in length now, it's likely not parsable, give up.
    if (cleaned.length !== 6) {
      return null;
    }

    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  };

  if (postalCode) {
    return cleanPostalCode(postalCode);
  }

  const extracted = postalCodeHelpers.extract(address, "CA");
  if (!(extracted && extracted.length)) {
    return null;
  }

  let cleaned = extracted[0].trim().toUpperCase().replace(/ /g, "");
  // If it's not 6 in length now, it's likely not parsable, give up.
  if (cleaned.length !== 6) {
    return null;
  }

  return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
};

// See https://www.canadapost-postescanada.ca/cpc/en/support/articles/addressing-guidelines/postal-codes.page
const lookupRegion = (postalCode) => {
  if (typeof postalCode !== "string") {
    return null;
  }

  switch (postalCode[0].toUpperCase()) {
    case "A":
      return "Newfoundland and Labrador";
    case "B":
      return "Nova Scotia";
    case "C":
      return "Prince Edward Island";
    case "E":
      return "New Brunswick";
    case "G":
      return "Eastern Quebec";
    case "H":
      return "Metropolitan Montreal";
    case "J":
      return "Western Quebec";
    case "K":
      return "Eastern Ontario";
    case "L":
      return "Central Ontario";
    case "M":
      return "Metropolitan Toronto";
    case "N":
      return "Southwestern Ontario";
    case "P":
      return "Northern Ontario";
    case "R":
      return "Manitoba";
    case "S":
      return "Saskatchewan";
    case "T":
      return "Alberta";
    case "V":
      return "British Columbia";
    case "X":
      return "Northwest Territories/Nunavut";
    case "Y":
      return "Yukon";
    default:
      console.warn(`Unknown postal code region: ${postalCode}`);
      return null;
  }
};

/**
 * 1. Requests from Vulnerable vs Not Vulnerable.  We define "Not Vulnerable"
 * as Not Vulnerable = total requests - "None Selected", "None of the above", "Prefer not to say"
 */
const calculateVulnerableMetric = (stats) => {
  const total = stats.count;
  const groupCounts = stats.groupCounts;
  const notVulnerable =
    toInt(groupCounts["None of the above"]) +
    toInt(groupCounts["Prefer not to say"]) +
    toInt(groupCounts["None Selected"]);
  const vulnerable = total - notVulnerable;

  return {
    total: formatNumber(total),
    notVulnerable: {
      value: formatNumber(notVulnerable),
      percent: toPercent(notVulnerable / total),
    },
    vulnerable: {
      value: formatNumber(vulnerable),
      percent: toPercent(vulnerable / total),
    },
  };
};

/**
 * 2. Vulnerable Populations
 */
const calculateVulnerablePopulationsMetric = (stats) => {
  const total = stats.count;
  const groupCounts = stats.groupCounts;

  return {
    total: formatNumber(total),
    populations: Object.keys(groupCounts).map((group) => ({
      name: group,
      value: formatNumber(groupCounts[group]),
      percent: toPercent(groupCounts[group] / total),
    })),
  };
};

/**
 * 3. Purpose of Request. We don't have data for all time, just from Aug 30th.
 */
const calculateRequestPurposeMetric = (stats) => {
  // The total for purpose data is less than the overall total
  const total = stats.purposeCounts.total;
  const purposes = stats.purposeCounts.purposes;

  return {
    total: formatNumber(total),
    purpose: Object.keys(purposes).map((purpose) => ({
      name: purpose,
      value: formatNumber(purposes[purpose]),
      percent: toPercent(purposes[purpose] / total),
    })),
  };
};

/**
 * 4. Request Data by Region
 */
const calculateRegionRequestsMetric = (data) => {
  // Make sure every request has a proper postal code and province
  data.forEach((r) => {
    const postalCode = extractPostalCode(r.postalCode, r.address);
    r.postalCode = postalCode;
    r.region = lookupRegion(postalCode);
  });
  data = data.filter((r) => r.postalCode !== null && r.region !== null);

  const calculateForRegion = (data, region) => {
    if (region) {
      data = data.filter((r) => r.region === region);
    }

    let regularMaskAmount = 0;
    let smallMaskAmount = 0;
    let largeMaskAmount = 0;
    let testAmount = 0;

    data.forEach((r) => {
      regularMaskAmount += toInt(r.maskAmntRegular);
      smallMaskAmount += toInt(r.maskAmntSmall);
      largeMaskAmount += toInt(r.maskAmntLarge);
      testAmount += toInt(r.testAmnt);
    });

    return {
      regularMaskAmount: {
        value: regularMaskAmount,
      },
      smallMaskAmount: {
        value: smallMaskAmount,
      },
      largeMaskAmount: {
        value: largeMaskAmount,
      },
      testAmount: {
        value: testAmount,
      },
      maskAmountTotal: {
        value: regularMaskAmount + smallMaskAmount + largeMaskAmount,
      },
    };
  };

  // Calculate numbers for all of Canada
  const canada = calculateForRegion(data);
  const regions = [];

  // Calculate for each region
  [
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Prince Edward Island",
    "New Brunswick",
    "Eastern Quebec",
    "Metropolitan Montreal",
    "Western Quebec",
    "Eastern Ontario",
    "Central Ontario",
    "Metropolitan Toronto",
    "Southwestern Ontario",
    "Northern Ontario",
    "Manitoba",
    "Saskatchewan",
    "Alberta",
    "British Columbia",
    "Northwest Territories/Nunavut",
    "Yukon",
  ].forEach((region) => {
    const regionData = calculateForRegion(data, region);

    // Determine % of all Canada for this region, and format values for easier reading
    regionData.regularMaskAmount.percent = toPercent(
      regionData.regularMaskAmount.value / canada.regularMaskAmount.value
    );
    regionData.regularMaskAmount.value = formatNumber(
      regionData.regularMaskAmount.value
    );

    regionData.smallMaskAmount.percent = toPercent(
      regionData.smallMaskAmount.value / canada.smallMaskAmount.value
    );
    regionData.smallMaskAmount.value = formatNumber(
      regionData.smallMaskAmount.value
    );

    regionData.largeMaskAmount.percent = toPercent(
      regionData.largeMaskAmount.value / canada.largeMaskAmount.value
    );
    regionData.largeMaskAmount.value = formatNumber(
      regionData.largeMaskAmount.value
    );

    regionData.maskAmountTotal.percent = toPercent(
      regionData.maskAmountTotal.value / canada.maskAmountTotal.value
    );
    regionData.maskAmountTotal.value = formatNumber(
      regionData.maskAmountTotal.value
    );

    regionData.testAmount.percent = toPercent(
      regionData.testAmount.value / canada.testAmount.value
    );
    regionData.testAmount.value = formatNumber(regionData.testAmount.value);

    regionData.name = region;

    regions.push(regionData);
  });

  return {
    Canada: {
      regularMaskAmount: {
        value: formatNumber(canada.regularMaskAmount.value),
      },
      smallMaskAmount: {
        value: formatNumber(canada.smallMaskAmount.value),
      },
      largeMaskAmount: {
        value: formatNumber(canada.largeMaskAmount.value),
      },
      testAmount: {
        value: formatNumber(canada.testAmount.value),
      },
      maskAmountTotal: {
        value: formatNumber(canada.maskAmountTotal.value),
      },
    },
    regions,
  };
};

const currentDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  return today.toLocaleDateString("en-CA", options);
};

const loadTemplate = () => fs.readFile("./tools/report-template.hbs", "utf-8");

const generateReport = async (metrics) => {
  const template = Handlebars.compile(await loadTemplate());
  const html = template(metrics);
  return fs.writeFile("./report.html", html);
};

const calculateMetrics = async () => {
  await connectToServer();
  const [demographicsStats, allRequests] = await Promise.all([
    demographics.stats(),
    requests.get(),
  ]);

  return {
    reportDate: currentDate(),
    metric1: calculateVulnerableMetric(demographicsStats),
    metric2: calculateVulnerablePopulationsMetric(demographicsStats),
    metric3: calculateRequestPurposeMetric(demographicsStats),
    metric4: calculateRegionRequestsMetric(allRequests),
  };
};

const start = async () => {
  try {
    const metrics = await calculateMetrics();
    await generateReport(metrics);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

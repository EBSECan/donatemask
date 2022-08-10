// Get a positive, integer value for a given number.
// Non-numbers will return 0 (e.g., null)
const toInt = (value) => Math.abs(value | 0);

// Turn a decimal value into a formatted percent
const toPercent = (value) => {
  if (value === 1) {
    return "100%";
  }
  if (value === 0) {
    return "0%";
  }
  return `${(value * 100).toFixed(2)}%`.replace(/.00%$/, '%');
};

// Allow overriding the web URL, but default to the public domain
const webUrl = process.env.WEB_URL || "https://donatemask.ca";

// Allow overriding the Stripe Price ID for testing, but use the default otherwise
const priceId = process.env.STRIPE_PRICE_ID || "price_1KzoQkCOL3X1doeXOy2OfORX";

module.exports.toInt = toInt;
module.exports.toPercent = toPercent;
module.exports.priceId = priceId;
module.exports.webUrl = webUrl;

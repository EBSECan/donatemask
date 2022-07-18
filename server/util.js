// Get a positive, integer value for a given number.
// Non-numbers will return 0 (e.g., null)
const toInt = (value) => Math.abs(value|0);

// Allow overriding the web URL, but default to the public domain
const webUrl = process.env.WEB_URL || 'https://donatemask.ca';

// Allow overriding the Stripe Price ID for testing, but use the default otherwise
const priceId = process.env.STRIPE_PRICE_ID || 'price_1KzoQkCOL3X1doeXOy2OfORX'

module.exports.toInt = toInt;
module.exports.priceId = priceId;
module.exports.webUrl = webUrl;

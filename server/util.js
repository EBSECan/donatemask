const toInt = (value) => value|0;

// Allow overriding the web URL, but default to the public domain
const webUrl = process.env.WEB_URL || 'https://donatemask.ca';

module.exports.toInt = toInt;
module.exports.webUrl = webUrl;
// Whether we're running on the production domain or not
module.exports.isDonateMaskCa = () => webUrl === 'https://donatemask.ca';

/**
 * Mock implementation of https://www.npmjs.com/package/stripe
 */

// Remember the most recently created session so we can call retrieve() to get it
let _session;

module.exports = () => ({
  checkout: {
    sessions: {
      async create(options) {
        // See full response format at https://stripe.com/docs/api/checkout/sessions/create?lang=node
        _session = {
          ...options,
          url: "https://checkout.stripe.com/pay",
        };

        return _session;
      },

      async retrieve() {
        return _session;
      },
    },
  },
});

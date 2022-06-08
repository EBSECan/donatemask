export const MASK_SIZE = {
  regular: "Regular-size Masks",
  small: "Small-size Masks",
  test: "COVID Test Boxes (5 per box)"
};

export const MASK_PRICE = 1.25;

// We allow overriding these Stripe product links via environment variables.
// Otherwise, we default to the production links.
export const STRIPE_LINKS = {
  ebook: {
    $5: process.env.REACT_APP_STRIPE_EBOOK_LINK || "https://buy.stripe.com/7sIeWI9m19qD57G4gp",
    $10: process.env.REACT_APP_STRIPE_EBOOK_LINK || "https://buy.stripe.com/dR6g0M8hX1Yb57GbIQ",
    $25: process.env.REACT_APP_STRIPE_EBOOK_LINK || "https://buy.stripe.com/14k6qcdCh32fcA8006",
    $50: process.env.REACT_APP_STRIPE_EBOOK_LINK || "https://buy.stripe.com/9AQ9Co69PbyLas0007",
  },
  mask: {
    small: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAdSE41H1Yb8jS5kn",
    regular: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/dR6cOA9m19qD0Rq5km",
    respiratorKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAeWI9m1cCP57G28c",
    refillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAg0MgOt0U757G5kp",
  },
};

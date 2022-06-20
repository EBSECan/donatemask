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
    honeywell: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/28o7ug0Pv8mzas0aEQ",
    respiratorKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAeWI9m1cCP57G28c",
    refillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAg0MgOt0U757G5kp",
  },
  co2: {
    co2ModelC: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/bIY29Wbu9byL2ZyfZ9",
    co2ModelD: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/8wMeWI2XD5an43C3cq",
    aranet4: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/cN29Co9m18mz1VufZb",
  }
};

export const DEMOGRAPHIC_GROUPS = [
  'Older adults',
  'Caregivers',
  'Persons with disabilities and/or health conditions',
  'Members of the LGBTQ2SIA+ community',
  'People experiencing or at risk for homelessness',
  'People with low income',
  'Children/youth',
  'Indigenous Peoples',
  'Racialized persons',
  'Newcomers to Canada',
  'People isolated socially or geographically',
  'Essential workers',
  'Other vulnerable populations not listed here',
  'None of the above',
  'Prefer not to say',
];

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
	eclipseRegular: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/9AQcOA7dT0U70Rq00u",
	eclipseLarge: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/dR615S0Pv9qDeIgdRj",
    honeywell: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/28o7ug0Pv8mzas0aEQ",
	dentecComfortEase: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/4gwdSE7dT8mz6bK7sX",
    respiratorKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/5kAeWI9m1cCP57G28c",
    refillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/00gbKwbu90U78jS7sN",
    dentecKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/dR6eWIgOt0U77fOfZd",
    dentecRefillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/bIY6qc69P9qDbw4eVa",
	draegerKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/28o3e00Pv1Yb43C8wS",
    draegerRefillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/fZeeWIeGlfP143C5kH",
	floMaskKidsKit: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/14keWI8hX46j6bK28z",
    floMaskKidsRefillPack: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/14k15S41HauHbw46oQ",
	haloStrapKids: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/6oE01O55L32f8jSaFa",
    lanyard: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/dR629WdChauHdEc5kB",
  },
  co2: {
    co2ModelC: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/bIY29Wbu9byL2ZyfZ9",
	co2ModelCUSA: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/28o9CoeGlfP18jS4gN",
	co2ModelCEU: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/aEU29W69P0U7bw44gO",
    co2ModelD: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/8wMeWI2XD5an43C3cq",
	co2ModelDUSA: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/4gwbKwcyddGT2ZydRp",
	co2ModelDEU: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/fZe6qccyd8mzgQo8x6",
    aranet4: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/cN29Co9m18mz1VufZb",
	vitalight: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/8wMbKw9m1gT5cA84gE",
	vitalightUSA: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/6oEeWIcydfP157G00p",
	vitalightEU: process.env.REACT_APP_STRIPE_MASK_LINK || "https://buy.stripe.com/4gwbKw1Tz9qD8jScNc",
  }
};

// This is the number of "masks donated" for each store purchase. 
// To get donation amount in dollars, multiply by MASK_PRICE above
export const MASKS_DONATED_FROM_PURCHASE = {
  ebook: {
    $5: 4,
    $10: 8,
    $25: 20,
    $50: 40,
  },
  mask: {
    small: 25,
    regular: 25,
	eclipseRegular: 25,
	eclipseLarge: 25,
    honeywell: 20,
	dentecComfortEase: 20,
    respiratorKit: 32,
    refillPack: 32,
    dentecKit: 30,
    dentecRefillPack: 16,
	draegerKit: 20,
	draegerRefillPack: 25,
	floMaskKidsKit: 20,
	floMaskKidsRefillPack: 25,
	haloStrapKids: 8,
    lanyard: 4,
  },
  co2: {
    co2ModelC: 32,
	co2ModelCUSA: 40,
	co2ModelCEU: 40,
    co2ModelD: 32,
	co2ModelDUSA: 40,
	co2ModelDEU: 40,
    aranet4: 25,
	vitalight: 16,
	vitalightUSA: 32,
	vitalightEU: 32
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

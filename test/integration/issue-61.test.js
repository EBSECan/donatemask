// Regression test for https://github.com/EBSECan/donatemask/issues/61
// Direct linking to a route should render the expected SPA route and page.

const { test, expect } = require("@playwright/test");

const confirmRoute = async (page, route, text) => {
  await page.goto(`http://localhost:4443${route}`);
  const title = page.locator("h1");
  await expect(title).toHaveText(text);
};

test("Donate page loads with direct link to /donate route", async ({ page }) =>
  confirmRoute(page, "/donate", "Donate a mask"));

test("Request page loads with direct link to /request route", async ({ page }) =>
  confirmRoute(page, "/request", "Request masks and COVID rapid tests"));

test("Buy page loads with direct link to /buy route", async ({ page }) => 
  confirmRoute(page, "/buy", "Buy disposable masks and respirator kits from our charity store"));

test("Summary page loads with direct link to /summary route", async ({ page }) =>
  confirmRoute(page, '/summary', "Summary"))

test("About page loads with direct link to /about route", async ({ page }) =>
  confirmRoute(page, '/about', "About us"));

test("FAQ page loads with direct link to /faq route", async ({ page }) =>
  confirmRoute(page, '/faq', "Frequently asked questions"));

test("Privacy page loads with direct link to /privacy route", async ({ page }) =>
  confirmRoute(page, '/privacy', "Privacy policy"));

test("Terms page loads with direct link to /terms route", async ({ page }) =>
  confirmRoute(page, '/terms', "Terms"));

test("Confirm Request page loads with direct link to /confirmrequest route", async ({ page }) =>
  confirmRoute(page, '/confirmrequest', "Request confirmed"));

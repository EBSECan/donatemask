// Regression test for https://github.com/EBSECan/donatemask/issues/61
// Direct linking to a route should render the expected SPA route and page.

const { test, expect } = require("@playwright/test");
const { donatemaskUrl } = require("./util");

const confirmRoute = async (page, route, text) => {
  await page.goto(`${donatemaskUrl}${route}`);
  const title = page.locator("h1");
  await expect(title).toHaveText(text);
};

test("Donate page loads with direct link to /donate route", async ({ page }) =>
  confirmRoute(page, "/donate", "Donate A Mask"));

test("Request page loads with direct link to /request route", async ({
  page,
}) => confirmRoute(page, "/request", "Request masks and COVID rapid tests"));

test("Store page loads with direct link to legacy /buy route", async ({
  page,
}) => confirmRoute(page, "/buy", "Donate A Mask Charity Store"));

test("Store page loads with direct link to /store route", async ({ page }) =>
  confirmRoute(page, "/store", "Donate A Mask Charity Store"));

test("Summary page loads with direct link to /summary route", async ({
  page,
}) => confirmRoute(page, "/summary", "Summary"));

test("About page loads with direct link to /about route", async ({ page }) =>
  confirmRoute(page, "/about", "About us"));

test("FAQ page loads with direct link to /faq route", async ({ page }) =>
  confirmRoute(page, "/faq", "Frequently asked questions"));

test("Privacy page loads with direct link to /privacy route", async ({
  page,
}) => confirmRoute(page, "/privacy", "Privacy policy"));

test("Terms page loads with direct link to /terms route", async ({ page }) =>
  confirmRoute(page, "/terms", "Terms"));

test("Confirm Request page loads with direct link to /confirmrequest route", async ({
  page,
}) => confirmRoute(page, "/confirmrequest", "Request confirmed"));

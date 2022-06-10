const { test, expect } = require("@playwright/test");
const { createTestData, donatemaskUrl } = require("./util");

test("Site loads", async ({ page }) => {
  await page.goto(donatemaskUrl);
  const title = page.locator("h1");
  await expect(title).toHaveText("Donate A Mask");
});

test("Able to make a donation via Stripe", async ({ page }) => {
  const testData = createTestData();

  await page.goto(`${donatemaskUrl}/donate`);

  // 1. Fill in the donatemask/donate form
  await page.fill("#donate-name", testData.name);
  await page.fill("#donate-email", testData.email);
  await page.fill("#donate-maskAmnt", "10");
  await page.fill("#donate-msg", "Test donation message");

  // 2. Accept the terms and privacy policy. Click the label, due to
  // how the DOM is setup (it's hard to click the checkbox with code).
  // Also, click in the top-left corner, so we don't click the links.
  await page.click("#donate-agree-label.custom-control-label", {
    position: { x: 3, y: 3 },
  });

  // 3. Click DONATE and wait for navigation to stripe
  await page.click("#donate-submit");

  // 4. Fill Stripe form, see https://stripe.com/docs/testing
  await page.fill("#cardNumber", testData.creditCard.number);
  await page.fill("#cardExpiry", testData.creditCard.expiry);
  await page.fill("#cardCvc", testData.creditCard.cvc);
  await page.fill("#billingName", testData.name);
  await page.selectOption("#billingCountry", { label: "Canada" });
  await page.fill("#billingPostalCode", testData.address.postalCode);

  // 5. Submit the Stripe form by pressing Pay and wait for navigation back
  await Promise.all([
    page.waitForNavigation(),
    page.click("button.SubmitButton"),
  ]);

  // 6. Wait for the success message
  await expect(page.locator(".thank-you")).toContainText(
    "Donation Successful. Thank You!",
    { timeout: 15000 }
  );
});

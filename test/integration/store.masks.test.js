const { test, expect } = require("@playwright/test");
const { createTestData, donatemaskUrl } = require("./util");

test("Able to purchase masks via Stripe", async ({ page }) => {
  const testData = createTestData();

  await page.goto(`${donatemaskUrl}/store`);

  // 1. Click the mask small purchase button in the donatemask/store page
  await page.click("#buy-masks-small");

  // 2. Fill Stripe form, see https://stripe.com/docs/testing
  await page.fill("#email", testData.email);
  await page.fill("#shippingName", testData.name);
  // Not all browsers have the address inputs hidden
  if ((await page.locator("text=Enter address manually").count()) > 0) {
    await page.locator("text=Enter address manually").first().click();
  }
  await page.fill("#shippingAddressLine1", testData.address.street);
  await page.fill("#shippingLocality", testData.address.city);
  await page.selectOption("#shippingAdministrativeArea", {
    label: testData.address.province,
  });
  await page.fill("#shippingPostalCode", testData.address.postalCode);
  await page.fill("#cardNumber", testData.creditCard.number);
  await page.fill("#cardExpiry", testData.creditCard.expiry);
  await page.fill("#cardCvc", testData.creditCard.cvc);

  // 3. Submit the Stripe form by pressing Pay and wait for navigation back
  await page.click("button.SubmitButton--complete");

  // 4. Wait for the success message
  await expect(page.locator(".App-Payment")).toContainText(
    "Thanks for your payment",
    { timeout: 15000 }
  );
});

const { test, expect } = require("@playwright/test");
const { createTestData, donatemaskUrl } = require("./util");

test("Able to purchase the ebook via Stripe", async ({ page }) => {
  const testData = createTestData();

  await page.goto(`${donatemaskUrl}/store`);

  // 1. Click the $5 ebook donation button in the donatemask/store page
  await page.click("#buy-ebook-5");

  // 2. Fill Stripe form, see https://stripe.com/docs/testing
  await page.fill("#email", testData.email);
  await page.fill("#cardNumber", testData.creditCard.number);
  await page.fill("#cardExpiry", testData.creditCard.expiry);
  await page.fill("#cardCvc", testData.creditCard.cvc);
  await page.fill("#billingName", "Test Name");
  await page.selectOption("#billingCountry", { label: "Canada" });
  // Not all browsers have the address inputs hidden
  if ((await page.locator("text=Enter address manually").count()) > 0) {
    await page.locator("text=Enter address manually").first().click();
  }
  await page.fill("#billingAddressLine1", testData.address.street);
  await page.fill("#billingLocality", testData.address.city);
  await page.selectOption("#billingAdministrativeArea", {
    label: testData.address.province,
  });
  await page.fill("#billingPostalCode", testData.address.postalCode);

  // 3. Submit the Stripe form by pressing Pay and wait for navigation back
  await Promise.all([
    page.waitForNavigation(),
    page.click("button.SubmitButton--complete"),
  ]);

  // 4. Wait for the success message
  await expect(page.locator("h1")).toContainText(
    "How Canada failed the test of common decency during the COVID-19 pandemic",
    { timeout: 15000 }
  );
});

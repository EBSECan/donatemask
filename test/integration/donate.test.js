const { test, expect } = require('@playwright/test');

const donatemaskUrl = 'http://localhost:4443';

test('Site loads', async ({ page }) => {
  await page.goto(donatemaskUrl);
  const title = page.locator('h1');
  await expect(title).toHaveText('Donate a mask');
});

test('Able to make a donation via Stripe', async ({ page }) => {
  await page.goto(`${donatemaskUrl}/donate`);

  // 1. Fill in the donatemask/donate form
  await page.fill('#donate-name', 'Test Name');
  await page.fill('#donate-email', 'test@email.com');
  await page.fill('#donate-maskAmnt', '10');
  await page.fill('#donate-msg', 'Test donation message');

  // 2. Accept the terms and privacy policy. Click the label, due to
  // how the DOM is setup (it's hard to click the checkbox with code).
  // Also, click in the top-left corner, so we don't click the links.
  await page.click("#donate-agree-label.custom-control-label", { position: { x: 3, y: 3 } });

  // 3. Click DONATE and wait for navigation to stripe
  await Promise.all([
    page.waitForNavigation(),
    page.click('#donate-submit')
  ]);

  // 4. Fill Stripe form, see https://stripe.com/docs/testing
  await page.fill('#cardNumber', '4242 4242 4242 4242');
  // Generate a future date and fill expiry
  const future = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  const month = future.getMonth().toString().padStart(2, '0');
  const year = future.getFullYear().toString().slice(2);
  await page.fill('#cardExpiry', `${month}/${year}`);
  await page.fill('#cardCvc', '123');
  await page.fill('#billingName', 'Test Name');
  await page.fill('#billingPostalCode', 'M5W 1E6');

  // 5. Submit the Stripe form by pressing Pay and wait for navigation back
  await Promise.all([
    page.waitForNavigation(),
    page.click('button.SubmitButton'),
  ]);

  await expect(page.locator('.thank-you')).toContainText('Donation Successful. Thank You!');
});

const { test, expect } = require('@playwright/test');

const requestUrl = 'http://localhost:4443/request';

const fillDefaultValues = async (page, skipAmounts = false) => {
  await page.fill('#request-name', 'Test Name');
  await page.fill('#request-email', 'test@email.com');
  await page.fill('#request-address', 'Test Address');
  await page.fill('#request-city', 'Toronto');
  await page.selectOption('#request-province', { label: 'Ontario' });
  await page.fill('#request-postal-code', 'M5W 1E6');
  if(!skipAmounts) {
    await page.fill('#request-amount-regular', '10');
    await page.fill('#request-amount-small', '5');
    await page.fill('#request-amount-test', '2');
  }
  await page.fill('#request-message', 'Test message');
}

const submitAndFinish = async (page) => {
  await page.click("#request-submit");
  await expect(page.locator('h1')).toContainText('Request confirmed');
}

test('Able to make an individual request', async ({ page }) => {
  await page.goto(requestUrl);

  // 1. Fill in the request form
  await page.selectOption('#requestor-type', { label: 'Individual' });
  await fillDefaultValues(page);

  // 2. Submit the form
  await submitAndFinish(page);
});

test('Able to make an organization request', async ({ page }) => {
  await page.goto(requestUrl);

  // 1. Fill in the request form
  await page.selectOption('#requestor-type', { label: 'Organization' });
  await page.fill('#organization-name', 'Test Organization');
  await page.fill('#organization-type', 'Test Org Type');
  await fillDefaultValues(page);

  // 2. Submit the form
  await submitAndFinish(page);
});

test('Unable to submit without proper data entered', async ({ page }) => {
  await page.goto(requestUrl);

  // 1. Fill in the request form
  await page.selectOption('#requestor-type', { label: 'Individual' });
  // Skip the mask/test amounts
  await fillDefaultValues(page, true);

  // 2. Try to submit the form
  await page.click("#request-submit");

  // 3. Expect to find an error message
  const error = page.locator('.request-form-error');
  await expect(error).toHaveText('Please request at least one mask size or box of COVID tests.');

  // 4. Update the amounts
  await page.fill('#request-amount-regular', '10');

  // 5. Submit the form
  await submitAndFinish(page);
});

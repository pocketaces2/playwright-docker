// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');


test.describe('UI tests for bookstore using playwright', () => {

  let browser = null;

  test.beforeEach(async ({ page, baseURL }) => {
  });



  test('A playwright test method', async ({ page }) => {

    //Go to the base URL
    await page.goto('/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    const getStarted = page.getByText('Get Started');


    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/docs/intro');

    // Click the get started link.
    await getStarted.click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
})

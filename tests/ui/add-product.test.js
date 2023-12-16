const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com/add-product';

test('Check add products page', async ({ page }) => {
    await page.goto(url);
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  
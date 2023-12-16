const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com/shopping-list';

test('Check shopping list page', async ({ page }) => {
    await page.goto(url);
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  
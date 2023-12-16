const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com';

test('Check header', async ({ page }) => {
    await page.goto(url); 
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    const expected = 'Home';
    expect(text).toBe(expected);
  });
  
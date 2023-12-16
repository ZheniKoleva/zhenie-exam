const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com/';

test('Check home page', async ({ page }) => {
    await page.goto(url);
    const heading = await page.$('h1');
    const text = await heading.textContent();
    const expected = 'My Shopping List';
    expect(text).toContain(expected);  
  });
  
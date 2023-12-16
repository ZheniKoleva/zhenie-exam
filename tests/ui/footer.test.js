const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com';

test('Check footer', async ({ page }) => {
    await page.goto(url);  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    const expected = '© 2023 - Software Engineering and DevOps regular exam';
    expect(text).toContain(expected);
  });
  
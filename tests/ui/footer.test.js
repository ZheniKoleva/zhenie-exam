const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('http://localhost:8080');  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    const expected = '© 2023 - Software Engineering and DevOps regular exam';
    expect(text).toContain(expected);
  });
  
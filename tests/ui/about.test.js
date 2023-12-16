const { test, expect } = require('@playwright/test');
const url = 'https://zhenie-exam.onrender.com/about';

test('Check about page', async ({ page }) => {
  await page.goto(url);
  const heading = await page.$('h1');
  const text = await heading.textContent();
  const expected = 'About';
  expect(text).toBe(expected);
});

test('Check about page test', async ({ page }) => {
  await page.goto(url);
  const heading = await page.$('p');
  const text = await heading.textContent();
  const expected = 'This is the Regular exam for Software Engineering and DevOps course @ SoftUni'
  expect(text).toBe(expected);
});

import { test, expect } from '@playwright/test';

test('Complete E2E feedback form journey', async ({ page }) => {
  // Visit the homepage
  await page.goto('http://localhost:5173/');

  // Click the link to Feedback page
  await page.click('a[href="/feedback"]');

  // Verify we're on the feedback page
  await expect(page).toHaveURL(/.*\/feedback/);

  // Fill out the form
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  await page.fill('textarea[name="message"]', 'This is a feedback message.');

  // Optional: Validate input values
  await expect(page.locator('input[name="name"]')).toHaveValue('John Doe');
  await expect(page.locator('input[name="email"]')).toHaveValue('john.doe@example.com');
  await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a feedback message.');

  // Submit the form
  await page.click('button[type="submit"]');

  // Verify confirmation message
  await expect(page.locator('text=Thanks for your feedback!')).toBeVisible();
});
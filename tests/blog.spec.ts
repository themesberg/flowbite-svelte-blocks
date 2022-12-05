import { expect, test } from '@playwright/test';

test('Blog page has expected h1', async ({ page }) => {
  await page.goto('/publisher/blog');
  expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Templates - Flowbite-Svelte-Blocks');
});

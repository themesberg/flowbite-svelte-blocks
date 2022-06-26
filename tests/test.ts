import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Flowbite-Svelte-Blocks');
});

test('blog page has expected h2', async ({ page }) => {
	await page.goto('/blocks/blog');
	expect(await page.textContent('h2')).toBe('Our Blog');
});

test('content page has expected h2', async ({ page }) => {
	await page.goto('/blocks/content');
	expect(await page.textContent('h2')).toBe('Powering innovation at 200,000+ companies worldwide');
});

test('cta page has expected h2', async ({ page }) => {
	await page.goto('/blocks/cta');
	expect(await page.textContent('h2')).toBe('Let\'s find more that brings us together.');
});

test('customer-logo page has expected h2', async ({ page }) => {
	await page.goto('/blocks/customer-logo');
	expect(await page.textContent('h2')).toBe('You’ll be in good company');
});

test('examples page has expected h1', async ({ page }) => {
	await page.goto('/examples');
	expect(await page.textContent('h1')).toBe('Payments tool for software companies');
});

test('feature page has expected h2', async ({ page }) => {
	await page.goto('/blocks/feature');
	expect(await page.textContent('h2')).toBe('You’ll be in good company');
});

test('footer page has expected span', async ({ page }) => {
	await page.goto('/blocks/footer');
	expect(await page.textContent('span')).toBe('Flowbite');
});

test('header page has expected span', async ({ page }) => {
	await page.goto('/blocks/header');
	expect(await page.textContent('span')).toBe('Flowbite');
});

test('hero page has expected h2', async ({ page }) => {
	await page.goto('/blocks/hero');
	expect(await page.textContent('h2')).toBe('Default hero section');
});

test('maintenance page has expected h1', async ({ page }) => {
	await page.goto('/blocks/maintenance');
	expect(await page.textContent('h1')).toBe('Under Maintenance');
});

test('page404 page has expected h1', async ({ page }) => {
	await page.goto('/blocks/page404');
	expect(await page.textContent('h1')).toBe('404');
});

test('page500 page has expected h1', async ({ page }) => {
	await page.goto('/blocks/page500');
	expect(await page.textContent('h1')).toBe('500');
});
import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Flowbite Blocks - Tailwind UI components');
});

test('example page has expected h1', async ({ page }) => {
	await page.goto('/example');
	expect(await page.textContent('h1')).toBe('Payments tool for software companies');
});

test('Acount Recovery Form page has expected h1', async ({ page }) => {
	await page.goto('/marketing/account-recovery');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Account Recovery Form - Flowbite-Svelte-Blocks');
});

test('Blog Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/blog');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Sections - Flowbite-Svelte-Blocks');
});

test('Banners page has expected h1', async ({ page }) => {
	await page.goto('/marketing/banner');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Banner - Flowbite-Svelte-Blocks');
});

test('Blog Templates page has expected h1', async ({ page }) => {
	await page.goto('/publisher/blog');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Templates - Flowbite-Svelte-Blocks');
});

test('Cookie Consent page has expected h1', async ({ page }) => {
	await page.goto('/marketing/cookie');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Cookie Consent - Flowbite-Svelte-Blocks');
});

test('Contact Forms page has expected h1', async ({ page }) => {
	await page.goto('/marketing/contact');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Contact Form - Flowbite-Svelte-Blocks');
});

test('Content Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/content');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Content Sections - Flowbite-Svelte-Blocks');
});

test('Delete Confirm (CRUD) page has expected h1', async ({ page }) => {
	await page.goto('/marketing/crud-delete-confirm');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Delete Confirm (CRUD) - Flowbite-Svelte-Blocks');
});

test('CTA Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/cta');
	expect(await page.textContent('h1')).toBe('Tailwind CSS CTA Sections - Flowbite-Svelte-Blocks');
});

test('Customer Logos page has expected h1', async ({ page }) => {
	await page.goto('/marketing/customer-logos');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Customer Logos - Flowbite-Svelte-Blocks');
});

test('FAQ Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/faq');
	expect(await page.textContent('h1')).toBe('Tailwind CSS FAQ Sections - Flowbite-Svelte-Blocks');
});

test('Footer Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/footer');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Footer Sections - Flowbite-Svelte-Blocks');
});

test('Feature Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/feature');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Feature Sections - Flowbite-Svelte-Blocks');
});

test('Hero Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/hero');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Hero Sections - Flowbite-Svelte-Blocks');
});

test('Header page has expected h1', async ({ page }) => {
	await page.goto('/marketing/header');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Header - Flowbite-Svelte-Blocks');
});

test('Login Forms page has expected h1', async ({ page }) => {
	await page.goto('/marketing/login');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Login Form - Flowbite-Svelte-Blocks');
});

test('Maintenance Pages page has expected h1', async ({ page }) => {
	await page.goto('/marketing/maintenance');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Maintenance Pages - Flowbite-Svelte-Blocks');
});

test('Newsletter Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/newsletter');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Newsletter - Flowbite-Svelte-Blocks');
});

test('404 Page page has expected h1', async ({ page }) => {
	await page.goto('/marketing/404');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 404 Page - Flowbite-Svelte-Blocks');
});

test('500 Page page has expected h1', async ({ page }) => {
	await page.goto('/marketing/500');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 500 Page - Flowbite-Svelte-Blocks');
});

test('Popup page has expected h1', async ({ page }) => {
	await page.goto('/marketing/popup');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Popup - Flowbite-Svelte-Blocks');
});

test('Pricing Table has expected h1', async ({ page }) => {
	await page.goto('/marketing/pricing');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Pricing Table - Flowbite-Svelte-Blocks');
});

test('Register Forms has expected h1', async ({ page }) => {
	await page.goto('/marketing/register');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Register Form - Flowbite-Svelte-Blocks');
});

test('Reset Password Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/reset-password');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Reset Password Form - Flowbite-Svelte-Blocks');
});

test('Social Proof Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/social-proof');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Social Proof - Flowbite-Svelte-Blocks');
});

test('Team Sections Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/team');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Team Sections - Flowbite-Svelte-Blocks');
});

test('Testimonials has expected h1', async ({ page }) => {
	await page.goto('/marketing/testimonial');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Testimonials - Flowbite-Svelte-Blocks');
});

test('User Onboarding has expected h1', async ({ page }) => {
	await page.goto('/marketing/user-onboarding');
	expect(await page.textContent('h1')).toBe('Tailwind CSS User Onboarding - Flowbite-Svelte-Blocks');
});
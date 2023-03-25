import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Flowbite Blocks in Svelte -Tailwind UI components');
});

test('Application UI page has expected h1', async ({ page }) => {
	await page.goto('/application');
	expect(await page.textContent('h1')).toBe('Application UI');
});

test('Marketing UI page has expected h1', async ({ page }) => {
	await page.goto('/marketing');
	expect(await page.textContent('h1')).toBe('Marketing UI');
});

test('Publisher UI page has expected h1', async ({ page }) => {
	await page.goto('/publisher');
	expect(await page.textContent('h1')).toBe('Publisher UI');
});

test('example page has expected h1', async ({ page }) => {
	await page.goto('/example');
	expect(await page.textContent('h1')).toBe('Payments tool for software companies');
});

test('404 Page page has expected h1', async ({ page }) => {
	await page.goto('/marketing/404');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 404 Pages - Flowbite Blocks in Svelte');
});

test('500 Page page has expected h1', async ({ page }) => {
	await page.goto('/marketing/500');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 500 Pages - Flowbite Blocks in Svelte');
});

test('Account Recovery Form page has expected h1', async ({ page }) => {
	await page.goto('/marketing/account-recovery');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Account Recovery Form - Flowbite Blocks in Svelte');
});

test('Advanced table has expected h1', async ({ page }) => {
	await page.goto('/application/advanced-tables');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Advanced Tables - Flowbite Blocks in Svelte');
});

test('Banners page has expected h1', async ({ page }) => {
	await page.goto('/marketing/banner');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Banner - Flowbite Blocks in Svelte');
});

test('Blog templates has expected h1', async ({ page }) => {
	await page.goto('/publisher/blog-templates');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Templates - Flowbite Blocks in Svelte');
});

test('Blog Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/blog');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Sections - Flowbite Blocks in Svelte');
});

test('Comments Sections has expected h1', async ({ page }) => {
	await page.goto('/publisher/comments');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Comments Sections - Flowbite Blocks in Svelte');
});

test('Contact Forms page has expected h1', async ({ page }) => {
	await page.goto('/marketing/contact');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Contact Form - Flowbite Blocks in Svelte');
});

test('Content Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/content');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Content Sections - Flowbite Blocks in Svelte');
});

test('Cookie Consent page has expected h1', async ({ page }) => {
	await page.goto('/marketing/cookie');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Cookie Consent - Flowbite Blocks in Svelte');
});

test('Create Drawers (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-create-drawers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Create Drawers (CRUD) - Flowbite Blocks in Svelte');
});

test('Create Formss (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-create-forms');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Create Forms (CRUD) - Flowbite Blocks in Svelte');
});

test('Create Modals (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-create-modals');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Create Modals (CRUD) - Flowbite Blocks in Svelte');
});

test('Delte Confirm (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-delete-confirm');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Delete Confirm (CRUD) - Flowbite Blocks in Svelte');
});

test('Read Drawers (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-read-drawers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Read Drawers (CRUD) - Flowbite Blocks in Svelte');
});

test('Read Modals (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-read-modals');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Read Modals (CRUD) - Flowbite Blocks in Svelte');
});

test('Read Sections (CRUD)  has expected h1', async ({ page }) => {
	await page.goto('/application/crud-read-sections');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Read Sections (CRUD) - Flowbite Blocks in Svelte');
});

test('Crud Success Message  has expected h1', async ({ page }) => {
	await page.goto('/application/crud-success-message');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Success Message (CRUD) - Flowbite Blocks in Svelte');
});

test('Update Drawers (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-update-drawers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Update Drawers (CRUD) - Flowbite Blocks in Svelte');
});

test('Update Forms (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-update-forms');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Update Forms (CRUD) - Flowbite Blocks in Svelte');
});

test('Update Modals (CRUD) has expected h1', async ({ page }) => {
	await page.goto('/application/crud-update-modals');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Update Modals (CRUD) - Flowbite Blocks in Svelte');
});

test('CTA Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/cta');
	expect(await page.textContent('h1')).toBe('Tailwind CSS CTA Sections - Flowbite Blocks in Svelte');
});

test('Customer Logos page has expected h1', async ({ page }) => {
	await page.goto('/marketing/customer-logos');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Customer Logos - Flowbite Blocks in Svelte');
});

test('Dashboard Footers has expected h1', async ({ page }) => {
	await page.goto('/application/dashboard-footer');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Dashboard Footers - Flowbite Blocks in Svelte');
});

test('Delete Confirm (CRUD) page has expected h1', async ({ page }) => {
	await page.goto('/marketing/event-schedule');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Event Schedule - Flowbite Blocks in Svelte');
});

test('Faceted Search Drawers has expected h1', async ({ page }) => {
	await page.goto('/application/faceted-search-drawers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Faceted Search Drawers - Flowbite Blocks in Svelte');
});

test('Faceted Search Modals has expected h1', async ({ page }) => {
	await page.goto('/application/faceted-search-modals');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Faceted Search Modals - Flowbite Blocks in Svelte');
});

test('FAQ Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/faq');
	expect(await page.textContent('h1')).toBe('Tailwind CSS FAQ Sections - Flowbite Blocks in Svelte');
});

test('Feature Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/feature');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Feature Sections - Flowbite Blocks in Svelte');
});

test('Filters has expected h1', async ({ page }) => {
	await page.goto('/application/filter');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Dropdown Filters - Flowbite Blocks in Svelte');
});

test('Footer Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/footer');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Footer Sections - Flowbite Blocks in Svelte');
});

test('Header page has expected h1', async ({ page }) => {
	await page.goto('/marketing/header');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Headers - Flowbite Blocks in Svelte');
});

test('Hero Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/hero');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Hero Sections - Flowbite Blocks in Svelte');
});

test('Login Forms page has expected h1', async ({ page }) => {
	await page.goto('/marketing/login');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Login Forms - Flowbite Blocks in Svelte');
});

test('Maintenance Pages page has expected h1', async ({ page }) => {
	await page.goto('/marketing/maintenance');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Maintenance Pages - Flowbite Blocks in Svelte');
});

test('Navbar has expected h1', async ({ page }) => {
	await page.goto('/application/navbar');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Dashboard Navbars - Flowbite Blocks in Svelte');
});

test('Newsletter Sections page has expected h1', async ({ page }) => {
	await page.goto('/marketing/newsletter');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Newsletter Sections - Flowbite Blocks in Svelte');
});

test('Popup page has expected h1', async ({ page }) => {
	await page.goto('/marketing/popup');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Popups - Flowbite Blocks in Svelte');
});

test('Portfolio page has expected h1', async ({ page }) => {
	await page.goto('/marketing/portfolio');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Portfolio - Flowbite Blocks in Svelte');
});

test('Pricing Table has expected h1', async ({ page }) => {
	await page.goto('/marketing/pricing');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Pricing Tables - Flowbite Blocks in Svelte');
});

test('Register Forms has expected h1', async ({ page }) => {
	await page.goto('/marketing/register');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Register Forms - Flowbite Blocks in Svelte');
});

test('Related Articles has expected h1', async ({ page }) => {
	await page.goto('/publisher/related-articles');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Related Articles - Flowbite Blocks in Svelte');
});

test('Reset Password Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/reset-password');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Reset Password Forms - Flowbite Blocks in Svelte');
});

test('Schedule page has expected h1', async ({ page }) => {
	await page.goto('/marketing/event-schedule');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Event Schedule - Flowbite Blocks in Svelte');
});

test('Sidenav has expected h1', async ({ page }) => {
	await page.goto('/application/sidenav');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Side Navigations - Flowbite Blocks in Svelte');
});

test('Social Proof Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/social-proof');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Social Proof - Flowbite Blocks in Svelte');
});

test('Table Footers has expected h1', async ({ page }) => {
	await page.goto('/application/table-footers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Table Footers - Flowbite Blocks in Svelte');
});

test('Table Headers has expected h1', async ({ page }) => {
	await page.goto('/application/table-headers');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Table Headers - Flowbite Blocks in Svelte');
});

test('Team Sections Form has expected h1', async ({ page }) => {
	await page.goto('/marketing/team');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Team Sections - Flowbite Blocks in Svelte');
});

test('Testimonial has expected h1', async ({ page }) => {
	await page.goto('/marketing/testimonial');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Testimonial - Flowbite Blocks in Svelte');
});

test('User Onboarding has expected h1', async ({ page }) => {
	await page.goto('/marketing/user-onboarding');
	expect(await page.textContent('h1')).toBe('Tailwind CSS User Onboarding - Flowbite Blocks in Svelte');
});

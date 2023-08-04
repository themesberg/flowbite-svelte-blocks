import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Flowbite Blocks in Svelte');
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
  expect(await page.textContent('h1')).toBe('Svelte 404 Pages - Flowbite');
});

test('500 Page page has expected h1', async ({ page }) => {
  await page.goto('/marketing/500');
  expect(await page.textContent('h1')).toBe('Svelte 500 Pages - Flowbite');
});

test('Account Recovery Form page has expected h1', async ({ page }) => {
  await page.goto('/marketing/account-recovery');
  expect(await page.textContent('h1')).toBe('Svelte Account Recovery Form - Flowbite');
});

test('Advanced table has expected h1', async ({ page }) => {
  await page.goto('/application/advanced-tables');
  expect(await page.textContent('h1')).toBe('Svelte Advanced Tables - Flowbite');
});

test('Banners page has expected h1', async ({ page }) => {
  await page.goto('/marketing/banner');
  expect(await page.textContent('h1')).toBe('Svelte Banner - Flowbite');
});

test('Blog templates has expected h1', async ({ page }) => {
  await page.goto('/publisher/blog-templates');
  expect(await page.textContent('h1')).toBe('Svelte Blog Templates - Flowbite');
});

test('Blog Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/blog');
  expect(await page.textContent('h1')).toBe('Svelte Blog Sections - Flowbite');
});

test('Comments Sections has expected h1', async ({ page }) => {
  await page.goto('/publisher/comments');
  expect(await page.textContent('h1')).toBe('Svelte Comments Sections - Flowbite');
});

test('Contact Forms page has expected h1', async ({ page }) => {
  await page.goto('/marketing/contact');
  expect(await page.textContent('h1')).toBe('Svelte Contact Form - Flowbite');
});

test('Content Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/content');
  expect(await page.textContent('h1')).toBe('Svelte Content Sections - Flowbite');
});

test('Cookie Consent page has expected h1', async ({ page }) => {
  await page.goto('/marketing/cookie');
  expect(await page.textContent('h1')).toBe('Svelte Cookie Consent - Flowbite');
});

test('Create Drawers (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-create-drawers');
  expect(await page.textContent('h1')).toBe('Svelte Create Drawers (CRUD) - Flowbite');
});

test('Create Formss (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-create-forms');
  expect(await page.textContent('h1')).toBe('Svelte Create Forms (CRUD) - Flowbite');
});

test('Create Modals (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-create-modals');
  expect(await page.textContent('h1')).toBe('Svelte Create Modals (CRUD) - Flowbite');
});

test('Delte Confirm (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-delete-confirm');
  expect(await page.textContent('h1')).toBe('Svelte Delete Confirm (CRUD) - Flowbite');
});

test('Read Drawers (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-read-drawers');
  expect(await page.textContent('h1')).toBe('Svelte Read Drawers (CRUD) - Flowbite');
});

test('Read Modals (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-read-modals');
  expect(await page.textContent('h1')).toBe('Svelte Read Modals (CRUD) - Flowbite');
});

test('Read Sections (CRUD)  has expected h1', async ({ page }) => {
  await page.goto('/application/crud-read-sections');
  expect(await page.textContent('h1')).toBe('Svelte Read Sections (CRUD) - Flowbite');
});

test('Crud Success Message  has expected h1', async ({ page }) => {
  await page.goto('/application/crud-success-message');
  expect(await page.textContent('h1')).toBe('Svelte Success Message (CRUD) - Flowbite');
});

test('Update Drawers (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-update-drawers');
  expect(await page.textContent('h1')).toBe('Svelte Update Drawers (CRUD) - Flowbite');
});

test('Update Forms (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-update-forms');
  expect(await page.textContent('h1')).toBe('Svelte Update Forms (CRUD) - Flowbite');
});

test('Update Modals (CRUD) has expected h1', async ({ page }) => {
  await page.goto('/application/crud-update-modals');
  expect(await page.textContent('h1')).toBe('Svelte Update Modals (CRUD) - Flowbite');
});

test('CTA Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/cta');
  expect(await page.textContent('h1')).toBe('Svelte CTA Sections - Flowbite');
});

test('Customer Logos page has expected h1', async ({ page }) => {
  await page.goto('/marketing/customer-logos');
  expect(await page.textContent('h1')).toBe('Svelte Customer Logos - Flowbite');
});

test('Dashboard Footers has expected h1', async ({ page }) => {
  await page.goto('/application/dashboard-footer');
  expect(await page.textContent('h1')).toBe('Svelte Dashboard Footers - Flowbite');
});

test('Delete Confirm (CRUD) page has expected h1', async ({ page }) => {
  await page.goto('/marketing/event-schedule');
  expect(await page.textContent('h1')).toBe('Svelte Event Schedule - Flowbite');
});

test('Faceted Search Drawers has expected h1', async ({ page }) => {
  await page.goto('/application/faceted-search-drawers');
  expect(await page.textContent('h1')).toBe('Svelte Faceted Search Drawers - Flowbite');
});

test('Faceted Search Modals has expected h1', async ({ page }) => {
  await page.goto('/application/faceted-search-modals');
  expect(await page.textContent('h1')).toBe('Svelte Faceted Search Modals - Flowbite');
});

test('FAQ Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/faq');
  expect(await page.textContent('h1')).toBe('Svelte FAQ Sections - Flowbite');
});

test('Feature Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/feature');
  expect(await page.textContent('h1')).toBe('Svelte Feature Sections - Flowbite');
});

test('Filters has expected h1', async ({ page }) => {
  await page.goto('/application/filter');
  expect(await page.textContent('h1')).toBe('Svelte Dropdown Filters - Flowbite');
});

test('Footer Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/footer');
  expect(await page.textContent('h1')).toBe('Svelte Footer Sections - Flowbite');
});

test('Header page has expected h1', async ({ page }) => {
  await page.goto('/marketing/header');
  expect(await page.textContent('h1')).toBe('Svelte Headers - Flowbite');
});

test('Hero Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/hero');
  expect(await page.textContent('h1')).toBe('Svelte Hero Sections - Flowbite');
});

test('Login Forms page has expected h1', async ({ page }) => {
  await page.goto('/marketing/login');
  expect(await page.textContent('h1')).toBe('Svelte Login Forms - Flowbite');
});

test('Maintenance Pages page has expected h1', async ({ page }) => {
  await page.goto('/marketing/maintenance');
  expect(await page.textContent('h1')).toBe('Svelte Maintenance Pages - Flowbite');
});

test('Navbar has expected h1', async ({ page }) => {
  await page.goto('/application/navbar');
  expect(await page.textContent('h1')).toBe('Svelte Dashboard Navbars - Flowbite');
});

test('Newsletter Sections page has expected h1', async ({ page }) => {
  await page.goto('/marketing/newsletter');
  expect(await page.textContent('h1')).toBe('Svelte Newsletter Sections - Flowbite');
});

test('Popup page has expected h1', async ({ page }) => {
  await page.goto('/marketing/popup');
  expect(await page.textContent('h1')).toBe('Svelte Popups - Flowbite');
});

test('Portfolio page has expected h1', async ({ page }) => {
  await page.goto('/marketing/portfolio');
  expect(await page.textContent('h1')).toBe('Svelte Portfolio - Flowbite');
});

test('Pricing Table has expected h1', async ({ page }) => {
  await page.goto('/marketing/pricing');
  expect(await page.textContent('h1')).toBe('Svelte Pricing Tables - Flowbite');
});

test('Register Forms has expected h1', async ({ page }) => {
  await page.goto('/marketing/register');
  expect(await page.textContent('h1')).toBe('Svelte Register Forms - Flowbite');
});

test('Related Articles has expected h1', async ({ page }) => {
  await page.goto('/publisher/related-articles');
  expect(await page.textContent('h1')).toBe('Svelte Related Articles - Flowbite');
});

test('Reset Password Form has expected h1', async ({ page }) => {
  await page.goto('/marketing/reset-password');
  expect(await page.textContent('h1')).toBe('Svelte Reset Password Forms - Flowbite');
});

test('Schedule page has expected h1', async ({ page }) => {
  await page.goto('/marketing/event-schedule');
  expect(await page.textContent('h1')).toBe('Svelte Event Schedule - Flowbite');
});

test('Sidenav has expected h1', async ({ page }) => {
  await page.goto('/application/sidenav');
  expect(await page.textContent('h1')).toBe('Svelte Side Navigations - Flowbite');
});

test('Social Proof Form has expected h1', async ({ page }) => {
  await page.goto('/marketing/social-proof');
  expect(await page.textContent('h1')).toBe('Svelte Social Proof - Flowbite');
});

test('Table Footers has expected h1', async ({ page }) => {
  await page.goto('/application/table-footers');
  expect(await page.textContent('h1')).toBe('Svelte Table Footers - Flowbite');
});

test('Table Headers has expected h1', async ({ page }) => {
  await page.goto('/application/table-headers');
  expect(await page.textContent('h1')).toBe('Svelte Table Headers - Flowbite');
});

test('Team Sections Form has expected h1', async ({ page }) => {
  await page.goto('/marketing/team');
  expect(await page.textContent('h1')).toBe('Svelte Team Sections - Flowbite');
});

test('Testimonial has expected h1', async ({ page }) => {
  await page.goto('/marketing/testimonial');
  expect(await page.textContent('h1')).toBe('Svelte Testimonial - Flowbite');
});

test('User Onboarding has expected h1', async ({ page }) => {
  await page.goto('/marketing/user-onboarding');
  expect(await page.textContent('h1')).toBe('Svelte User Onboarding - Flowbite');
});

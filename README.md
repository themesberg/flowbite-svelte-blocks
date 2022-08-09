# Flowbite-Svelte-Blocks

## Demo

[Flowbite-Svelte-Blocks](https://flowbite-svelte-blocks.vercel.app/)

## Blocks

- 404
- 500
- Account recovery
- Banner
- Blog
- Contact
- Content
- Cookie
- CTA
- Customer logos
- FAQ
- Feature
- Footer
- Header
- Hero
- Login
- Maintenance
- Newsletter
- Popup
- Pricing
- Register
- Reset password
- Social-proof
- Team
- Testimoanial

## Getting started

Use this library on top of [Flowbite-Svelte](https://github.com/themesberg/flowbite-svelte). Flowbite-Svelte is an official Flowbite component library for Svelte.

### Installing from scratch

Install SvelteKit:

```sh
npm init svelte@next sveltekit-demo 
cd sveltekit-demo
npm install 
```

Install Tailwind CSS:

```sh
npx svelte-add@latest tailwindcss
npm i
```

Run it:

```sh
npm run dev
```

Install flowbite and flowbite-svelte:

```sh
npm i -D flowbite flowbite-svelte
```

Update tailwind.config.cjs:

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

Install Flowbite-Svelte-Blocks

```sh
npm i -D flowbite-svelte-blocks
```

## Using a starter

[Flowbite-Svelte-Starter Demo](https://flowbite-svelte-starter.vercel.app/)

This starter contains:

- Svelte
- SvelteKit
- Tailwind CSS
- Flowbite
- Flowbite-Svelte
- Flowbite-Svelte-Blocks
- ESlint
- Typescript
- Playwright
- Prettier
- Svelte-heros(Heroicons)
- Darkmode activated

### Installation

```sh
npx degit shinokada/flowbite-svelte-starter my-demo
cd my-demo
pnpm i // or npm i
pnpm run dev // or npm run dev
```

### Other examples/themes

#### Svelte-Sidebar-Example

If you want to see [a svelte-sidebar demo](https://flowbite-svelte-starter.vercel.app/):

```sh
git checkout svelte-sidebar-example
```

### Jaco example

```sh
git checkout jaco
```

### Plain

```sh
git checkout plain
```

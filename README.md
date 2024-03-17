<h1 align="center">Flowbite Svelte Blocks</h1>

<p align="center">
<a href="https://flowbite-svelte-blocks.codewithshin.com/" rel="nofollow">Flowbite Svelte Blocks</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/flowbite-svelte-blocks" rel="nofollow"><img src="https://img.shields.io/npm/v/flowbite-svelte-blocks" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/themesberg/flowbite-svelte-blocks" alt="License"></a>
</p>

**⚠️ Flowbite-Svelte-Blocks is currently in early development and APIs and packages are likely to change quite often.**

## Demo

[Flowbite Svelte Blocks](https://flowbite-svelte-blocks.codewithshin.com/)

## Installation

This library is built on top of [Flowbite-Svelte](https://github.com/themesberg/flowbite-svelte) and [Flowbite-Svelte-Icons](https://flowbite-svelte-icons.codewithshin.com/). Flowbite-Svelte is an official Flowbite component library for Svelte.

Install SvelteKit:

```sh
npm create svelte@latest your-project-name
cd your-project-name
pnpm install
```

Install Tailwind CSS:

```sh
npx svelte-add@latest tailwindcss
pnpm i
```

Start a server:

```sh
pnpm run dev
```

Install flowbite-svelte-blocks:

```sh
pnpm i flowbite-svelte flowbite-svelte-blocks flowbite-svelte-icons
```

Update tailwind.config.cjs:

```js
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};

module.exports = config;
```

## Update tailwind.config.cjs

Current `theme` config is the following. You can update `primary` color and other config.

```js
theme: {
    extend: {
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337"}
      }
    },
    fontFamily: {
      'body': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
  ],
    'sans': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]
    }
  },
```

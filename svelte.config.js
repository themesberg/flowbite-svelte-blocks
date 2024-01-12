import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    }),
    vitePreprocess(),
    mdsvex(mdsvexConfig)
  ],
  vitePlugin: {
    inspector: {
      holdMode: true
    }
  },
  kit: {
    adapter: adapter({ runtime: 'edge' })
  }
};

export default config;

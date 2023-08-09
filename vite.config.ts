import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
import examples from 'mdsvexamples/vite';

export default defineConfig({
  plugins: [sveltekit(), examples],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    port: 8082,
    strictPort: false
  },
  resolve: {
    alias: {
      'flowbite-svelte-blocks': path.resolve(process.cwd(), './src/lib/index.js')
    }
  }
});

import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import examples from 'mdsvexamples/vite';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), examples],
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	},
	resolve: {
		alias: {
			'flowbite-svelte-blocks': path.resolve(process.cwd(), './src/lib/index.ts')
		}
	},
	define: {
		__NAME__: JSON.stringify(pkg.name),
		__VERSION__: JSON.stringify(pkg.version)
	}
});

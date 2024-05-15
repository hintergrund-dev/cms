import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
				css: 'injected',
				dev: false
			}
		})
	],
	build: {
		outDir: 'dist',
		lib: {
			name: 'HgAdmin',
			entry: './src/lib/index.js',
			formats: ['es'],
			fileName: 'index'
		}
	}
});

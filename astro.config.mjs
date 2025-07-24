// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://lightboard.cl",
	integrations: [
		sitemap({
			lastmod: new Date(),
		}),
	],
	build: {
		inlineStylesheets: "always", // Inline CSS crítico
	},
	vite: {
		build: {
			cssMinify: true,
			rollupOptions: {
				output: {
					manualChunks: undefined, // Evitar chunking innecesario
				},
			},
		},
	},
});

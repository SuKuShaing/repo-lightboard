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
		inlineStylesheets: "always", // "always" para que el css se incrusta en el html siempre; "auto" para que se incrusta solo si es crítico, el resto se coloca en un archivo css el cual es llamado desde el head; "never" para que no nunca se incruste ningún css y se coloca en un archivo css
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

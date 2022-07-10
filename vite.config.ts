import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(),VitePWA({ 
		registerType: 'autoUpdate',
		workbox: {
			globPatterns: ['**/*{js,css,html,ico,png,svg}'],
			maximumFileSizeToCacheInBytes: 5000000
		  },
		  manifest: {
			"background_color": "#ffffff",
			"theme_color": "#7E1F86",
			"name": "Code Snippets",
			"short_name": "Code Snippets",
			"description" : "Save your Code Snippets",
			"start_url": "/",
			"display": "standalone",
			"icons": [
				{
					"src": "code.png",
					"sizes": "512x512",
					"type": "image/png"
				}
			]
		}
	  })],
	resolve: {
		alias: {
			$lib: resolve("./src/lib")
		}
	}
});

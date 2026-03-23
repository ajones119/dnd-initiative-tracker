// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: 'https://aiinitiativetracker.com',
  vite: {
    plugins: [tailwindcss(), svgr()],
  },

  integrations: [react(), sitemap()],
});
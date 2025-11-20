// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://khnnyy.github.io/portfolio-website',
  base: '/portfolio-website',
  vite: {
    plugins: [tailwindcss()],
  },
});

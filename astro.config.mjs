// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://niklaslindroos.fi",
  fonts: [
    {
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal", "italic"],
      fallbacks: ["serif"],
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ["normal"],
      fallbacks: ["system-ui", "-apple-system", "sans-serif"],
    },
  ],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});

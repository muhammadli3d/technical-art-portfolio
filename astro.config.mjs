import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://muhammadli3d.github.io',
  base: '/technical-art-portfolio',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    assets: 'assets',
  },
});

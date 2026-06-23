import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://secompp.cacic.dev.br',
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/event-manager-api': {
          target: 'https://eventos.cacic.dev.br',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/event-manager-api/, '/api'),
        },
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
    },
  ],
});

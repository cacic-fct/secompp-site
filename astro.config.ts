import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://secompp.cacic.dev.br',
  integrations: [svelte(), sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
    },
  ],
});

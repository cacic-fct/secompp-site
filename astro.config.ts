import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://secompp.cacic.dev.br',
  integrations: [svelte(), sitemap()],
});

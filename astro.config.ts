import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// Astro-Shield Configuration
import { shield } from '@kindspells/astro-shield';
import { resolve } from 'node:path';

// Generate hashes for external resources
// Avoids Plausible hijacking
const rootDir = new URL('.', import.meta.url).pathname;
const modulePath = resolve(rootDir, 'src', 'generated', 'sriHashes.mjs');

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(),    
    shield({
    sri: { hashesModule: modulePath, enableMiddleware: true },
    securityHeaders: {
      contentSecurityPolicy: {
        cspDirectives: {
          'default-src': "'none'",
          'script-src': "'self' https://plausible.fctapp.yudi.me",
        },
      },
    },
  }),]
});

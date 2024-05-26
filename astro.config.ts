import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// Astro-Shield Configuration
import { shield, type ShieldOptions } from '@kindspells/astro-shield';
import { resolve } from 'node:path';

// Generate hashes for external resources
// Avoids Plausible hijacking
const rootDir = new URL('.', import.meta.url).pathname;
const modulePath = resolve(rootDir, 'src', 'generated', 'sriHashes.mjs');

const isProd = import.meta.env.PROD;

let shieldConfig: ShieldOptions = {};

if (isProd) {
  shieldConfig = {
    sri: { hashesModule: modulePath, enableMiddleware: true },
    securityHeaders: {
      contentSecurityPolicy: {
        cspDirectives: {
          'default-src': "'none'",
          'script-src': "'self' https://plausible.fctapp.yudi.me",
          'img-src': "'self'",
          'frame-src': 'https://www.google.com/maps/embed/',
          'font-src': "'self'"
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), shield(shieldConfig)]
});

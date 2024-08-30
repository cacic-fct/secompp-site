import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    files: ['*.astro'],
    languageOptions: {
      parser: 'astro-eslint-parser',
      globals: globals.browser,
    },
  },
  {
    files: ['*.svelte'],
    languageOptions: {
      parser: svelteParser,
      globals: globals.browser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    ignores: ['src/env.d.ts'],
  },
];

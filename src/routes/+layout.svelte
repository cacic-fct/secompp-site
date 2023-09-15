<script lang="ts">
  import '$lib/styles/global.pcss';
  import { dev } from '$app/environment';
  import Nav from './index-components/nav.svelte';
  import Footer from './index-components/Footer/Footer.svelte';
</script>

<svelte:head>
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2C02PKBCL5"></script>
    <script lang="ts">
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'G-2C02PKBCL5');
    </script>
  {/if}
</svelte:head>

<Nav />

<slot />

<Footer />

<script lang="ts">
  import { ministerHasDetailInfo } from '@lib/shared/EventMinister';
  import type { EventMinister } from '@lib/shared/EventMinister';
  import { Mail, Link } from 'lucide-svelte';

  export let minister: EventMinister;
</script>

<div class="minister-info d-grid mx-1 rounded px-3 py-2 shadow">
  <h6 class="font-bold">{minister.name}</h6>
  {#if ministerHasDetailInfo(minister)}
    {#if minister.description}
      <span class="small pre-wrap">{minister.description}</span>
    {/if}
    {#if minister.link}
      <a class="minister-url smaller" href={minister.link.path} target="_blank">
        <Link width="22" height="22" color="white" />{minister.link.label ?? minister.link.path}
      </a>
    {/if}
    {#if minister.email}
      <a class="minister-email smaller" href="mailto:{minister.email}" target="_blank">
        <Mail color="white" />{minister.email ?? minister.email}
      </a>
    {/if}
  {/if}
</div>

<style lang="postcss">
  @import './_styles.pcss';
  @import 'src/styles/_variables.pcss';
  .minister-url,
  .minister-email {
    text-decoration: none;
    color: $body-color;
    margin-top: $sp-2;
    width: fit-content;
    @mixin transition;

    &:hover,
    &:active,
    &:focus-visible {
      color: $primary-color;
      text-decoration: underline;
      border: 0;
      outline: 0;
    }
  }

  .minister-email {
    margin-left: 3px;
    :global(svg) {
      margin-right: $sp-1;
    }
  }

  .minister-url :global(svg) {
    margin-right: calc($sp-1 - 3px);
  }

  h6 {
    height: fit-content;
    margin: 0;
    @mixin transition;
  }

  .minister-info {
    @media (max-width: 573px) {
      margin-bottom: $sp-2;
    }

    h6 {
      margin-top: 0;
    }

    span {
      margin: $sp-1 0;
      @mixin transition;
    }

    &:hover,
    &:focus {
      background: rgb(47, 49, 51);
      border-color: $primary-color;

      h6 {
        &:first-child {
          color: $primary-color;
        }
      }
    }

    background: rgb(38, 39, 41);
    border: 1px solid transparent;
    @mixin transition;
  }
</style>

<script lang="ts">
  import { lecturerHasDetailInfo } from '@lib/shared/EventLecturer';
  import type { EventLecturer } from '@lib/shared/EventLecturer';
  import { Link, Mail } from 'lucide-svelte';

  export let lecturer: EventLecturer;
</script>

<div class="lecturer-info d-grid mx-1 rounded px-3 py-2 shadow">
  <div class="lecturer-heading">
    {#if lecturer.avatarUrl}
      <img src={lecturer.avatarUrl} alt="" loading="lazy" />
    {/if}
    <h6 class="font-bold">{lecturer.name}</h6>
  </div>
  {#if lecturerHasDetailInfo(lecturer)}
    {#if lecturer.description}
      <span class="small pre-wrap">{lecturer.description}</span>
    {/if}
    {#if lecturer.link}
      <a class="lecturer-url smaller" href={lecturer.link.path} target="_blank">
        <Link width="22" height="22" color="white" />{lecturer.link.label ?? lecturer.link.path}
      </a>
    {/if}
    {#if lecturer.email}
      <a class="lecturer-email smaller" href="mailto:{lecturer.email}" target="_blank">
        <Mail color="white" />{lecturer.email ?? lecturer.email}
      </a>
    {/if}
  {/if}
</div>

<style lang="postcss">
  @import './_styles.pcss';
  @import '../../styles/_variables.pcss';
  .lecturer-url,
  .lecturer-email {
    align-items: center;
    display: inline-flex;
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

  .lecturer-email {
    margin-left: 3px;
    :global(svg) {
      margin-right: $sp-1;
    }
  }

  .lecturer-url :global(svg) {
    margin-right: calc($sp-1 - 3px);
  }

  h6 {
    height: fit-content;
    margin: 0;
    @mixin transition;
  }

  .lecturer-heading {
    align-items: center;
    display: flex;
    gap: $sp-2;
  }

  .lecturer-heading img {
    border-radius: 999px;
    height: 40px;
    object-fit: cover;
    width: 40px;
  }

  .lecturer-info {
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

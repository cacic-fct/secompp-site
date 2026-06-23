<script lang="ts">
  import { lecturerHasDetailInfo } from '@lib/shared/EventLecturer';
  import type { EventLecturer } from '@lib/shared/EventLecturer';
  import { Link, Mail } from 'lucide-svelte';

  export let lecturer: EventLecturer;
</script>

<div class="lecturer-info mx-1 rounded px-3 py-2 shadow">
  <div class="lecturer-heading">
    {#if lecturer.avatarUrl}
      <img src={lecturer.avatarUrl} alt="" loading="lazy" />
    {/if}
    <h6 class="font-bold">{lecturer.name}</h6>
  </div>
  {#if lecturerHasDetailInfo(lecturer)}
    {#if lecturer.description}
      <span class="lecturer-description pre-wrap">{lecturer.description}</span>
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
  .lecturer-url,
  .lecturer-email {
    align-items: center;
    color: var(--color-base-content);
    display: inline-flex;
    margin-top: 0.5rem;
    text-decoration: none;
    transition: 0.3s;
    width: fit-content;

    &:hover,
    &:active,
    &:focus-visible {
      border: 0;
      color: var(--color-primary);
      outline: 0;
      text-decoration: underline;
    }
  }

  .lecturer-email {
    margin-left: 3px;
    :global(svg) {
      margin-right: 0.25rem;
    }
  }

  .lecturer-url :global(svg) {
    margin-right: calc(0.25rem - 3px);
  }

  h6 {
    height: fit-content;
    margin: 0;
    transition: 0.3s;
  }

  .lecturer-heading {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  .lecturer-heading img {
    border-radius: 999px;
    height: 40px;
    object-fit: cover;
    width: 40px;
  }

  .lecturer-info {
    background: rgb(38, 39, 41);
    border: 1px solid transparent;
    display: grid;
    transition: 0.3s;

    @media (max-width: 573px) {
      margin-bottom: 0.5rem;
    }

    h6 {
      margin-top: 0;
    }

    span {
      margin: 0.25rem 0;
      transition: 0.3s;
    }

    &:hover,
    &:focus {
      background: rgb(47, 49, 51);
      border-color: var(--color-primary);

      h6 {
        &:first-child {
          color: var(--color-primary);
        }
      }
    }
  }

  .lecturer-description {
    font-size: 0.875rem;
  }
</style>

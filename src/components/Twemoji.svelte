<script lang="ts">
  import { getTwemojiUrl } from '@lib/shared/Twemoji';

  export let emoji: string | null | undefined;
  export let label = '';
  export let className = '';

  $: normalizedEmoji = emoji?.trim() || '❔';
  $: src = getTwemojiUrl(normalizedEmoji);
</script>

{#if src}
  <img class="twemoji {className}" {src} alt={label || normalizedEmoji} loading="lazy" />
{:else}
  <span class={className} aria-label={label || normalizedEmoji}>{normalizedEmoji}</span>
{/if}

<style>
  .twemoji {
    display: block;
    height: var(--twemoji-size, 1.5rem);
    width: var(--twemoji-size, 1.5rem);
  }
</style>

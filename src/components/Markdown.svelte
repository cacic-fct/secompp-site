<script lang="ts">
  import type { WindowLike } from 'dompurify';

  export let content: string | null | undefined = '';

  let renderedHtml = '';
  let renderSequence = 0;

  $: void renderContent(content);

  async function renderContent(markdownSource: string | null | undefined) {
    const sequence = ++renderSequence;
    const source = markdownSource ?? '';

    if (typeof window === 'undefined' || source === '') {
      renderedHtml = '';
      return;
    }

    try {
      const { renderMarkdown } = await import('@lib/shared/Markdown');

      if (sequence === renderSequence) {
        renderedHtml = renderMarkdown(source, window as unknown as WindowLike);
      }
    } catch {
      if (sequence === renderSequence) {
        renderedHtml = '';
      }
    }
  }
</script>

<div class="markdown-body event-markdown">{@html renderedHtml}</div>

<style lang="postcss">
  .event-markdown {
    --bgColor-default: transparent;
    --bgColor-muted: color-mix(in srgb, var(--color-base-content) 8%, transparent);
    --bgColor-neutral-muted: color-mix(in srgb, var(--color-base-content) 10%, transparent);
    --borderColor-default: color-mix(in srgb, var(--color-base-content) 22%, transparent);
    --borderColor-muted: color-mix(in srgb, var(--color-base-content) 14%, transparent);
    --fgColor-accent: var(--color-primary);
    --fgColor-default: var(--color-base-content);
    --fgColor-muted: color-mix(in srgb, var(--color-base-content) 68%, transparent);
    --focus-outlineColor: var(--color-primary);
    background-color: inherit;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    font-size: 0.95rem;
    line-height: 1.65;
    max-width: none;
    overflow-wrap: anywhere;
    padding: 0;
  }

  .event-markdown :global(.katex-display) {
    overflow-x: auto;
    overflow-y: hidden;
    padding-block: 0.25rem;
  }

  .event-markdown :global(a) {
    text-underline-offset: 0.18em;
  }
</style>

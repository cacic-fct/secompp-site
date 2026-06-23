<script lang="ts">
  import type { ScheduleEventType } from '@lib/shared/ScheduleEvent';
  import { getScheduleEventTypeLabel } from '@lib/shared/ScheduleEventUtils';
  import { Mic2, Monitor } from 'lucide-svelte';

  export let type: ScheduleEventType;

  $: label = getScheduleEventTypeLabel(type);
</script>

<span class="badge badge-sm" class:badge-primary={type === 'palestra'}>
  {#if type === 'palestra'}
    <Mic2 size="13" aria-hidden="true" />
  {:else}
    <Monitor size="13" aria-hidden="true" />
  {/if}
  {label}
</span>

<style lang="postcss">
  .badge {
    gap: 0.25rem;
    height: 1.35rem;
    padding-inline: 0.42rem;
  }
</style>

<script lang="ts">
  import type { ScheduleEvent, ScheduleEventClickHandler } from '@lib/shared/ScheduleEvent';
  import EventSummaryCard from './EventSummaryCard.svelte';

  export let event: ScheduleEvent;
  export let onClickEvent: ScheduleEventClickHandler;
</script>

<td class="event-cell-wrapper">
  <EventSummaryCard {event} {onClickEvent} />
</td>

<style lang="postcss">
  td {
    height: 100%;
    padding: 0;

    &:not(:first-child) {
      color: var(--color-base-content);
      min-width: 214px;
    }
  }
</style>

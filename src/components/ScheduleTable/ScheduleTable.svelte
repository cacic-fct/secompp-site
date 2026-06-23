<script lang="ts">
  import type { ScheduleDay, ScheduleEventClickHandler, ScheduleEventList } from '@lib/shared/ScheduleEvent';
  import { createScheduleGrid } from '@lib/shared/ScheduleEventUtils';
  import Caption from './Caption.svelte';
  import CaptionPalestra from './CaptionPalestra.svelte';
  import ScheduleTableRow from './ScheduleTableRow.svelte';

  export let title: string;
  export let subtitle = '';
  export let type: 'minicurso' | 'palestra';
  export let days: ScheduleDay[];
  export let events: ScheduleEventList;
  export let onClickEvent: ScheduleEventClickHandler;

  $: scheduleGrid = createScheduleGrid(events, days);
</script>

{#if events.length}
  <div class="schedule-container container mx-auto px-4">
    <h1>{title}</h1>
    {#if subtitle}
      <span>{subtitle}</span>
    {/if}
    <div class="scrolling-touch block w-full overflow-auto pt-8" style="--bs-secondary-rgb: 255, 255, 255">
      <table class="mb-4 w-full max-w-full bg-transparent">
        <thead class="text-left">
          <tr>
            <th class="bw-0"></th>
            {#each days as day (day.key)}
              <th>
                <span>{day.weekday}</span>
                <span class="day-label">{day.dateLabel}</span>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="align-top">
          {#each scheduleGrid as schedule}
            <ScheduleTableRow {onClickEvent} {schedule} />
          {/each}
        </tbody>
      </table>
    </div>
    {#if type === 'palestra'}
      <CaptionPalestra />
    {:else}
      <Caption />
    {/if}
  </div>
{/if}

<style lang="postcss">
  @import './_styles.pcss';

  .schedule-container {
    @media (min-width: 576px) {
      max-width: 767px;
    }

    @media (min-width: 768px) {
      max-width: 991px;
      padding: 24px;
    }

    @media (min-width: 992px) {
      max-width: 1232px;
      padding: 24px;
    }

    padding-bottom: 0;
  }

  th {
    &:first-child {
      @mixin cell-first-child;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), 45%, rgba(0, 0, 0, 0));
    }

    border: 0;

    &:not(:first-child) {
      min-width: 200px;
      vertical-align: bottom;
    }
  }

  th span {
    display: block;
  }

  .day-label {
    color: var(--bs-gray-500);
    font-size: 0.75rem;
    font-weight: 400;
  }

  table {
    border-collapse: separate;
    border-spacing: 8px;
  }
</style>

<script lang="ts">
  import minicursosIcon from '@lib/img/minicursos.svg';
  import palestrasIcon from '@lib/img/palestras.svg';
  import type { ScheduleDay, ScheduleEventClickHandler, ScheduleEventList } from '@lib/shared/ScheduleEvent';
  import { createScheduleGrid } from '@lib/shared/ScheduleEventUtils';
  import ScheduleCaption from './ScheduleCaption.svelte';
  import ScheduleTableRow from './ScheduleTableRow.svelte';

  export let title: string;
  export let subtitle = '';
  export let type: 'minicurso' | 'palestra';
  export let days: ScheduleDay[];
  export let events: ScheduleEventList;
  export let onClickEvent: ScheduleEventClickHandler;

  $: scheduleGrid = createScheduleGrid(events, days);
  $: caption =
    type === 'palestra' ? { icon: palestrasIcon, label: 'Palestra' } : { icon: minicursosIcon, label: 'Minicurso' };
</script>

{#if events.length}
  <div class="schedule-container container mx-auto px-4">
    <div class="desktop-section-heading">
      <h1>{title}</h1>
    </div>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    <div class="block w-full overflow-auto pt-7">
      <table class="mb-4 w-full max-w-full bg-transparent" aria-label={title}>
        <thead class="text-left">
          <tr>
            <th class="border-0"></th>
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
    <ScheduleCaption icon={caption.icon} label={caption.label} />
  </div>
{/if}

<style lang="postcss">
  .schedule-container {
    border-top: 1px solid color-mix(in srgb, var(--color-base-content) 16%, transparent);
    padding-bottom: 0;
    padding-top: 32px;
  }

  .desktop-section-heading {
    align-items: end;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .desktop-section-heading h1 {
    line-height: 1;
    margin: 0;
  }

  .subtitle {
    color: color-mix(in srgb, var(--color-base-content) 78%, transparent);
    font-size: 1rem;
    margin-top: 0.65rem;
  }

  th {
    &:first-child {
      background: linear-gradient(45deg, color-mix(in srgb, var(--color-base-100) 82%, transparent), 45%, transparent);
      left: 0;
      position: sticky;
      z-index: 2;

      @media (max-width: 574px) {
        left: -1px;
      }
    }

    border: 0;
    color: var(--color-base-content);
    padding: 0.35rem;

    &:not(:first-child) {
      min-width: 214px;
      vertical-align: bottom;
    }
  }

  th span {
    display: block;
  }

  .day-label {
    color: color-mix(in srgb, var(--color-base-content) 62%, transparent);
    font-size: 0.75rem;
    font-weight: 400;
  }

  table {
    border-collapse: separate;
    border-spacing: 0.35rem;
  }
</style>

<script lang="ts">
  import minicursosIcon from '@lib/img/minicursos.svg';
  import palestrasIcon from '@lib/img/palestras.svg';
  import type { ScheduleEventClickHandler, ScheduleEventRow } from '@lib/shared/ScheduleEvent';
  import { getEventType, getScheduleEventTypeLabel } from '@lib/shared/ScheduleEventUtils';
  import ScheduleTableCell from './ScheduleTableCell.svelte';

  export let schedule: ScheduleEventRow;
  export let onClickEvent: ScheduleEventClickHandler;

  $: type = getEventType(schedule);
  $: typeLabel = getScheduleEventTypeLabel(type);

  const icon = {
    minicurso: { desc: 'Minicursos', src: minicursosIcon },
    palestra: { desc: 'Palestras', src: palestrasIcon },
  };
</script>

<tr>
  <td class="time-cell">
    <div class="time-cell-content">
      <img src={icon[type].src.src} alt={icon[type].desc} loading="lazy" class="table-icon" />
      <span>{schedule.startTime}</span>
      <small>{typeLabel}</small>
    </div>
  </td>
  {#each schedule.cells as events}
    {#if events.length}
      <ScheduleTableCell {onClickEvent} event={events[0]} />
    {:else}
      <td class="empty-cell" aria-hidden="true" aria-disabled="true"></td>
    {/if}
  {/each}
</tr>

<style lang="postcss">
  .table-icon {
    filter: var(--schedule-icon-filter);
    opacity: var(--schedule-icon-opacity);
    width: 22px;
  }

  td {
    height: 100%;
    padding: 0.35rem;

    &:first-child {
      background: linear-gradient(
        90deg,
        var(--color-base-100) 78%,
        color-mix(in srgb, var(--color-base-100) 0%, transparent)
      );
      left: 0;
      padding-left: 0;
      position: sticky;
      z-index: 2;

      @media (max-width: 574px) {
        left: -1px;
      }
    }

    &:not(:first-child) {
      color: var(--color-base-content);
      min-width: 214px;
    }

    &[aria-disabled] {
      min-width: 214px;
      border-width: 0;
    }
  }

  tr {
    height: 1px;
  }

  .time-cell-content {
    align-items: center;
    align-content: center;
    color: var(--color-base-content);
    display: grid;
    font-weight: 800;
    gap: 0.25rem;
    grid-auto-rows: max-content;
    height: 100%;
    justify-items: center;
    min-width: 82px;
    padding: 0.6rem 0.7rem;
  }

  .time-cell-content small {
    color: color-mix(in srgb, var(--color-base-content) 60%, transparent);
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .empty-cell {
    background: color-mix(in srgb, var(--color-base-200) 26%, transparent);
    border-radius: var(--radius-box);
  }
</style>

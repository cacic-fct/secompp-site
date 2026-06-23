<script lang="ts">
  import minicursosIcon from '@lib/img/minicursos.svg';
  import palestrasIcon from '@lib/img/palestras.svg';
  import type { ScheduleEventClickHandler, ScheduleEventRow } from '@lib/shared/ScheduleEvent';
  import { getEventType } from '@lib/shared/ScheduleEventUtils';
  import ScheduleTableCell from './ScheduleTableCell.svelte';

  export let schedule: ScheduleEventRow;
  export let onClickEvent: ScheduleEventClickHandler;

  $: type = getEventType(schedule);

  const icon = {
    minicurso: { desc: 'Minicursos', src: minicursosIcon },
    palestra: { desc: 'Palestras', src: palestrasIcon },
  };
</script>

<tr>
  <td>
    <div>
      <img src={icon[type].src.src} alt={icon[type].desc} loading="lazy" class="table-icon" />
      {schedule.startTime}
    </div>
  </td>
  {#each schedule.cells as events}
    {#if events.length}
      <ScheduleTableCell {onClickEvent} event={events[0]} />
    {:else}
      <td aria-hidden="true" aria-disabled="true"></td>
    {/if}
  {/each}
</tr>

<style lang="postcss">
  @import './_styles.pcss';

  .table-icon {
    filter: invert(100%) sepia(64%) saturate(532%) hue-rotate(353deg) brightness(109%) contrast(99%);
    float: right;
    width: 24px;
  }

  td {
    padding: 8px;

    &:first-child {
      @mixin cell-first-child;
      background-color: #000;
      padding: 32px;
      padding-left: 0;

      div {
        @media (min-width: 574px) {
          display: flex;
          img {
            margin-right: 0.75rem;
          }
        }

        @media (max-width: 573px) {
          display: grid;
          justify-items: center;
          img {
            margin-bottom: 0.35rem;
          }
        }
      }
    }

    &:not(:first-child) {
      min-width: 200px;
      color: $body-color;
    }

    &[aria-disabled] {
      min-width: 200px;
      border-width: 0;
    }
  }
</style>

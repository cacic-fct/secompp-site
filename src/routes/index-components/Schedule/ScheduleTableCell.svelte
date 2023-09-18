<script lang="ts">
  import type { ScheduleEvent, ScheduleEventClickHandler } from '$lib/shared/ScheduleEvent';

  export let event: ScheduleEvent;
  export let onClickEvent: ScheduleEventClickHandler;
  let click = () => onClickEvent(event);
</script>

<td tabindex="0" role="button" class="shadow-sm">
  <div class="block" on:click={click}>
    <span class="font-bold">{event.eventName}</span>
    {#if event.shortDescription}
      <br />
      <span class="smaller">
        {event.shortDescription}
      </span>
    {/if}
  </div>
</td>

<style lang="postcss">
  @import './_styles.pcss';

  td {
    padding: 8px;
    border-width: 0;
    outline: 0 solid transparent;

    span {
      transition: $transition-duration;
      &:not(:first-child) {
        color: var(--bs-gray-500);
      }
    }

    &:not(:first-child) {
      min-width: 200px;
      color: $body-color;
    }

    &:not([aria-disabled], :first-child) {
      padding: 8px;
      border-radius: $border-radius;
      transition: $transition-duration;
      outline: 1px solid hsla(0, 3%, 60%, 0.336);

      &:hover,
      &:focus-visible {
        background: rgba(52, 58, 64, 0.4);
        outline: 1px solid $primary-color;
        box-shadow: 0 0.125rem 0.25rem rgb(253 189 0 / 45%) !important;

        span {
          color: $body-color;

          &:first-child {
            color: $primary-color;
          }
        }
      }
    }
  }
</style>

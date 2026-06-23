<script lang="ts">
  import type { ScheduleEvent } from '@lib/shared/ScheduleEvent';

  export let event: ScheduleEvent;
</script>

<div id="event-info" class="container mx-auto">
  {#if event.groupName}
    <div class="flex flex-wrap">
      <div class="relative max-w-full flex-1 flex-grow md:w-1/5">
        <span class="font-bold">Atividade:</span>
      </div>
      <div class="relative max-w-full flex-1 flex-grow px-4">
        {event.groupName}
      </div>
    </div>
  {/if}
  {#if event.fullDescription !== ''}
    <br />
    <div class="pre-wrap">{event.fullDescription}</div>
  {:else if event.shortDescription !== ''}
    <br />
    {event.shortDescription}
  {/if}
</div>

<script lang="ts">
  import type { ScheduleEvent } from '@lib/shared/ScheduleEvent';

  import { X } from 'lucide-svelte';

  import EventInfo from './EventInfo.svelte';
  import EventMinisterList from './EventMinisterList.svelte';

  export let isModalOpen: boolean;
  export let toggleModal: () => void;
  export let event: ScheduleEvent;

  $: type = event.type[0]?.toUpperCase() + event.type.slice(1);
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
  <div class=" modal-box bg-base-200">
    <form method="dialog" style="">
      <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2" on:click={() => toggleModal()}>
        <X />
      </button>
    </form>
    <h3 class="pb-8 pr-4 text-lg font-bold text-[var(--primary-color)]">{event.eventName} - {type}</h3>
    <EventInfo {event} />
    <EventMinisterList ministers={event.ministers} />
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={() => toggleModal()}>close</button>
  </form>
</dialog>

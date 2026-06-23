<script lang="ts">
  import { onMount } from 'svelte';
  import type { ScheduleEvent } from '@lib/shared/ScheduleEvent';

  import { X } from 'lucide-svelte';

  import EventInfo from './EventInfo.svelte';
  import EventLecturerList from './EventLecturerList.svelte';

  export let isModalOpen: boolean;
  export let toggleModal: () => void;
  export let event: ScheduleEvent;

  $: type = event.type[0]?.toUpperCase() + event.type.slice(1);

  onMount(() => {
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === 'Escape' && isModalOpen) {
        keyboardEvent.preventDefault();
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box bg-base-200">
    <form method="dialog">
      <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2" on:click={() => toggleModal()}>
        <X />
      </button>
    </form>
    <h3 class="pb-8 pr-4 text-lg font-bold text-[var(--primary-color)]">{event.eventName} - {type}</h3>
    <EventInfo {event} />
    <EventLecturerList lecturers={event.lecturers} />
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={() => toggleModal()}>close</button>
  </form>
</dialog>

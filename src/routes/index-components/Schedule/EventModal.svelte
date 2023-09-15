<script lang="ts">
  import type { ScheduleEvent } from '$lib/shared/ScheduleEvent';

  // import { Modal, ModalBody, ModalHeader } from 'sveltestrap';
  import EventInfo from './EventInfo.svelte';
  import EventMinisterList from './EventMinisterList.svelte';

  export let isModalOpen: boolean;
  export let toggleModal: () => void;
  export let event: ScheduleEvent;

  $: type = event.type[0].toUpperCase() + event.type.slice(1);
</script>

<!-- <Modal isOpen={isModalOpen} toggle={toggleModal}>
  <ModalHeader toggle={toggleModal}></ModalHeader>
  <ModalBody></ModalBody>
</Modal> -->

<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">{event.eventName} - {type}</h3>
    <EventInfo {event} />
    <EventMinisterList ministers={event.ministers} />
  </div>
</dialog>

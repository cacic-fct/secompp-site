<script lang="ts">
  import { format } from 'date-fns';
  import { ptBR } from 'date-fns/locale';
  import { onMount } from 'svelte';
  import type { ScheduleEvent } from '@lib/shared/ScheduleEvent';

  import { SquareArrowOutUpRight, X } from 'lucide-svelte';
  import { getEventEnd, getEventStart } from '@lib/shared/ScheduleEventUtils';

  import EventInfo from './EventInfo.svelte';
  import EventLecturerList from './EventLecturerList.svelte';
  import EventTypeBadge from './EventTypeBadge.svelte';
  import Twemoji from '../Twemoji.svelte';

  export let isModalOpen: boolean;
  export let toggleModal: () => void;
  export let event: ScheduleEvent;

  let isScrollLocked = false;
  let lastTouchY: number | undefined;

  const getOpenModalBox = () => document.querySelector<HTMLElement>('.event-dialog.modal-open .modal-box');

  const capitalize = (value: string) => value.charAt(0).toLocaleUpperCase('pt-BR') + value.slice(1);

  const getEventModalDate = (event: ScheduleEvent) =>
    capitalize(format(event.startTime, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR }));

  const getEventModalBox = (event: Event) => {
    const modalBox = getOpenModalBox();

    return event.target instanceof Node && modalBox?.contains(event.target) ? modalBox : undefined;
  };

  const preventBackgroundWheelScroll = (wheelEvent: WheelEvent) => {
    const modalBox = getEventModalBox(wheelEvent);

    if (modalBox) {
      modalBox.scrollTop += wheelEvent.deltaY;
    }

    wheelEvent.preventDefault();
  };

  const recordTouchStart = (touchEvent: TouchEvent) => {
    lastTouchY = getEventModalBox(touchEvent) ? touchEvent.touches[0]?.clientY : undefined;
  };

  const preventBackgroundTouchScroll = (touchEvent: TouchEvent) => {
    const modalBox = getEventModalBox(touchEvent);
    const touchY = touchEvent.touches[0]?.clientY;

    if (modalBox && lastTouchY !== undefined && touchY !== undefined) {
      modalBox.scrollTop += lastTouchY - touchY;
      lastTouchY = touchY;
    }

    touchEvent.preventDefault();
  };

  const preventBackgroundKeyboardScroll = (keyboardEvent: KeyboardEvent) => {
    const scrollingKeys = [' ', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp'];

    if (!scrollingKeys.includes(keyboardEvent.key) || getEventModalBox(keyboardEvent)) {
      return;
    }

    keyboardEvent.preventDefault();
  };

  const lockPageScroll = () => {
    if (isScrollLocked) {
      return;
    }

    document.documentElement.classList.add('event-modal-scroll-lock');
    window.addEventListener('wheel', preventBackgroundWheelScroll, { passive: false, capture: true });
    window.addEventListener('touchstart', recordTouchStart, { passive: true, capture: true });
    window.addEventListener('touchmove', preventBackgroundTouchScroll, { passive: false, capture: true });
    window.addEventListener('keydown', preventBackgroundKeyboardScroll, { capture: true });
    isScrollLocked = true;
  };

  const unlockPageScroll = () => {
    if (!isScrollLocked) {
      return;
    }

    document.documentElement.classList.remove('event-modal-scroll-lock');
    window.removeEventListener('wheel', preventBackgroundWheelScroll, { capture: true });
    window.removeEventListener('touchstart', recordTouchStart, { capture: true });
    window.removeEventListener('touchmove', preventBackgroundTouchScroll, { capture: true });
    window.removeEventListener('keydown', preventBackgroundKeyboardScroll, { capture: true });
    lastTouchY = undefined;
    isScrollLocked = false;
  };

  $: if (typeof document !== 'undefined') {
    if (isModalOpen) {
      lockPageScroll();
    } else if (!isModalOpen && isScrollLocked) {
      unlockPageScroll();
    }
  }

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
      if (isScrollLocked) {
        unlockPageScroll();
      }
    };
  });
</script>

<dialog class="modal modal-bottom event-dialog sm:modal-middle" class:modal-open={isModalOpen}>
  <div class="modal-box event-modal">
    <form method="dialog">
      <button
        class="btn btn-circle btn-ghost btn-sm absolute top-3 right-3"
        aria-label="Fechar detalhes do evento"
        on:click={() => toggleModal()}>
        <X size="18" />
      </button>
    </form>
    <div class="modal-heading">
      <span class="emoji-frame" aria-hidden="true">
        <Twemoji emoji={event.emoji} label={event.eventName} />
      </span>
      <div>
        <EventTypeBadge type={event.type} />
        <h3>{event.eventName}</h3>
        <p>{getEventModalDate(event)}</p>
        <p>Das {getEventStart(event)} às {getEventEnd(event)}</p>
        <p>{event.place}</p>
      </div>
    </div>
    <EventInfo {event} />
    <EventLecturerList lecturers={event.lecturers} />
    <div class="modal-actions">
      <a class="btn btn-primary event-manager-link" href={`https://eventos.cacic.com.br/app/event/${event.id}`}>
        <span>Ver no CACiC Eventos</span>
        <SquareArrowOutUpRight size="18" aria-hidden="true" />
      </a>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={() => toggleModal()}>close</button>
  </form>
</dialog>

<style lang="postcss">
  :global(.event-dialog),
  :global(.event-dialog::backdrop),
  :global(.event-dialog .modal-box),
  :global(.event-dialog .modal-backdrop) {
    animation-duration: 90ms;
    transition-duration: 90ms;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(.event-dialog),
    :global(.event-dialog::backdrop),
    :global(.event-dialog .modal-box),
    :global(.event-dialog .modal-backdrop) {
      animation-duration: 1ms;
      transition-duration: 1ms;
    }
  }

  .event-modal {
    background: var(--color-base-200);
    border: 1px solid color-mix(in srgb, var(--color-base-content) 12%, transparent);
    color: var(--color-base-content);
    max-width: 760px;
  }

  .modal-heading {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding-bottom: 1.5rem;
    padding-right: 2rem;
  }

  .emoji-frame {
    align-items: center;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    width: 48px;
  }

  .emoji-frame :global(.twemoji) {
    --twemoji-size: 32px;
  }

  h3 {
    color: var(--color-base-content);
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0.45rem 0 0.35rem;
  }

  p {
    color: color-mix(in srgb, var(--color-base-content) 70%, transparent);
    font-size: 0.9rem;
    line-height: 1.35;
    margin: 0;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }

  .event-manager-link {
    align-items: center;
    gap: 0.5rem;
  }
</style>

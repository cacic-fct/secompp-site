<script lang="ts">
  import { fetchSecomppSchedule, type SecomppScheduleData } from '@lib/shared/EventManagerPublicApi';
  import type { ScheduleEvent, ScheduleEventClickHandler, ScheduleEventList } from '@lib/shared/ScheduleEvent';
  import {
    compareScheduleEvents,
    createScheduleDays,
    getShortLocationName,
    publicEventToScheduleEvent,
  } from '@lib/shared/ScheduleEventUtils';
  import { onMount } from 'svelte';
  import EventModal from './EventModal.svelte';
  import MobileScheduleTimeline from './MobileScheduleTimeline.svelte';
  import ScheduleTable from './ScheduleTable.svelte';

  type ScheduleTableModel = {
    id: string;
    title: string;
    subtitle: string;
    type: 'minicurso' | 'palestra';
    events: ScheduleEventList;
  };

  let isLoading = true;
  let errorMessage = '';
  let scheduleData: SecomppScheduleData | null = null;
  let isOpen = false;
  let event: ScheduleEvent | null = null;

  onMount(() => {
    void loadSchedule();
  });

  $: scheduleEvents = scheduleData
    ? scheduleData.events
        .map(publicEventToScheduleEvent)
        .filter((event): event is ScheduleEvent => event !== null)
        .sort(compareScheduleEvents)
    : [];
  $: days = createScheduleDays(scheduleData?.majorEvent ?? null, scheduleEvents);
  $: tableModels = createTableModels(scheduleEvents);
  $: hasScheduleEvents = tableModels.some((table) => table.events.length > 0);

  const closeModal = () => {
    isOpen = false;
  };

  const onClickEvent: ScheduleEventClickHandler = (selectedEvent) => {
    isOpen = true;
    event = selectedEvent;
  };

  async function loadSchedule() {
    isLoading = true;
    errorMessage = '';

    try {
      scheduleData = await fetchSecomppSchedule();
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : 'Não foi possível carregar a programação.';
    } finally {
      isLoading = false;
    }
  }

  function createTableModels(events: ScheduleEvent[]): ScheduleTableModel[] {
    const minicursosByLocation = new Map<string, ScheduleEvent[]>();
    const palestras: ScheduleEvent[] = [];

    for (const event of events) {
      if (event.type === 'palestra') {
        palestras.push(event);
        continue;
      }

      const locationEvents = minicursosByLocation.get(event.place) ?? [];
      locationEvents.push(event);
      minicursosByLocation.set(event.place, locationEvents);
    }

    const minicursoTables = [...minicursosByLocation.entries()]
      .sort(([left], [right]) => left.localeCompare(right, 'pt-BR', { numeric: true }))
      .map(([location, locationEvents]) => ({
        id: location,
        title: `Programação do ${getShortLocationName(location)}`,
        subtitle: `Recomenda-se levar o seu próprio computador`,
        type: 'minicurso' as const,
        events: locationEvents,
      }));

    return [
      ...minicursoTables,
      {
        id: 'palestras',
        title: 'Palestras',
        subtitle: getPalestraSubtitle(palestras),
        type: 'palestra' as const,
        events: palestras,
      },
    ];
  }

  function getPalestraSubtitle(events: ScheduleEvent[]) {
    const locations = [...new Set(events.map((event) => event.place))];
    return locations.length === 1 ? locations[0] : '';
  }
</script>

{#if isLoading}
  <div class="schedule-container container mx-auto px-4">
    <h1>Programação</h1>
    <p class="schedule-status">Carregando programação...</p>
  </div>
{:else if errorMessage}
  <div class="schedule-container container mx-auto px-4">
    <h1>Programação</h1>
    <p class="schedule-status text-red-300">{errorMessage}</p>
  </div>
{:else if !hasScheduleEvents}
  <div class="schedule-container container mx-auto px-4">
    <h1>Programação</h1>
    <p class="schedule-status">Nenhuma atividade publicada para este evento.</p>
  </div>
{:else}
  <MobileScheduleTimeline events={scheduleEvents} {days} {onClickEvent} />
  <div class="desktop-schedule hidden lg:block">
    {#each tableModels as table (table.id)}
      <ScheduleTable
        title={table.title}
        subtitle={table.subtitle}
        type={table.type}
        events={table.events}
        {days}
        {onClickEvent} />
    {/each}
  </div>
{/if}

{#if event}
  <EventModal {event} isModalOpen={isOpen} toggleModal={closeModal} />
{/if}

<style lang="postcss">
  .schedule-status {
    color: color-mix(in srgb, var(--color-base-content) 68%, transparent);
  }
</style>

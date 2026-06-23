<script lang="ts">
  import type { ScheduleDay, ScheduleEvent, ScheduleEventClickHandler } from '@lib/shared/ScheduleEvent';
  import { compareScheduleEvents, getEventDateKey, getEventStart } from '@lib/shared/ScheduleEventUtils';
  import { CalendarDays } from 'lucide-svelte';
  import EventSummaryCard from './EventSummaryCard.svelte';

  type TimelineSlot = {
    startTime: string;
    events: ScheduleEvent[];
  };

  export let days: ScheduleDay[];
  export let events: ScheduleEvent[];
  export let onClickEvent: ScheduleEventClickHandler;

  let selectedDayKey = '';

  $: daysWithEvents = days.map((day) => ({
    ...day,
    events: events.filter((event) => event.dateKey === day.key).sort(compareScheduleEvents),
  }));
  $: selectedDayKey = daysWithEvents.some((day) => day.key === selectedDayKey)
    ? selectedDayKey
    : getDefaultSelectedDayKey(daysWithEvents);
  $: selectedDay = daysWithEvents.find((day) => day.key === selectedDayKey);
  $: selectedSlots = createTimelineSlots(selectedDay?.events ?? []);

  function getDefaultSelectedDayKey(availableDays: ScheduleDay[]) {
    const currentDateKey = getEventDateKey(new Date());
    const currentDay = availableDays.find((day) => day.key === currentDateKey);

    return currentDay?.key ?? availableDays[0]?.key ?? '';
  }

  function createTimelineSlots(dayEvents: ScheduleEvent[]): TimelineSlot[] {
    const slots = new Map<string, ScheduleEvent[]>();

    for (const event of dayEvents) {
      const startTime = getEventStart(event);
      const slotEvents = slots.get(startTime) ?? [];
      slotEvents.push(event);
      slots.set(startTime, slotEvents);
    }

    return [...slots.entries()]
      .map(([startTime, slotEvents]) => ({
        startTime,
        events: slotEvents.sort(compareScheduleEvents),
      }))
      .sort((left, right) => left.startTime.localeCompare(right.startTime));
  }

  function shortWeekday(day: ScheduleDay) {
    return day.weekday.replace('-feira', '').slice(0, 3);
  }

  function shortDate(day: ScheduleDay) {
    return day.dateLabel.split('/').slice(0, 2).join('/');
  }
</script>

<section class="mobile-schedule lg:hidden" aria-labelledby="mobile-schedule-title">
  <div class="mobile-schedule-heading">
    <h1 id="mobile-schedule-title">Programação</h1>
  </div>

  <div class="day-tabs" role="tablist" aria-label="Dias da programação">
    {#each daysWithEvents as day (day.key)}
      <button
        type="button"
        role="tab"
        aria-selected={day.key === selectedDayKey}
        class="day-tab"
        class:active={day.key === selectedDayKey}
        on:click={() => (selectedDayKey = day.key)}>
        <span>{shortWeekday(day)}</span>
        <strong>{shortDate(day)}</strong>
      </button>
    {/each}
  </div>

  {#if selectedDay}
    <div class="selected-day-label">{selectedDay.weekday}, {selectedDay.dateLabel}</div>
  {/if}

  {#if selectedSlots.length === 0}
    <div class="empty-state">
      <CalendarDays size="32" aria-hidden="true" />
      <p>Nenhuma atividade neste dia.</p>
    </div>
  {:else}
    <div class="timeline" aria-label="Atividades do dia selecionado">
      {#each selectedSlots as slot (slot.startTime)}
        <section class="timeline-slot" aria-label="Atividades às {slot.startTime}">
          <div class="time-marker">
            <span class="timeline-dot" aria-hidden="true"></span>
            <time>{slot.startTime}</time>
          </div>

          <div class="event-stack">
            {#each slot.events as event (event.id)}
              <EventSummaryCard {event} {onClickEvent} variant="mobile" showLecturers shortLocation={false} />
            {/each}
          </div>
        </section>
      {/each}
    </div>
  {/if}
</section>

<style lang="postcss">
  .mobile-schedule {
    --mobile-time-sticky-top: 136px;

    padding: 28px 16px 18px;
  }

  .mobile-schedule-heading {
    margin: 0 auto 18px;
    max-width: 760px;
  }

  .mobile-schedule h1 {
    font-size: 2.25rem;
    line-height: 0.98;
    margin: 0;
  }

  @media (min-width: 480px) {
    .mobile-schedule h1 {
      font-size: 2.75rem;
    }
  }

  .day-tabs {
    background: color-mix(in srgb, var(--color-base-100) 92%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--color-base-content) 14%, transparent);
    display: flex;
    gap: 0.5rem;
    margin: 0 -16px;
    overflow-x: auto;
    padding: 0.65rem 16px;
    position: sticky;
    scrollbar-width: none;
    top: 64px;
    z-index: 20;
  }

  .day-tabs::-webkit-scrollbar {
    display: none;
  }

  .day-tab {
    align-items: center;
    background: var(--color-base-200);
    border: 1px solid color-mix(in srgb, var(--color-base-content) 14%, transparent);
    border-radius: 999px;
    color: var(--color-base-content);
    display: grid;
    flex: 0 0 auto;
    gap: 0.08rem;
    min-width: 72px;
    padding: 0.55rem 0.85rem;
    text-align: center;
    transition:
      background-color 0.2s,
      border-color 0.2s,
      color 0.2s;
  }

  .day-tab span {
    color: color-mix(in srgb, var(--color-base-content) 68%, transparent);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .day-tab strong {
    font-size: 0.95rem;
    line-height: 1;
  }

  .day-tab.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-primary-content);
  }

  .day-tab.active span {
    color: color-mix(in srgb, var(--color-primary-content) 72%, transparent);
  }

  .selected-day-label {
    color: color-mix(in srgb, var(--color-base-content) 70%, transparent);
    font-size: 0.9rem;
    font-weight: 600;
    margin: 1rem auto 0.6rem;
    max-width: 760px;
  }

  .timeline {
    display: grid;
    gap: 1.15rem;
    margin: 0 auto;
    max-width: 760px;
    padding-bottom: 1rem;
  }

  .timeline-slot {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 72px minmax(0, 1fr);
    position: relative;
  }

  .timeline-slot::before {
    background: color-mix(in srgb, var(--color-primary) 32%, transparent);
    bottom: -1.25rem;
    content: '';
    left: 8px;
    position: absolute;
    top: 1.25rem;
    width: 1px;
  }

  .timeline-slot:last-child::before {
    display: none;
  }

  .time-marker {
    align-content: start;
    align-self: start;
    background: linear-gradient(
      90deg,
      var(--color-base-100) 78%,
      color-mix(in srgb, var(--color-base-100) 0%, transparent)
    );
    color: var(--color-base-content);
    display: grid;
    font-size: 0.88rem;
    font-weight: 800;
    gap: 0.45rem;
    justify-items: start;
    min-width: 0;
    padding: 0.9rem 0.5rem 0.55rem 0;
    position: sticky;
    top: var(--mobile-time-sticky-top);
    z-index: 5;
  }

  .timeline-dot {
    background: var(--color-primary);
    border: 3px solid var(--color-base-100);
    border-radius: 999px;
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-primary) 60%, transparent);
    height: 17px;
    width: 17px;
  }

  .event-stack {
    display: grid;
    gap: 0.75rem;
    min-width: 0;
  }

  .empty-state {
    align-items: center;
    color: color-mix(in srgb, var(--color-base-content) 68%, transparent);
    display: grid;
    gap: 0.75rem;
    justify-items: center;
    min-height: 180px;
    text-align: center;
  }
</style>

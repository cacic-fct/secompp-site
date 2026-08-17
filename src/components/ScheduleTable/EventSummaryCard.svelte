<script lang="ts">
  import type { ScheduleEvent, ScheduleEventClickHandler } from '@lib/shared/ScheduleEvent';
  import {
    getEventEnd,
    getEventLecturerLine,
    getEventStart,
    getEventSummary,
    getShortLocationName,
  } from '@lib/shared/ScheduleEventUtils';
  import { Clock3, MapPin, Speech } from 'lucide-svelte';
  import Twemoji from '../Twemoji.svelte';
  import EventTypeBadge from './EventTypeBadge.svelte';

  export let event: ScheduleEvent;
  export let onClickEvent: ScheduleEventClickHandler;
  export let variant: 'desktop' | 'mobile' = 'desktop';
  export let showLecturers = false;
  export let shortLocation = true;

  const click = () => onClickEvent(event);

  $: summary = getEventSummary(event);
  $: location = shortLocation ? getShortLocationName(event.place) : event.place;
  $: lecturerLine = showLecturers ? getEventLecturerLine(event) : '';
</script>

<button type="button" class="event-card {variant}" aria-label="Abrir detalhes de {event.eventName}" on:click={click}>
  {#if variant === 'mobile'}
    <span class="mobile-topline">
      <span class="emoji-frame mobile-emoji" aria-hidden="true">
        <Twemoji emoji={event.emoji} label={event.eventName} />
      </span>

      <span class="event-topline">
        <EventTypeBadge type={event.type} />
        <span class="time-range">
          <Clock3 size="13" aria-hidden="true" />
          {getEventStart(event)} - {getEventEnd(event)}
        </span>
      </span>
    </span>

    <span class="event-content">
      <strong>{event.eventName}</strong>

      {#if summary}
        <span class="event-description">{summary}</span>
      {/if}

      <span class="event-meta">
        <MapPin size="14" aria-hidden="true" />
        <span>{location}</span>
      </span>

      {#if lecturerLine}
        <span class="event-meta">
          <Speech size="14" aria-hidden="true" />
          <span>{lecturerLine}</span>
        </span>
      {/if}
    </span>
  {:else}
    <span class="desktop-topline">
      <span class="emoji-frame desktop-emoji" aria-hidden="true">
        <Twemoji emoji={event.emoji} label={event.eventName} />
      </span>
      <EventTypeBadge type={event.type} />
    </span>

    <span class="event-title">{event.eventName}</span>

    {#if summary}
      <span class="event-description">{summary}</span>
    {/if}

    <span class="event-meta-row">
      <span class="event-meta time-range">
        <Clock3 size="13" aria-hidden="true" />
        <span>{getEventStart(event)} - {getEventEnd(event)}</span>
      </span>
      <span class="event-meta">
        <MapPin size="13" aria-hidden="true" />
        <span>{location}</span>
      </span>
      {#if lecturerLine}
        <span class="event-meta">
          <Speech size="13" aria-hidden="true" />
          <span>{lecturerLine}</span>
        </span>
      {/if}
    </span>
  {/if}
</button>

<style lang="postcss">
  .event-card {
    background: linear-gradient(145deg, color-mix(in srgb, var(--color-base-200) 96%, white 4%), var(--color-base-200));
    border: 1px solid color-mix(in srgb, var(--color-base-content) 15%, transparent);
    border-radius: var(--radius-box);
    color: var(--color-base-content);
    display: grid;
    min-width: 0;
    text-align: left;
    transition:
      border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
    width: 100%;
  }

  .event-card:hover,
  .event-card:focus-visible {
    border-color: var(--color-primary);
    outline: none;
  }

  .event-card:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 28%, transparent);
  }

  @media (hover: hover) and (pointer: fine) {
    .event-card:hover {
      box-shadow: 0 0.6rem 1.5rem color-mix(in srgb, var(--color-primary) 16%, transparent);
    }
  }

  .event-card.desktop {
    gap: 0.46rem;
    height: 100%;
    min-height: 132px;
    padding: 0.8rem;
  }

  .event-card.mobile {
    gap: 0.75rem;
    grid-template-columns: minmax(0, 1fr);
    padding: 0.85rem;
  }

  .desktop-topline {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-width: 0;
  }

  .emoji-frame {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }

  .desktop-emoji {
    height: 34px;
    width: 34px;
  }

  .desktop-emoji :global(.twemoji) {
    --twemoji-size: 23px;
  }

  .mobile-emoji {
    height: 44px;
    width: 44px;
  }

  .mobile-emoji :global(.twemoji) {
    --twemoji-size: 30px;
  }

  .event-title {
    color: var(--color-base-content);
    display: block;
    font-weight: 800;
    line-height: 1.28;
  }

  .event-content {
    display: grid;
    gap: 0.36rem;
    min-width: 0;
  }

  .mobile-topline {
    align-items: center;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
    min-width: 0;
  }

  .event-topline {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.36rem;
    min-width: 0;
  }

  .time-range,
  .event-meta {
    align-items: start;
    color: color-mix(in srgb, var(--color-base-content) 70%, transparent);
    display: grid;
    gap: 0.35rem;
    grid-template-columns: auto minmax(0, 1fr);
    min-width: 0;
  }

  .time-range {
    font-size: 0.78rem;
    font-weight: 700;
  }

  .event-card strong {
    font-size: 1rem;
    line-height: 1.25;
  }

  .event-description {
    color: color-mix(in srgb, var(--color-base-content) 78%, transparent);
    font-size: 0.84rem;
    line-height: 1.35;
  }

  .desktop .event-description {
    color: color-mix(in srgb, var(--color-base-content) 72%, transparent);
    display: -webkit-box;
    font-size: 0.82rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .event-meta {
    font-size: 0.84rem;
    line-height: 1.35;
  }

  .event-meta :global(svg) {
    margin-left: 0.1rem;
    margin-top: 0.12rem;
  }

  .event-meta > span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .event-meta-row {
    align-items: start;
    color: color-mix(in srgb, var(--color-base-content) 66%, transparent);
    display: grid;
    font-size: 0.76rem;
    gap: 0.5rem;
    margin-top: auto;
  }
</style>

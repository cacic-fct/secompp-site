<script lang="ts">
  import type { EventLecturer } from '@lib/shared/EventLecturer';
  import EventLecturerInfo from './EventLecturerInfo.svelte';

  export let lecturers: EventLecturer[];
</script>

{#if lecturers.length !== 0}
  <br />
  <div id="lecturers">
    {#each lecturers as lecturer (lecturer.name)}
      <EventLecturerInfo {lecturer} />
    {/each}
  </div>
{/if}

<style lang="postcss">
  #lecturers {
    width: 100%;
    @media (min-width: 574px) {
      display: inline-flex;
      overflow: auto;
    }
  }
</style>

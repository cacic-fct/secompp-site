<script lang="ts">
  import { fetchSecomppMajorEvent } from '@lib/shared/EventManagerPublicApi';
  import { formatMajorEventDateRange } from '@lib/shared/ScheduleEventUtils';
  import { onMount } from 'svelte';

  export let fallback = '30 de setembro a 04 de outubro de 2024';

  let dateRange = fallback;

  onMount(() => {
    void loadDateRange();
  });

  async function loadDateRange() {
    try {
      dateRange = formatMajorEventDateRange(await fetchSecomppMajorEvent());
    } catch {
      dateRange = fallback;
    }
  }
</script>

Junte-se a nós de {dateRange}

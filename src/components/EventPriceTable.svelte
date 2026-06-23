<script lang="ts">
  import { fetchSecomppMajorEvent, type SecomppPublicMajorEventPriceTier } from '@lib/shared/EventManagerPublicApi';
  import { onMount } from 'svelte';

  type PriceRow = {
    id: string;
    label: string;
    value: string;
  };

  let rows: PriceRow[] = [];
  let errorMessage = '';

  onMount(() => {
    void loadPrices();
  });

  async function loadPrices() {
    try {
      const majorEvent = await fetchSecomppMajorEvent();
      rows = createPriceRows(
        majorEvent.isPaymentRequired,
        majorEvent.majorEventPrices?.flatMap((price) => price.tiers),
      );
    } catch {
      errorMessage = 'Não foi possível carregar o valor da inscrição.';
    }
  }

  function createPriceRows(
    isPaymentRequired: boolean | null | undefined,
    tiers: SecomppPublicMajorEventPriceTier[] = [],
  ) {
    if (isPaymentRequired === false) {
      return [
        {
          id: 'free',
          label: 'Valor da inscrição',
          value: 'Gratuito',
        },
      ];
    }

    if (tiers.length === 1) {
      return [
        {
          id: tiers[0].id,
          label: 'Valor da inscrição',
          value: formatCurrencyFromCents(tiers[0].value),
        },
      ];
    }

    if (tiers.length === 0) {
      return [
        {
          id: 'empty',
          label: 'Valor da inscrição',
          value: 'Sem valor cadastrado',
        },
      ];
    }

    return tiers.map((tier) => ({
      id: tier.id,
      label: tier.name,
      value: formatCurrencyFromCents(tier.value),
    }));
  }

  function formatCurrencyFromCents(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value / 100);
  }
</script>

{#if errorMessage}
  <p class="mb-0 text-red-300" role="alert">{errorMessage}</p>
{:else}
  <table class="w-full max-w-full bg-transparent">
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody class="h-16 border-b-2 border-t-2">
      {#each rows as row (row.id)}
        <tr>
          <td>{row.label}</td>
          <td aria-label={row.value}>{row.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

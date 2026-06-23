<script lang="ts">
  import { fetchSecomppMajorEvent, type SecomppPublicMajorEventPriceTier } from '@lib/shared/EventManagerPublicApi';
  import { onMount } from 'svelte';

  type PriceRow = {
    id: string;
    label: string;
    value: string;
  };
  type PriceCard = PriceRow & {
    description: string;
  };

  let rows: PriceRow[] = [];
  let errorMessage = '';

  $: registrationCards = createRegistrationCards(rows);

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

  function createRegistrationCards(priceRows: PriceRow[]): PriceCard[] {
    return [
      ...priceRows.map((row) => ({
        ...row,
        description: 'Minicursos, palestras e certificado',
      })),
      {
        id: 'free-participation',
        label: 'Participação livre',
        value: 'Gratuito',
        description: 'Somente palestras',
      },
    ];
  }
</script>

{#if errorMessage}
  <p class="mb-0 text-red-300" role="alert">{errorMessage}</p>
{:else}
  <div class="price-cards" aria-label="Valores de inscrição">
    {#each registrationCards as row (row.id)}
      <article class="price-card">
        <div class="price-label">{row.label}</div>
        <div class="price-value" aria-label={row.value}>{row.value}</div>
        <div class="price-description">{row.description}</div>
      </article>
    {/each}
  </div>
{/if}

<style lang="postcss">
  .price-cards {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr;
    min-width: 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .price-card {
    background: var(--color-base-200);
    border: 1px solid color-mix(in srgb, var(--color-base-content) 14%, transparent);
    border-radius: var(--radius-box);
    color: var(--color-base-content);
    display: grid;
    gap: 0.35rem;
    min-width: 0;
    padding: 1rem;
  }

  .price-label {
    color: color-mix(in srgb, var(--color-base-content) 78%, transparent);
    font-size: 1rem;
    font-weight: 700;
  }

  .price-value {
    color: var(--color-primary);
    font-size: 1.85rem;
    font-weight: 900;
    line-height: 1.05;
    overflow-wrap: anywhere;
  }

  .price-description {
    color: color-mix(in srgb, var(--color-base-content) 62%, transparent);
    font-size: 0.9rem;
    line-height: 1.35;
  }
</style>

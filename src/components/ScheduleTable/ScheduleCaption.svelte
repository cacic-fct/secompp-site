<script lang="ts">
  export let icon: { src: string };
  export let label: string;
</script>

<div class="caption-container text-xs" aria-label="legenda da tabela de horários">
  <div class="flex flex-wrap" style="max-width: 574px;">
    <div class="icon-desc relative sm:flex-1 sm:flex-grow">
      <div>
        <img src={icon.src} loading="lazy" alt="Ícone {label.toLowerCase()}" class="caption-icon" />
        {label}
      </div>
    </div>
    <div class="relative sm:flex-1 sm:flex-grow">
      <p class="caption-gray caption-large-screen">
        Clique no evento para visualizar mais informações.<br />
      </p>
      <div class="caption-small-screen">
        <p class="mb-0">Role para a direita para visualizar mais eventos.</p>
        <p>
          Clique no evento para visualizar mais informações.<br />
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @import './styles/caption.pcss';
</style>

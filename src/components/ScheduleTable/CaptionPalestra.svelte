<script lang="ts">
  import palestrasIcon from '@lib/img/palestras.svg';
</script>

<div class="caption-container text-xs" aria-label="legenda da tabela de horários">
  <div class="flex flex-wrap" style="max-width: 574px;">
    <div id="icon-desc" class="relative sm:flex-1 sm:flex-grow">
      <div>
        <img src={palestrasIcon.src} alt="Ícone palestra" loading="lazy" class="caption-icon" />
        Palestra
      </div>
    </div>
    <div class="relative sm:flex-1 sm:flex-grow">
      <p class="caption-gray" id="caption-large-screen">
        Clique no evento para visualizar mais informações.<br />
      </p>
      <div id="caption-small-screen">
        <p class="mb-0">Arraste para a esquerda para visualizar mais eventos.</p>
        <p>
          Clique ou toque no evento para visualizar mais informações.<br />
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @import './styles/caption.pcss';
</style>

<script lang="ts">
  import minicursosIcon from '@lib/img/minicursos.svg';
</script>

<div class="caption-container text-xs" aria-label="legenda da tabela de horários">
  <div class="flex flex-wrap" style="max-width: 574px;">
    <div id="icon-desc" class="relative sm:flex-1 sm:flex-grow">
      <div>
        <img src={minicursosIcon.src} loading="lazy" alt="Ícone minicurso" class="caption-icon" />
        Minicurso
      </div>
      <!-- <div>
        <img src={palestrasIcon} alt="Ícone palestra" loading="lazy" class="caption-icon" />
        Palestra
      </div> -->
    </div>
    <div class="relative sm:flex-1 sm:flex-grow">
      <p class="caption-gray" id="caption-large-screen">
        Clique no evento para visualizar mais informações.<br />
      </p>
      <div id="caption-small-screen">
        <p class="mb-0">Arraste para esquerda para visualizar mais eventos.</p>
        <p>
          Clique ou toque no evento para visualizar mais informações.<br />
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @define-mixin typo-gray {
    color: var(--bs-gray-500);

    @mixin-content;
  }

  .caption-gray {
    @mixin typo-gray;
  }

  #icon-desc {
    padding-left: 0;
    @media (min-width: 575px) {
      max-width: 150px;
      /* div:first-child {
        margin-bottom: 1rem;
      } */
    }

    @media (max-width: 574px) {
      display: flex;
      div {
        flex: 0 0 auto;
        width: 50%;
      }
    }
  }

  #caption-small-screen {
    @media (max-width: 574px) {
      margin-top: 12px;
    }

    @media (min-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 1199px) {
    #caption-large-screen {
      @mixin typo-gray;
      display: none;
    }
  }

  .caption-container {
    @mixin typo-gray;
    @media (min-width: 575px) {
      max-width: 767px;
    }
    @media (min-width: 768px) {
      max-width: 991px;
      padding: 0px 24px;
    }
    @media (min-width: 992px) {
      max-width: 1199px;
      padding: 0px 24px;
    }
    padding: 12px;
    margin: auto;
  }

  .caption-icon {
    filter: invert(48%) sepia(10%) saturate(449%) hue-rotate(167deg) brightness(90%) contrast(82%);
    width: 20px;
    margin-right: 0.5rem;
  }
</style>

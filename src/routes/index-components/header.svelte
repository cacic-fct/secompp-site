<script lang="ts">
  import logo from '$lib/img/secompp22-logo.svg';
  import logoRubcube from '$lib/img/rubcube.svg';
  import logoRocketseat from '$lib/img/rocketseat.svg';
  import logoVunesp from '$lib/img/vunesp.svg';
  import ImgLink from './Footer/ImgLink.svelte';
</script>

<header class="header-bg">
  <div class="container mx-auto">
    <div class="intro-text text-center">
      <div class="intro-lead-in intro-lead-in-padding">
        <img src={logo} width="100%" class="secompp-logo mx-auto p-3" alt="Logo SECOMPP 2022" />
      </div>
      <div class="intro-heading text-center">
        <span class="fs-3 fw-semibold"> 19ª Semana do Curso de Ciência da Computação da FCT-Unesp </span>
      </div>
      <div class="intro-heading text-center">
        <span class="fs-4 fw-light">Junte-se a nós de 17 a 21 de outubro de 2022</span>
      </div>
      <br />
      <br />
      Patrocínio:
      <br />
      <ImgLink
        href="https://www.rubcube.com/"
        src={logoRubcube}
        size="lg"
        marginHorizontalAuto
        alt="Rubcube"
        marginBottom />
      <br />
      <br />
      Apoio:
      <br />
      <ImgLink
        href="https://www.rocketseat.com.br/"
        size="lg"
        marginHorizontalAuto
        src={logoRocketseat}
        alt="Rocketseat" />
      <br />
      <ImgLink href="https://www.vunesp.com.br/" size="lg" marginHorizontalAuto src={logoVunesp} alt="Vunesp" />
    </div>
  </div>
</header>

<style lang="postcss">
  .intro-lead-in-padding {
    padding: 10px;
    padding-bottom: 24px;
    padding-top: 24px;
  }

  .secompp-logo {
    max-width: 750px;
  }

  .header-bg {
    background: linear-gradient(0deg, black 0%, rgb(33, 32, 13) 100%);
    padding-top: 50px;
  }
</style>

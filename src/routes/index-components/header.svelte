<script>
  import logo23 from '$lib/img/secompp23.svg';
  import logoVunesp from '$lib/img/vunesp.svg';
  import { Button } from 'sveltestrap';
  import ImgLink from './Footer/ImgLink.svelte';
</script>

<header class="header-bg">
  <div class="container">
    <div class="text-center intro-text">
      <div class="intro-lead-in intro-lead-in-padding">
        <img src={logo23} width="100%" class="secompp-logo" alt="Logo SECOMPP 2023" />
      </div>
      <div class="text-center intro-heading">
        <span class="fs-3 fw-semibold"> 20ª Semana do Curso de Ciência da Computação da FCT-Unesp </span>
      </div>
      <div class="text-center intro-heading">
        <span class="fs-4 fw-light">Junte-se a nós de 25 a 29 de setembro de 2023</span>
      </div>
      <br />
      <br />
      Apoio:
      <br />
      <ImgLink marginX href="https://www.vunesp.com.br/" size="lg" src={logoVunesp} alt="Vunesp" />
    </div>
  </div>
</header>

<style lang="scss">
  .intro-lead-in-padding {
    padding: 10px;
    padding-bottom: 24px;
    padding-top: 24px;
  }

  .secompp-logo {
    max-width: 750px;
  }

  .header-bg {
    //background: linear-gradient(0deg, black 0%, rgb(33, 32, 13) 100%);
    background: linear-gradient(0deg, #000 0%, #3a179d 100%);
    padding-top: 50px;
  }
</style>

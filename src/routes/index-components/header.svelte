<script>
  import logo from '$lib/img/secompp23.svg';
  import logoVunesp from '$lib/img/vunesp.svg';
  import { Button } from 'sveltestrap';
  import ImgLink from './Footer/ImgLink.svelte';
  import rocketseat from '$lib/img/rocketseat.svg';
  import vlab from '$lib/img/VLab.svg';
</script>

<header class="header-bg">
  <div class="container">
    <div class="intro-text text-center">
      <div class="intro-lead-in intro-lead-in-padding">
        <img src={logo} width="100%" class="secompp-logo" alt="Logo SECOMPP 2023" />
      </div>
      <div class="intro-heading text-center">
        <span class="fs-3 fw-semibold"> 20ª Semana do Curso de Ciência da Computação da FCT-Unesp </span>
      </div>
      <div class="intro-heading text-center">
        <span class="fs-4 fw-light">Junte-se a nós de 25 a 29 de setembro de 2023</span>
      </div>
      <Button outline class="my-3" size="lg" href="https://fct-pp.web.app/eventos">Inscrever-se</Button>
      <br />
      <br />
      Apoio:
      <br />
      <ImgLink marginX href="https://www.vunesp.com.br/" size="lg" src={logoVunesp} alt="Vunesp" />
      <ImgLink marginX href="https://www.rocketseat.com.br/" size="lg" src={rocketseat} alt="Rocketseat" />
      <ImgLink marginX href="https://www.vlabhealth.com/" size="sm" src={vlab} alt="Vlab" />

      <div class="alert alert-danger mt-5" role="alert">
        <h4 class="alert-heading">Errata - Quantidade de minicursos</h4>
        <p>
          Os participantes da SECOMPP23 poderão escolher <b>2 minicursos</b>, não 3 conforme divulgação. Pedimos
          desculpas.
        </p>
      </div>
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
    padding-top: 50px;
  }
</style>

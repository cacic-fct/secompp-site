<script lang="ts">
  import logoCacic from '$lib/img/cacic.svg';
  import logoEjcomp from '$lib/img/ejcomp.svg';
  import logoUnesp from '$lib/img/unesp.svg';
  import logoDmc from '$lib/img/dmc.webp';
  import logoRubcube from '$lib/img/rubcube.svg';
  import logoRocketseat from '$lib/img/rocketseat.svg';
  import logoVunesp from '$lib/img/vunesp.svg';
  import ImgLink from './ImgLink.svelte';
  import { Mail, Phone } from 'lucide-svelte';
</script>

<footer class="footer bg-neutral p-10 text-neutral-content">
  <nav>
    <header class="footer-title">Patrocínio</header>
    <ImgLink href="https://www.rubcube.com/" src={logoRubcube} size="xl" alt="Rubcube" marginBottom />
    <header class="footer-title">Apoio</header>
    <ImgLink
      marginX
      href="https://www.rocketseat.com.br/"
      marginHorizontalAuto
      size="xl"
      src={logoRocketseat}
      alt="Rocketseat" />
    <br />
    <ImgLink marginX href="https://www.vunesp.com.br/" size="lg" src={logoVunesp} alt="Fundação Vunesp" />
  </nav>
  <nav>
    <header class="footer-title">Realização</header>

    <div class="grid grid-flow-col items-center gap-4">
      <ImgLink
        href="https://cacic-fct.web.app/"
        src={logoCacic}
        size="md"
        alt="Centro Acadêmico de Ciência da Computação"
        marginBottom />
      <ImgLink
        marginX
        href="https://www.ejcomp.com.br/"
        src={logoEjcomp}
        size="md"
        alt="Empresa Júnior da Computação" />
    </div>
    <br />
    <div class="grid grid-flow-col items-center gap-4">
      <ImgLink href="https://www.fct.unesp.br" size="md" src={logoUnesp} alt="Unesp" />
      <ImgLink
        href="https://www.fct.unesp.br/#!/departamentos/matematica-e-computacao/"
        size="sm"
        src={logoDmc}
        alt="Departamento de Matemática e Computação"
        marginX
        marginBottom />
    </div>
    <br />
    <p class="fs-light small text-start">
      <b>Fundacte</b> - Fundação de Ciência, Tecnologia e Ensino<br />
    </p>
  </nav>
  <nav>
    <header class="footer-title">FCT – Faculdade de Ciências e Tecnologia</header>
    <div>
      <div>
        Universidade Estadual Paulista "Júlio de Mesquita Filho"<br />
        Rua Roberto Simonsen, 305<br />
        Presidente Prudente - SP<br />
        19060-900
      </div>
      <br />
      <div class="flex">
        <a
          class=" mr-3 transition-opacity hover:opacity-75"
          id="contact-mail"
          aria-label="Entrar em contato por e-mail"
          href="mailto:cacic.fct@gmail.com?subject=Contato SECOMPP22">
          <Mail color="white" width="24" height="24" />
        </a>
        <a
          class=" ml-3 transition-opacity hover:opacity-75"
          id="contact-phone"
          href="tel:1832295600"
          aria-label="Entrar em contato por telefone">
          <Phone color="white" width="24" height="24" />
        </a>
      </div>
    </div>

    <a class="link-hover link pt-3" href="https://cacic-fct.web.app/privacidade">Política de privacidade</a>
  </nav>
</footer>

<script>
  import '$lib/styles/global.scss';
  import About from './index-components/about.svelte';
  import Faq from './index-components/faq.svelte';
  import Footer from './index-components/Footer/Footer.svelte';
  import Header from './index-components/header.svelte';
  import Info from './index-components/info.svelte';
  import Nav from './index-components/nav.svelte';
  import Schedule10 from './index-components/Schedule/Schedule10.svelte';
  import SchedulePalestra from './index-components/Schedule/SchedulePalestra.svelte';
  import Ending from './index-components/Schedule/Ending.svelte';
  import Schedule6 from './index-components/Schedule/Schedule6.svelte';
  import ScheduleLEM from './index-components/Schedule/ScheduleLEM.svelte';
</script>

<Nav />
<Header />
<section id="sobre">
  <About />
</section>
<Ending/>
<section id="programacao">
  <Schedule6 />
  <Schedule10 />
  <ScheduleLEM/>
  <SchedulePalestra />
</section>
<section id="informacoes">
  <Info />
</section>
<section id="duvidas">
  <Faq />
</section>
<Footer />

<script lang="ts">
  import logo from '$lib/img/secompp22-logo.svg';
  import { Menu } from 'lucide-svelte';
</script>

<div class="navbar sticky top-0 z-50 bg-base-100 pl-5 pr-5">
  <div class="navbar-start">
    <img src={logo} class="py-1" width="150" alt="Logo da SECOMPP 2022" />
  </div>

  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <Menu class="h-5 w-5" />
      </label>
      <ul tabindex="0" class="menu dropdown-content rounded-box menu-lg z-[1] mt-3 w-52 bg-base-100 p-2 shadow">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#programacao">Programação</a></li>
        <li><a href="#duvidas">Dúvidas</a></li>
        <li><a href="#apoio">Apoio</a></li>
        <a class="btn">Inscrever-se</a>
      </ul>
    </div>
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#programacao">Programação</a></li>
        <li><a href="#duvidas">Dúvidas</a></li>
        <li><a href="#apoio">Apoio</a></li>
      </ul>
      <a class="btn">Inscrever-se</a>
    </div>
  </div>
</div>

<script>
  import Hamburguer from "./Hamburguer.svelte";
  import NavLink from "./NavLink.svelte";

  export let segment;
  let expand = false;

  function toggleMobileMenu(event) {
    expand = event.detail;
  }
</script>

<nav
  class="text-main-dark w-full flex items-center justify-between flex-wrap
  bg-main-light p-6 shadow-lg lg:fixed lg:top-0">

  <a href="." class="text-main-red font-semibold text-xl tracking-tight mr-4">
    Neo Iter
  </a>

  <div class="block lg:hidden">
    <Hamburguer on:click={toggleMobileMenu} {expand} />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="{!expand && 'hidden'} lg:block text-sm lg:flex-grow">
      <NavLink text="About" href="about" {segment} />
      <NavLink text="Blog" href="blog" {segment} rel="prefetch" />
    </div>
  </div>
</nav>

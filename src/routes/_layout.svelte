<script>
	import Nav from './../components/Nav.svelte';
</script>
<style lang="scss" global>
  @import "./style/global.scss";
</style>

<div class="flex flex-col h-full">
  <Nav/>
  <div class="container h-full">

    <slot></slot>
	
   </div>
  <footer class="text-center bg-gray-400">FOOTER</footer>
</div>

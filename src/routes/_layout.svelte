<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style lang="scss" global>
 @import "./style/global.scss";
</style>

<Nav {segment}/>

<main class="lg:mt-20 container mx-auto p-4">
	<slot></slot>
</main>

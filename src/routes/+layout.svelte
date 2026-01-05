<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Menumobile from '$lib/components/Menumobile.svelte';
	import { navigating } from '$app/stores';

	import PageTransition from './transition.svelte';

	export let data;
</script>

<!-- Loading indicator -->
{#if $navigating}
	<div class="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-[100] animate-pulse" role="progressbar" aria-label="Page loading"></div>
{/if}

<AppShell>
	
	<!--<svelte:fragment slot="header"><div class="md:hidden"><Menumobile /></div></svelte:fragment>-->
	<svelte:fragment slot="sidebarLeft"><div class="hidden md:block"><Menu /></div></svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader"><div class="md:hidden"><Menumobile /></div></svelte:fragment>
	<!-- Router Slot -->
	
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
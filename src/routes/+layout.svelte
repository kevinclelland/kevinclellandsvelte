<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Menumobile from '$lib/components/Menumobile.svelte';
	
</script>


<AppShell>
	
	<svelte:fragment slot="header"><div class="md:hidden"><Menumobile /></div></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><div class="hidden md:block"><Menu /></div></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	
			<slot />
	
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
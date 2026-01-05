<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Menumobile from '$lib/components/Menumobile.svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import PageTransition from './transition.svelte';

	export let data;

	// Pull-to-refresh variables
	let pullDistance = 0;
	let startY = 0;
	let isPulling = false;
	let isRefreshing = false;
	const pullThreshold = 120; // Increased distance to pull before refresh triggers
	const activationThreshold = 40; // Minimum distance before showing indicator

	onMount(() => {
		if (!browser) return;

		let touchStartY = 0;
		let touchCurrentY = 0;
		let hasScrolled = false;

		const handleTouchStart = (e: TouchEvent) => {
			// Only allow pull-to-refresh when at the top of the page
			if (window.scrollY === 0) {
				touchStartY = e.touches[0].clientY;
				startY = touchStartY;
				hasScrolled = false;
			}
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (window.scrollY === 0 && touchStartY > 0) {
				touchCurrentY = e.touches[0].clientY;
				const distance = touchCurrentY - touchStartY;

				// Only allow pulling down and require a more deliberate pull
				if (distance > activationThreshold) {
					isPulling = true;
					// Apply more resistance to the pull (diminishing returns)
					pullDistance = Math.min(distance * 0.4, pullThreshold * 1.5);
					
					// Prevent default scrolling only when actively pulling
					if (pullDistance > activationThreshold) {
						e.preventDefault();
					}
				} else if (distance < 0) {
					// User is trying to scroll up, not pull down
					hasScrolled = true;
					isPulling = false;
					pullDistance = 0;
				}
			} else if (window.scrollY > 0) {
				// Page has scrolled, disable pull-to-refresh
				hasScrolled = true;
				isPulling = false;
				pullDistance = 0;
			}
		};

		const handleTouchEnd = () => {
			if (isPulling && pullDistance > pullThreshold && !hasScrolled) {
				isRefreshing = true;
				// Reload the page
				setTimeout(() => {
					window.location.reload();
				}, 300);
			} else {
				// Reset if not pulled enough
				isPulling = false;
				pullDistance = 0;
			}
			touchStartY = 0;
			hasScrolled = false;
		};

		// Add event listeners
		document.addEventListener('touchstart', handleTouchStart, { passive: true });
		document.addEventListener('touchmove', handleTouchMove, { passive: false });
		document.addEventListener('touchend', handleTouchEnd);

		// Cleanup
		return () => {
			document.removeEventListener('touchstart', handleTouchStart);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<!-- Loading indicator -->
{#if $navigating}
	<div class="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-[100] animate-pulse" role="progressbar" aria-label="Page loading"></div>
{/if}

<!-- Pull-to-refresh indicator -->
{#if (isPulling && pullDistance > 30) || isRefreshing}
	<div 
		class="fixed top-0 left-0 right-0 flex justify-center items-center z-[99] transition-transform duration-200"
		style="transform: translateY({pullDistance > 30 ? pullDistance - 60 : -60}px);"
	>
		<div class="bg-surface-800 rounded-full p-3 shadow-lg mt-4">
			{#if isRefreshing}
				<svg class="animate-spin h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			{:else}
				<svg 
					class="h-6 w-6 transition-all duration-200" 
					style="transform: rotate({Math.min(pullDistance / pullThreshold * 180, 180)}deg); color: {pullDistance > pullThreshold ? 'rgb(var(--color-success-500))' : 'rgb(var(--color-primary-500))'};" 
					xmlns="http://www.w3.org/2000/svg" 
					fill="none" 
					viewBox="0 0 24 24" 
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			{/if}
		</div>
	</div>
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
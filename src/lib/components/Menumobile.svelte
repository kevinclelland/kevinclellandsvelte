<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	let showSearch = false;
	
	const listData = [
		//{ avatar: 'YOErFW8AfkI', icon:'❤️', name: 'Liked Songs', label: 'Playlist - 90 songs', link: 'likedsongs' },
		{ avatar: 'YOErFW8AfkI', icon:'💻️', name: 'Coding', label: 'Coding Graveyard', link: 'coding' },
		{ avatar: 'YOErFW8AfkI', icon:'👟', name: 'Triathlon', label: 'Tri race results', link: 'triathlon' },
		{ avatar: 'z_X0PxmBuIQ', icon:'✍️', name: 'Writing', label: 'My book and other stuff', link: 'writing' },
		{ avatar: '8vKVlNIbAc4', icon:'📸', name: 'Photography', label: 'Some of my favourite photos', link: 'photography' },
		{ avatar: '8vKVlNIbAc4', icon:'🧪', name: 'Projects', label: 'Random Rabbit Holes', link: 'projects' },
		//{ avatar: '8vKVlNIbAc4', icon:'🎸', name: 'Music', label: 'The record company Rosie, gave me a big advance', link: 'music' },
		{ avatar: '8vKVlNIbAc4', icon:'⏳️', name: 'Now', label: 'What I am up to now', link: 'now' }
	];

</script>

<!-- Top Navigation Bar -->
<div class="w-full bg-surface-100-800-token border-b border-surface-500/20">
	<div class="flex items-center justify-between px-4 py-3">
		<a href="/" class="btn btn-icon opacity-75 hover:opacity-100" aria-label="Home">
			<i class="material-icons text-2xl">home</i>
		</a>
		<h2 class="text-xl font-bold">Kevin Clelland</h2>
		<button 
			class="btn btn-icon opacity-75 hover:opacity-100"
			on:click={() => showSearch = true}
			aria-label="Search"
		>
			<i class="material-icons text-2xl">search</i>
		</button>
	</div>
</div>

<!-- Library Section -->
<div class="px-4 py-4">
	<div class="flex items-center justify-between mb-4">
		<h3 class="h4 font-semibold flex items-center">
			<i class="material-icons mr-2">library_music</i> 
			Your Library
		</h3>
	</div>
	
	<!-- Filter Badges -->
	<div class="flex gap-2 mb-4 overflow-x-auto pb-2">
		<span class="badge variant-filled whitespace-nowrap">Playlists</span>
		<span class="badge variant-filled-surface whitespace-nowrap">Albums</span>
		<span class="badge variant-filled-surface whitespace-nowrap">Artists</span>
	</div>
</div>

<!-- Library Grid -->
<div class="mx-auto text-token grid grid-cols-2 w-screen gap-2 px-4 pb-4">

	
	{#each listData as v}
	<a href="/{v.link}">
		<div class="card card-hover col-span-1 flex">
			
			<div class="p-2 text-2xl rounded-md bg-sky-500/25">{v.icon}</div>
			
				<div class="flex-auto place-self-center">
					<div class="font-bold text-center ">{v.name}</div>
					
				</div>
			
		</div>
	</a>
	{/each}

</div>

<Search bind:isOpen={showSearch} />

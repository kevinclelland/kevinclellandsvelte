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

<div class="mx-auto text-token grid grid-cols-1 gap-4 p-4">

<div class="card card-hover">
<div class="p-4">
			
	<button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
		<a href="/" class="flex">
	  <i class="material-icons mr-3">home</i>
	  <p class="text-lg text-white font-semibold">Home</p>
	</a>
	</button>
	<button 
		class="flex items-center justify-start opacity-75 hover:opacity-100"
		on:click={() => showSearch = true}
	>
	  <i class="material-icons mr-3">search</i>
	  <p class="text-lg text-white font-semibold">Search</p>
	</button>
</div>
</div>


<div class="card card-hover">
	<h3 class="p-4 h3"><i class="material-icons mr-3">library_music</i> Your Library</h3>
	<div class="m-5">
		<span class="badge variant-filled mx-1">Playlists</span><span class="badge variant-filled-surface mx-1">Albums</span><span class="badge variant-filled-surface mx-1">Artists</span>
	</div> 

	{#each listData as v}
	<a href="/{v.link}">
		<div class="p-2 col-span-1 flex">
			
			<div class="p-2 text-2xl rounded-md bg-sky-500/25">{v.icon}</div>
			
				<div class="flex-auto place-self-center">
					<div class="font-bold px-2">{v.name}</div>
					<div class="text-sm px-2 opacity-50">{v.label}</div>
				</div>
			
		</div>
	</a>
	{/each}


</div>

</div>

<Search bind:isOpen={showSearch} />
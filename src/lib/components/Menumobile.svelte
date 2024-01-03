<script lang="ts">
	const listData = [
		//{ avatar: 'YOErFW8AfkI', icon:'❤️', name: 'Liked Songs', label: 'Playlist - 90 songs', link: 'likedsongs' },
		{ avatar: 'YOErFW8AfkI', icon:'💻️', name: 'Coding', label: 'Coding Graveyard', link: 'coding' },
		{ avatar: 'YOErFW8AfkI', icon:'👟', name: 'Triathlon', label: 'Tri race results', link: 'triathlon' },
		{ avatar: 'z_X0PxmBuIQ', icon:'✍️', name: 'Writing', label: 'My book and other stuff', link: 'writing' },
		{ avatar: '8vKVlNIbAc4', icon:'📸', name: 'Photography', label: 'Some of my favourite photos', link: 'photography' },
		{ avatar: '8vKVlNIbAc4', icon:'🧪', name: 'Projects', label: 'Random Rabbit Holes', link: 'projects' },
		//{ avatar: '8vKVlNIbAc4', icon:'🎸', name: 'Music', label: 'The record company Rosie, gave me a big advance', link: 'music' },
		{ avatar: '8vKVlNIbAc4', icon:'⏳️', name: 'Now', label: 'What Im up to now', link: 'now' }
	];

</script>

<div class="mx-auto text-token grid grid-cols-2 w-screen gap-2 p-4">

<div class="card card-hover col-span-2">
<div class="flex p-2">
			
	<button class="flex items-center justify-start opacity-75 hover:opacity-100 mx-3">
		<a href="/" class="flex">
	  <i class="material-icons mr-2">home</i>
	  <p class="text-lg text-white font-semibold">Home</p>
	</a>
	</button>
	<div class="m-4">
		<span class="badge variant-filled mx-1">Playlists</span><span class="badge variant-filled-surface mx-1">Albums</span><span class="badge variant-filled-surface mx-1">Artists</span>
	</div> 
</div>
</div>

</div>
<h3 class="px-4 h3"><i class="material-icons mr-3">library_music</i> Your Library</h3>
<div class="mx-auto text-token grid grid-cols-2 w-screen gap-2 p-4">

	
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

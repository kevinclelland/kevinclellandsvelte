<script lang="ts">
import * as config from '$lib/config';
let followingStatus: String = "Following";
let showPopup: boolean = false;

function follow() {
	showPopup = !showPopup;
}

let activeStatus: String = "";
function active() {
	if (activeStatus == "") {
		activeStatus = "text-green-400";
	} else {
		activeStatus = "";
	}
	
};

export let data: any;

</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="mx-auto grid grid-cols-1 p-2">




	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img class="sm:hidden" src="/coverphoto2wsm.webp" width="1852" height="544" alt="me smiling at a pool" /><img class="hidden sm:block" src="/coverphoto2w.webp" width="1852" height="544" alt="me smiling at a pool" />
				<button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified</p></button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Kevin Clelland</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">5 Focus Areas</h3>
				
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified</p></button>
				<h1 class="sm:hidden font-bold text-5xl text-white px-2">Kevin Clelland</h1>
				<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">5 Focus Areas</h3>
		</header>

		<div class="flex">
		<button class="rounded-full h-14 w-14 flex items-center justify-center my-4 mx-2 text-black bg-green-600 hover:bg-green-500"><i class="material-icons text-4xl">play_arrow</i></button>
		<button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100 {activeStatus}" on:click={active}><i class="material-icons text-4xl">shuffle</i></button>
		<button class="badge variant-ringed px-4 h-10 my-6 mx-2 hover:variant-filled text-lg" on:click={follow}>Follow</button>
		<button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"><i class="material-icons text-4xl">more_horiz</i></button>
		
		</div>

		<h3 class="h3 px-4 font-semibold">Popular</h3>
		<div class="px-4 p-2 opacity-75">Albums - Last 30 days</div>
		

	<!-- Native Table Element -->
	<table class="table table-compact table-hover m-4 w-11/12">
		<thead class="">
			<tr>
				<th>#</th>
				<th>Album</th>
				<th class="hidden lg:table-cell">Artist</th>
				<th class="hidden lg:table-cell">Playcount</th>
			</tr>
		</thead>

		<tbody class="">
			
				<tr class="items-center">
					<td class="items-center"><div class="items-center"><div class="mx-2 text-lg opacity-75">1</div></div></td>
					<td><div class="flex items-left"><img src="{data.albums[0].image[1]['#text']}" class="max-h-14 mx-2 min-w-14 min-h-14" alt="album artwork"><div class="mx-2 text-lg max-w-48 lg:max-w-none truncate">{data.albums[0].name}</div></div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[0].artist.name}</div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[0].playcount}</div></td>
				</tr>
				<tr>
					<td><div class="items-center"><div class="mx-2 text-lg opacity-75">2</div></div></td>
					<td><div class="flex items-left"><img src="{data.albums[1].image[1]['#text']}" class="max-h-14 mx-2 min-w-14 min-h-14" alt="album artwork"><div class="mx-2 text-lg max-w-44 lg:max-w-none truncate">{data.albums[1].name}</div></div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[1].artist.name}</div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[1].playcount}</div></td>
				</tr>
				<tr>
					<td><div class="items-center"><div class="mx-2 text-lg opacity-75">3</div></div></td>
					<td><div class="flex items-left"><img src="{data.albums[2].image[1]['#text']}" class="max-h-14 mx-2 min-w-14 min-h-14" alt="album artwork"><div class="mx-2 text-lg max-w-44 lg:max-w-none truncate">{data.albums[2].name}</div></div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[2].artist.name}</div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[2].playcount}</div></td>
				</tr>
				<tr>
					<td><div class="items-center"><div class="mx-2 text-lg opacity-75">4</div></div></td>
					<td><div class="flex items-left"><img src="{data.albums[3].image[1]['#text']}" class="max-h-14 mx-2 min-w-14 min-h-14" alt="album artwork"><div class="mx-2 text-lg max-w-44 lg:max-w-none truncate">{data.albums[3].name}</div></div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[3].artist.name}</div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[3].playcount}</div></td>
				</tr>
				<tr>
					<td><div class="items-center"><div class="mx-2 text-lg opacity-75">5</div></div></td>
					<td><div class="flex items-left"><img src="{data.albums[4].image[1]['#text']}" class="max-h-14 mx-2 min-w-14 min-h-14" alt="album artwork"><div class="mx-2 text-lg max-w-44 lg:max-w-none truncate">{data.albums[4].name}</div></div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[4].artist.name}</div></td>
					<td class="hidden lg:table-cell"><div class="text-lg">{data.albums[4].playcount}</div></td>
				</tr>
			
		</tbody>
	
	</table>

<h3 class="h3 p-4 font-semibold">On Tour</h3>

<div class="flex px-4"><div class="p-2 px-4 text-2xl text-center rounded-md bg-gray-700/50"><div class="">Dec</div><div class="font-bold text-2xl">2008</div></div><div><div class="mx-4 text-2xl">Ballito, South Africa</div><div class="mx-4 opacity-75">From 2008 to present</div></div></div>


<h3 class="h3 p-4 font-semibold">About</h3>
<div class="px-4 max-w-3xl relative card-hover">
	<img src="/coverphoto.webp" alt="Me standing with my wife" class="rounded-lg grayscale brightness-60 lg:brightness-50">
	<div class="hidden lg:block absolute text-lg font-semibold bottom-1 left-5 opacity-100 p-6">
	<div class="italic">"I struggle at triathlon, photography, coding and guitar. Im good at my day job working in a bank."</div><br>
	<div>My areas of focus are web development, not sucking at guitar and piano, taking more photos and training for triathlon. In 2017 I self-published a book on Amazon about trying to qualify for World Triathlon Champs.</div><br>
	<div>Im an amateur at all of my passions and tend to spend more time reading and thinking about projects than actually doing anything. This website is my "ledger of done"...and once its done who says it cant be made perfect.</div>
</div>
</div>
<div class="lg:hidden text-lg font-semibold opacity-100 p-6">
	<div class="italic">"I struggle at triathlon, photography, coding and guitar. Im good at my day job working in a bank."</div><br>
	<div>My areas of focus are web development, not sucking at guitar and piano, taking more photos and training for triathlon. In 2017 I self-published a book on Amazon about trying to qualify for World Triathlon Champs.</div><br>
	<div>Im an amateur at all of my passions and tend to spend more time reading and thinking about projects than actually doing anything. This website is my "ledger of done"...and once its done who says it cant be made perfect.</div>
</div>
<img src="/comic.webp" class="p-4 card-hover" alt="">



	</div>

</div>

{#if showPopup}
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" on:click|self={() => showPopup = false}>
		<div class="bg-surface-100-800-token p-6 rounded-lg shadow-xl">
			<h3 class="text-xl font-bold mb-4">Follow Kevin on X</h3>
			<a href="https://x.com/kevinclelland" target="_blank" rel="noopener noreferrer" 
			   class="btn variant-filled-primary">
				Visit X Profile
			</a>
			<button class="btn variant-ghost ml-2" on:click={() => showPopup = false}>Close</button>
		</div>
	</div>
{/if}


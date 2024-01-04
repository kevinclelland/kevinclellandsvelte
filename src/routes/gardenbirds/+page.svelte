<script lang="ts">
import Play from "$lib/components/Play.svelte";

let birds = [
	{ birdphoto: "/birds/1.jpg", birdname: "Southern Black Tit" },
	{ birdphoto: "/birds/2.jpg", birdname: "Hamerkop" },
	{ birdphoto: "/birds/3.jpg", birdname: "Spotted Eagle-Owl" },
	{ birdphoto: "/birds/4.jpg", birdname: "Rock Dove" },
	{ birdphoto: "/birds/5.jpg", birdname: "Yellow Billed Kite" },
	{ birdphoto: "/birds/6.jpg", birdname: "Woolly Necked Stork" },
	{ birdphoto: "/birds/7.jpg", birdname: "Burchells Coucal (rainbird)" },
	{ birdphoto: "/birds/8.jpg", birdname: "Crested Barbet" },
	{ birdphoto: "/birds/9.jpg", birdname: "Hadeda Ibis" },
	
	{ birdphoto: "/birds/11.jpg", birdname: "Common Myna" },
	{ birdphoto: "/birds/12.jpg", birdname: "Bronze Mannikin" },
	{ birdphoto: "/birds/13.jpg", birdname: "Common Fiscal (Jackie Hangman)" },
	{ birdphoto: "/birds/14.jpg", birdname: "Dark-capped Bulbul" },
	{ birdphoto: "/birds/15.jpg", birdname: "Natal Spurfowl" },
	
	{ birdphoto: "/birds/19.jpg", birdname: "Cape Turtle Dove." },
	{ birdphoto: "/birds/20.jpg", birdname: "Black Headed Heron." },
	{ birdphoto: "/birds/21.jpg", birdname: "Speckled mousebird" },
	{ birdphoto: "/birds/22.jpg", birdname: "Laughing Dove" },
	{ birdphoto: "/birds/23.jpg", birdname: "Village Weaver" },
	{ birdphoto: "/birds/24.jpg", birdname: "Pied Crow" },
	
	{ birdphoto: "/birds/26.jpg", birdname: "Black-Collared Barbet" },
	{ birdphoto: "/birds/27.jpg", birdname: "Cape Glossy Starling" },
	
	{ birdphoto: "/birds/30.jpg", birdname: "Speckled Pigeon" },
	{ birdphoto: "/birds/31.jpg", birdname: "House Sparrow" },

	{ birdphoto: "/birds/35.jpg", birdname: "Black Sparrowhawk" },
	{ birdphoto: "/birds/36.jpg", birdname: "Swift" },
	
	{ birdphoto: "/birds/38.jpg", birdname: "Long-crested eagle" },
	{ birdphoto: "/birds/39.jpg", birdname: "Egyptian goose" },
	{ birdphoto: "/birds/40.jpg", birdname: "Red-throated wryneck" },
	{ birdphoto: "/birds/41.jpg", birdname: "Helmeted guineafowl" },
	{ birdphoto: "/birds/42.jpg", birdname: "Pin-tailed whydah" },
	{ birdphoto: "/birds/43.jpg", birdname: "Purple-Crested Turaco" },
	{ birdphoto: "/birds/44.jpg", birdname: "Violet-backed Starling" },
	
	{ birdphoto: "/birds/46.jpg", birdname: "Red-Billed Quelea. Breeding male center" },
	{ birdphoto: "/birds/47.jpg", birdname: "Dusky Indigobird" },
	{ birdphoto: "/birds/48.jpg", birdname: "Southern Red Bishop" },
	{ birdphoto: "/birds/49.jpg", birdname: "Thick billed weaver." }
];


</script>

<div class="mx-auto grid grid-cols-1 gap-4 p-4">




	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img class="" src="/covergardenbirds.jpg" alt="me smiling at a pool" />
				<button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified from the Garden</p></button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Garden Birds</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">37 identified - 3 pending</h3>
				
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified from the Garden</p></button>
				<h1 class="sm:hidden font-bold text-5xl text-white px-2">Garden Birds</h1>
				<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">37 identified - 3 pending</h3>
				
		</header>

		<Play />

		<h3 class="h3 p-4 font-semibold">List</h3>

		
		<div class="mx-auto text-token justify-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">

			{#each birds as {birdphoto, birdname}, index (birdphoto)}
				<div class="col-span-1 card card-hover overflow-hidden max-w-xs">
					<header class="flex justify-around">
						<img src={birdphoto} class="max-w-fill" alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3">{birdname}</h3>
					</div>
		
					
				</div>
			{/each}
			
		</div>

		


</div>
</div>

	
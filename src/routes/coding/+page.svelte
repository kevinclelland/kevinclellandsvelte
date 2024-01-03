<script lang="ts">
import Play from "$lib/components/Play.svelte";

let albums = [
{albumcover: "/mockups/acmockup.png", albumname: "Afternoons Coffeespoons", albumartist: "Music Albums"},
{albumcover: "/mockups/aomockup.png", albumname: "Aero Oats", albumartist: "Triathlon Tools"},
{albumcover: "/mockups/hhmockup.png", albumname: "Humphrey & Hunter", albumartist: "Dog travel"},
{albumcover: "/mockups/ssmockup.png", albumname: "Sanele Shange", albumartist: "Triathlete"},
{albumcover: "/mockups/pomockup.png", albumname: "Product Owners Guide", albumartist: "Product Owner"},
{albumcover: "/mockups/icmockup.png", albumname: "Inamandla Contractors", albumartist: "Construction Company"},
{albumcover: "/mockups/lcmockup.png", albumname: "Lisa Clelland Kitchens", albumartist: "Kitchen Design Company"},
{albumcover: "/mockups/rsmockup.png", albumname: "Rugby Strat", albumartist: "Rugby Game"},
{albumcover: "/mockups/lifecmockup.png", albumname: "Life Check", albumartist: "Time Calculator"},
{albumcover: "/mockups/tdpmockup.png", albumname: "Time Distance Pace", albumartist: "Running Calculator"},
{albumcover: "/mockups/ttmockup.png", albumname: "Time Till", albumartist: "Countdown Calculator"},
{albumcover: "/mockups/vdbmockup.png", albumname: "VDB Speed", albumartist: "Paddling Pace Calculator"},
{albumcover: "/mockups/cssmockup.png", albumname: "CSS Hearts", albumartist: "CSS visualisation"},
{albumcover: "/mockups/ebmockup.png", albumname: "Equi Book", albumartist: "Equestrian Social Media"},
{albumcover: "/mockups/esmockup.png", albumname: "eSports Level Up", albumartist: "eSports education"},
]


</script>

<div class="mx-auto grid grid-cols-1 gap-4 p-4">




	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img class="" src="/covercoding2.jpg" alt="me smiling at a pool" />
				<button class="hidden sm:block absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p></button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Coding</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">13 projects - 6 years</h3>
				
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p></button>
			<h1 class="sm:hidden font-bold text-5xl text-white px-2">Coding</h1>
			<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">13 projects - 6 years</h3>
				
		</header>

		<Play />

		<h3 class="h3 p-4 font-semibold">Catalogue</h3>

		
		<div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">

			{#each albums as {albumcover, albumname, albumartist}, index (albumcover)}
				<div class="col-span-1 card card-hover overflow-hidden max-w-xs">
					<header class="flex justify-around">
						<img src={albumcover} class="max-w-fill" alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3">{albumname}</h3>
		
						<article>
							<p class="description">{albumartist}</p>
						</article>
					</div>
		
					
				</div>
			{/each}
			
		</div>

		


</div>
</div>

	
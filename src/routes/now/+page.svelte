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
                    <img class="" src="/covernow.png" alt="me smiling at a pool" />
                    <button class="hidden sm:block absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Squirrel</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Now</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">6 Focus areas</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Squirrel</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Now</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">6 Focus areas</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">What I'm up to currently</h3>
    
            
            <!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-compact table-hover">
		
		<tbody>
			
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Web Dev</div><div class="mx-2 text-lg">This site</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Rebuilding using Sveltekit</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Mid Jan 2024</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Web Dev</div><div class="mx-2 text-lg">Aero Oats</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Update for new season</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Dependent on PTO</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Web Dev</div><div class="mx-2 text-lg">Afternoons Coffeespoons</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Rebuild using Sveltekit</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Mid Jan 2024</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Writing</div><div class="mx-2 text-lg">Humphrey and Hunter</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Add Karkloof article</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">End Jan 2024</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Triathlon</div><div class="mx-2 text-lg">KZN Tri Champs</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Get some panic training done</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">24 Jan 2024</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 min-w-28">Music</div><div class="mx-2 text-lg">Piano Lessons</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Re-engage with the Pianote lessons</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">End Jan 2024</div></div></td>
				</tr>
				
                
			
		</tbody>
	
	</table>
</div>
    

    
  </div>
</div>
    
        
<script lang="ts">

let followingStatus :String = "Following";
function follow() {
	if (followingStatus == "Follow") {
		followingStatus = "Following";
	} else {
		followingStatus = "Follow";
	}
	
};

let activeStatus :String = "";
function active() {
	if (activeStatus == "") {
		activeStatus = "text-green-400";
	} else {
		activeStatus = "";
	}
	
};

</script>

<div class="mx-auto grid grid-cols-1 gap-4 p-4">




	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img class="" src="/coverphoto2w.jpg" alt="me smiling at a pool" />
				<button class="hidden sm:block absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified</p></button>
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
		<button class="badge variant-ringed px-4 h-10 my-6 mx-2 hover:variant-filled text-lg" on:click={follow}>{followingStatus}</button>
		<button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"><i class="material-icons text-4xl">more_horiz</i></button>
		
		</div>

		<h3 class="h3 p-4 font-semibold">Popular</h3>

		


		
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-compact table-hover">
		
		<tbody>
			
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1</div><img src="/a1.jpg" class="max-h-14 mx-2" alt=""><div class="mx-2 text-lg">Afternoons & Coffeespoons</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2</div><img src="/a2.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Self Esteem</div></div></td>
					
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">3</div><img src="/a3.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Saints and Sailors</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">4</div><img src="/a4.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Blinded</div></div></td>
					
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">5</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Believe</div></div></td>
				</tr>
			
		</tbody>
	
	</table>
</div>

<h3 class="h3 p-4 font-semibold">On Tour</h3>

<div class="flex px-4"><div class="p-2 px-4 text-2xl text-center rounded-md bg-gray-700/50"><div class="">Dec</div><div class="font-bold text-2xl">2008</div></div><div><div class="mx-4 text-2xl">Ballito, South Africa</div><div class="mx-4 opacity-75">From 2008 to present</div></div></div>


<h3 class="h3 p-4 font-semibold">About</h3>
<div class="px-4 max-w-3xl relative card-hover">
	<img src="/coverphoto.jpg" alt="" class="rounded-lg grayscale brightness-50">
	<div class="hidden lg:block absolute text-lg font-semibold bottom-12 left-5 opacity-100 p-6">
	<div class="italic">"I struggle at triathlon, photography, coding and guitar. Im good at my day job working in a bank."</div><br>
	<div>My areas of focus are web development, not sucking at guitar and piano, taking more photos and training for triathlon. In 2017 I self-published a book on Amazon about trying to qualify for World Triathlon Champs.</div><br>
	<div>Im an amateur at all of my passions and tend to spend more time reading and thinking about projects than actually doing anything. This website is my “ledger of done”…and once its done who says it cant be made perfect.</div>
</div>
</div>
<div class="lg:hidden text-lg font-semibold opacity-100 p-6">
	<div class="italic">"I struggle at triathlon, photography, coding and guitar. Im good at my day job working in a bank."</div><br>
	<div>My areas of focus are web development, not sucking at guitar and piano, taking more photos and training for triathlon. In 2017 I self-published a book on Amazon about trying to qualify for World Triathlon Champs.</div><br>
	<div>Im an amateur at all of my passions and tend to spend more time reading and thinking about projects than actually doing anything. This website is my “ledger of done”…and once its done who says it cant be made perfect.</div>
</div>
<img src="/comic.jpg" class="p-4 card-hover" alt="">



	</div>

</div>

	
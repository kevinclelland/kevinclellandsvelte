<script lang="ts">

let activeStatus :String = "";
function active() {
	if (activeStatus == "") {
		activeStatus = "text-green-400";
	} else {
		activeStatus = "";
	}
	
};

</script>

<div class="flex">
    <button class="rounded-full h-14 w-14 flex items-center justify-center my-4 mx-2 text-black bg-green-600 hover:bg-green-500"><i class="material-icons text-4xl">play_arrow</i></button>
    <button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100 {activeStatus}" on:click={active}><i class="material-icons text-4xl">shuffle</i></button>
    <button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"><i class="material-icons text-4xl">add_circle_outline</i></button>
    <button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"><i class="material-icons text-4xl">arrow_circle_down</i></button>
    <button class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"><i class="material-icons text-4xl">more_horiz</i></button>
    
    </div>
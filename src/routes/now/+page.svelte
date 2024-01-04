<script lang="ts">
    import Play from "$lib/components/Play.svelte";


    let items = [
    {theme: "Web Dev", what: "Kevin Clelland", description: "Rebuilding using Svelte", timeline: "Mid Jan 2024"},
    {theme: "Web Dev", what: "Aero Oats", description: "Update for new season", timeline: "Dependent on PTO"},
    {theme: "Web Dev", what: "Afternoons Coffeespoons", description: "Rebuild using Sveltekit", timeline: "Mid Jan 2024"},
    {theme: "Writing", what: "Humphrey and Hunter", description: "Add Karkloof article", timeline: "End Jan 2024"},
    {theme: "Triathlon", what: "KZN Tri Champs", description: "Get some panic training done", timeline: "24 Jan 2024"},
    {theme: "Music", what: "Piano Lessons", description: "Re-engage with the Pianote lessons", timeline: "End Jan 2024"},
    
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/covernow.jpg" alt="me smiling at a pool" />
                    <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Squirrel</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Now</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">6 Focus areas</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Squirrel</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Now</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">6 Focus areas</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">What I'm up to currently</h3>
            <div class="grid md:grid-cols-3">
            {#each items as {theme, what, description, timeline}}
            <div class="p-4 m-4 md:col-span-1 card card-hover overflow-hidden w-auto shadow-xl">
                <div class="flex">
                <img src="" class="max-h-24 mx-2" alt="">
                <div>
                    <div>Theme: {theme}</div>
                    <div>What: {what}</div>
                    <div>Description: {description}</div>
                    <div>Deadline: {timeline}</div>
                </div>
            </div>
            </div>
        {/each}
    </div>
  

    
  </div>
</div>
    
        
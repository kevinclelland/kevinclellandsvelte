<script lang="ts">
    import Play from "$lib/components/Play.svelte";


    let items = [
    {theme: "Web Dev", what: "Homebru Computer Club", description: "Fun pointless site inspired by the Homebrew Computer Club", timeline: "June 2024"},
    {theme: "Web Dev", what: "The Greeters Guild", description: "Another pointless but fun project inspired by the comedy of Troy Hawke", timeline: "June 2024"},
    {theme: "Web Dev", what: "Next JS", description: "Getting more familiar with Next to assess switching from Svelte", timeline: "April/May 2024"},
    {theme: "Triathlon", what: "Durban 70.3", description: "Get on top of my health so I can eventually start training!", timeline: "02 June 2024"},
    {theme: "Music", what: "Guitar", description: "Very casually learning My Hero by The Foo Fighters", timeline: "April 2024"},
    
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/covernow.webp" alt="me smiling at a pool" />
                    <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2 bg-slate-700">Verified Squirrel</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Now</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1 bg-slate-700">5 Focus areas</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Squirrel</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Now</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">5 Focus items</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">What I'm up to currently</h3>
            <h3 class="h4 px-4 font-semibold">Last Udated: April 2024</h3>
            <div class="grid md:grid-cols-3">
            {#each items as {theme, what, description, timeline}}
            <div class="p-4 m-4 md:col-span-1 card card-hover overflow-hidden w-auto shadow-xl border">
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
    
        
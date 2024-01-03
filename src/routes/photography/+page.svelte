<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    
    let photos = [
    {location: "/gallery/1.jpg"}, 
    {location: "/gallery/2.jpg"}, 
    {location: "/gallery/3.jpg"}, 
    {location: "/gallery/4.jpg"}, 
    {location: "/gallery/5.jpg"}, 
    {location: "/gallery/6.jpg"}, 
    {location: "/gallery/7.jpg"}, 
    {location: "/gallery/8.jpg"}, 
    {location: "/gallery/9.jpg"}, 
    {location: "/gallery/10.jpg"},
    {location: "/gallery/11.jpg"}, 
    {location: "/gallery/12.jpg"},  
    {location: "/gallery/13.jpg"}, 
    {location: "/gallery/14.jpg"}, 
    {location: "/gallery/15.jpg"}, 
    {location: "/gallery/16.jpg"},
    {location: "/gallery/17.jpg"},
    {location: "/gallery/18.jpg"},
    {location: "/gallery/19.jpg"},
    {location: "/gallery/20.jpg"},
    {location: "/gallery/21.jpg"},
    {location: "/gallery/22.jpg"},
    {location: "/gallery/23.jpg"},
    {location: "/gallery/24.jpg"},
    {location: "/gallery/25.jpg"},
    {location: "/gallery/26.jpg"},
    {location: "/gallery/27.jpg"},
    {location: "/gallery/28.jpg"},
    {location: "/gallery/29.jpg"},
    {location: "/gallery/30.jpg"},
    {location: "/gallery/31.jpg"},
    {location: "/gallery/32.jpg"},
    {location: "/gallery/33.jpg"},
    {location: "/gallery/34.jpg"},
    {location: "/gallery/35.jpg"},
    {location: "/gallery/36.jpg"},
    {location: "/gallery/37.jpg"},
    {location: "/gallery/38.jpg"},
    {location: "/gallery/39.jpg"},
    {location: "/gallery/40.jpg"},
    {location: "/gallery/41.jpg"},
    {location: "/gallery/42.jpg"},
    {location: "/gallery/43.jpg"},
    {location: "/gallery/44.jpg"},
    {location: "/gallery/45.jpg"},
    {location: "/gallery/46.jpg"},
    {location: "/gallery/47.jpg"},
    {location: "/gallery/48.jpg"},
    {location: "/gallery/49.jpg"},
    {location: "/gallery/50.jpg"},
    {location: "/gallery/51.jpg"},
    {location: "/gallery/52.jpg"},
    {location: "/gallery/53.jpg"},
    {location: "/gallery/54.jpg"},
    {location: "/gallery/55.jpg"},
    {location: "/gallery/56.jpg"},
    {location: "/gallery/57.jpg"},
    {location: "/gallery/58.jpg"},
    {location: "/gallery/59.jpg"},
    {location: "/gallery/60.jpg"},
    {location: "/gallery/61.jpg"},
    {location: "/gallery/62.jpg"},
    {location: "/gallery/63.jpg"},
    {location: "/gallery/64.jpg"},
    {location: "/gallery/65.jpg"},
    {location: "/gallery/66.jpg"},
    {location: "/gallery/67.jpg"},
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/coverphotography.png" alt="me smiling at a pool" />
                    <button class="hidden sm:block bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p></button>
                    <h1 class="hidden sm:block font-bold text-5xl text-white bottom-20 left-5">Photography</h1>
                    <h3 class="hidden sm:block text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">3 cameras - 20 years</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Photography</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">3 cameras - 20 years</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">Some Favourites</h3>
    
            
            <div class="mx-auto justify-items-center grid grid-cols-1 gap-4 p-4">
    
                {#each photos as {location}}
                    <div class="col-span-1 card card-hover overflow-hidden max-w-full">
                        
                            <img src={location} class="" alt="Post" />
                       
                                   
                        
                    </div>
                {/each}
                
            </div>
    
            
    
    
    </div>
    </div>
    
        
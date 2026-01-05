<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    
    let photos = [
    {location: "/gallery/1.webp"}, 
    {location: "/gallery/2.webp"}, 
    {location: "/gallery/3.webp"}, 
    {location: "/gallery/4.webp"}, 
    {location: "/gallery/5.webp"}, 
    {location: "/gallery/6.webp"}, 
    {location: "/gallery/7.webp"}, 
    {location: "/gallery/8.webp"}, 
    {location: "/gallery/9.webp"}, 
    {location: "/gallery/10.webp"},
    {location: "/gallery/11.webp"}, 
    {location: "/gallery/12.webp"},  
    {location: "/gallery/13.webp"}, 
    {location: "/gallery/14.webp"}, 
    {location: "/gallery/15.webp"}, 
    {location: "/gallery/16.webp"},
    {location: "/gallery/17.webp"},
    {location: "/gallery/18.webp"},
    {location: "/gallery/19.webp"},
    {location: "/gallery/20.webp"},
    {location: "/gallery/21.webp"},
    {location: "/gallery/22.webp"},
    {location: "/gallery/23.webp"},
    {location: "/gallery/24.webp"},
    
    
    {location: "/gallery/27.webp"},
    
    {location: "/gallery/29.webp"},
    {location: "/gallery/30.webp"},
    {location: "/gallery/31.webp"},
    {location: "/gallery/32.webp"},
    {location: "/gallery/33.webp"},
    {location: "/gallery/34.webp"},
    {location: "/gallery/35.webp"},
    {location: "/gallery/36.webp"},
    {location: "/gallery/37.webp"},
    {location: "/gallery/38.webp"},
    {location: "/gallery/39.webp"},
    {location: "/gallery/40.webp"},
    {location: "/gallery/41.webp"},
    {location: "/gallery/42.webp"},
    {location: "/gallery/43.webp"},
    {location: "/gallery/44.webp"},
    {location: "/gallery/45.webp"},
    {location: "/gallery/46.webp"},
    {location: "/gallery/47.webp"},
    {location: "/gallery/48.webp"},
    {location: "/gallery/49.webp"},
    {location: "/gallery/50.webp"},
    {location: "/gallery/51.webp"},
    {location: "/gallery/52.webp"},
    
    {location: "/gallery/54.webp"},
    {location: "/gallery/55.webp"},
    
    {location: "/gallery/57.webp"},
    {location: "/gallery/58.webp"},
    {location: "/gallery/59.webp"},
    {location: "/gallery/60.webp"},
    {location: "/gallery/61.webp"},
    {location: "/gallery/62.webp"},
    {location: "/gallery/63.webp"},
    {location: "/gallery/64.webp"},
    {location: "/gallery/65.webp"},
    {location: "/gallery/66.webp"},
    {location: "/gallery/67.webp"},
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/coverphotography.webp" alt="me smiling at a pool" />
                    <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Photography</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">3 cameras - 20 years</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Hobbyist</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Photography</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">3 cameras - 20 years</h3>
                    
            </header>
    
            <Play 
                pageName="Photography" 
                playAction="scroll"
            />
    
            <h3 class="h3 p-4 font-semibold">Some Favourites</h3>
    
            
            <div class="mx-auto justify-items-center bg-white grid grid-cols-1 gap-4 p-4">
    
                {#each photos as {location}, index}
                    <div class="col-span-1 card card-hover overflow-hidden max-w-full shadow-xl">
                        
                            <img src={location} class="" alt="Photography gallery image {index + 1}" loading="lazy" />
                       
                                   
                        
                    </div>
                {/each}
                
            </div>
    
            
    
    
    </div>
    </div>
    
        
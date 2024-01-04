<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    
    let projects = [
    {projectphoto: "/birds/33.jpg", projectname: "Garden Birds", projectdesc: "Lockdown project photographing and identifying birds in my garden", link: "gardenbirds"},
        
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/coverprojects.jpg" alt="me smiling at a pool" />
                    <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Randomness</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Projects</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">1 project</h3>
                    
                </div>
                <button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Randomness</p></button>
                    <h1 class="sm:hidden font-bold text-5xl text-white px-2">Projects</h1>
                    <h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">1 project</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">List of Projects</h3>
    
            
            <div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
    
                {#each projects as {projectphoto, projectname, projectdesc, link}, index (projectphoto)}
                    <div class="col-span-1 card card-hover overflow-hidden max-w-xs">
                        <a href="{link}"><header class="flex justify-around">
                            <img src={projectphoto} class="max-w-fill" alt="Post" />
                        </header>
                        <div class="p-4 space-y-4">
                            <h3 class="h3">{projectname}</h3>
            
                            <article>
                                <p class="description">{projectdesc}</p>
                            </article>
                        </div>
                    </a>
                        
                    </div>
                {/each}
                
            </div>
    
            
    
    
    </div>
    </div>
    
        
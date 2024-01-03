<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;

    
    </script>
    
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
            
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/writingcover.png" alt="me smiling at a pool" />
                    <button class="hidden sm:block absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-black font-semibold mx-2">Verified Author (lol)</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-black bottom-20 left-5">Writing</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-black bottom-12 left-5 opacity-75 mx-1">1 book, 5 posts</h3>
                    
                </div>
                <button class="sm:hidden px-2 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Author</p></button>
                    <h1 class="sm:hidden px-2 text-white font-bold text-5xl">Writing</h1>
                    <h3 class="sm:hidden px-2 text-white text-lg font-semibold opacity-75 mx-1">1 book, 5 posts</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">Writing links</h3>
                    
            
            <div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    <!-- Detailed -->
                    {#each data.posts as post}
                        <div class="col-span-1 card card-hover max-w-2xl overflow-hidden">
                            <header class="flex justify-around">
                                <img src={post.photo} class="bg-black/50 max-h-80" alt="Post" />
                            </header>
                            <div class="p-4 space-y-4">
                                <h3 class="h3"><a href={post.slug} class="title">{post.title}</a></h3>
            
                                <article>
                                    <p class="description">{post.description}</p>
                                </article>
                            </div>
            
                            <hr class="opacity-50" />
                            <footer class="p-4 flex justify-start items-center space-x-4">
                                <Avatar src={post.avatar} width="w-8" />
                                <div class="flex-auto flex justify-between items-center">
                                    <h6 class="font-bold">{post.user}</h6>
                                    <small class="date">On {formatDate(post.date)}</small>
                                </div>
                            </footer>
                        </div>
                    {/each}
            </div>
            
    
  </div>
</div>


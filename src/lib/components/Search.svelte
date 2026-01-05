<script lang="ts">
    import { slide } from 'svelte/transition';
    
    export let isOpen = false;
    let searchQuery = '';
    let inputElement: HTMLInputElement;
    
    // Focus input when opened
    $: if (isOpen && inputElement) {
        setTimeout(() => inputElement.focus(), 100);
    }
    
    const listData = [
        { icon:'🏠', name: 'Home', label: 'Welcome Page', link: '', keywords: 'home welcome landing main' },
        { icon:'💻️', name: 'Coding', label: 'Coding Graveyard', link: 'coding', keywords: 'programming development software web' },
        { icon:'👟', name: 'Triathlon', label: 'Tri race results', link: 'triathlon', keywords: 'running swimming cycling sports race' },
        { icon:'✍️', name: 'Writing', label: 'My book and other stuff', link: 'writing', keywords: 'blog book author writing articles' },
        { icon:'📸', name: 'Photography', label: 'Some of my favourite photos', link: 'photography', keywords: 'photos pictures images camera' },
        { icon:'🧪', name: 'Projects', label: 'Random Rabbit Holes', link: 'projects', keywords: 'experiments projects ideas innovations' },
        { icon:'⏳️', name: 'Now', label: 'What I am up to now', link: 'now', keywords: 'current status updates present' }
    ];

    $: searchResults = searchQuery 
        ? listData.filter(item => 
            (item.name.toLowerCase() + ' ' + 
             item.label.toLowerCase() + ' ' + 
             item.keywords.toLowerCase())
            .includes(searchQuery.toLowerCase())
          )
        : [];

    function closeSearch() {
        isOpen = false;
        searchQuery = '';
    }
    
    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            closeSearch();
        }
    }
</script>

{#if isOpen}
<div 
    class="fixed inset-0 bg-black/50 z-50"
    on:click|self={closeSearch}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="search-title"
    tabindex="-1"
    transition:slide
>
    <div class="w-full max-w-2xl mx-auto mt-20 p-4">
        <div class="card p-4 bg-surface-100-800-token">
            <h2 id="search-title" class="sr-only">Search pages</h2>
            <div class="flex items-center gap-2 mb-4">
                <i class="material-icons" aria-hidden="true">search</i>
                <input
                    type="text"
                    class="input w-full"
                    placeholder="Search pages..."
                    bind:value={searchQuery}
                    bind:this={inputElement}
                    aria-label="Search input"
                >
                <button 
                    class="btn-icon variant-filled-surface" 
                    on:click={closeSearch}
                    aria-label="Close search"
                >
                    <i class="material-icons" aria-hidden="true">close</i>
                </button>
            </div>

            {#if searchQuery}
                <div class="space-y-2 max-h-96 overflow-y-auto" role="list">
                    {#each searchResults as result}
                        <a 
                            href="/{result.link}" 
                            class="flex items-center p-2 hover:bg-surface-500/20 rounded-token"
                            on:click={closeSearch}
                            role="listitem"
                        >
                            <div class="p-2 text-2xl rounded-md bg-sky-500/25 mr-3" aria-hidden="true">
                                {result.icon}
                            </div>
                            <div>
                                <div class="font-bold">{result.name}</div>
                                <div class="text-sm opacity-50">{result.label}</div>
                            </div>
                        </a>
                    {/each}

                    {#if searchResults.length === 0}
                        <p class="text-center p-4 opacity-50" role="status">No results found</p>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>
{/if} 
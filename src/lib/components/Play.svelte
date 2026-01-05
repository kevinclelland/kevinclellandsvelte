<script lang="ts">
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { getRandomPage, toggleFavorite, isFavorite, sharePage } from '$lib/utils/navigation';
import { onMount } from 'svelte';

export let playAction: (() => void) | string = 'scroll'; // Default action or custom function
export let featuredLink: string = ''; // Optional featured project/content link
export let pageName: string = 'Page';

let isFavorited = false;
let showMoreMenu = false;

onMount(() => {
    if (browser) {
        isFavorited = isFavorite(pageName);
    }
});

function handlePlay() {
    if (typeof playAction === 'function') {
        playAction();
    } else if (playAction === 'scroll') {
        // Scroll to main content
        const content = document.querySelector('h3');
        if (content) {
            content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function handleShuffle() {
    const randomPage = getRandomPage($page.url.pathname);
    goto(randomPage);
}

function handleFavorite() {
    isFavorited = toggleFavorite(pageName);
}

function handleFeaturedLink() {
    if (featuredLink) {
        window.open(featuredLink, '_blank');
    } else {
        // Default: share page
        handleShare();
    }
}

async function handleShare() {
    const shared = await sharePage(pageName, window.location.href);
    if (shared && !navigator.share) {
        // Show copied notification
        alert('Link copied to clipboard!');
    }
}

function toggleMoreMenu() {
    showMoreMenu = !showMoreMenu;
}

</script>

<div class="flex relative">
    <button 
        class="rounded-full h-14 w-14 flex items-center justify-center my-4 mx-2 text-black bg-green-600 hover:bg-green-500"
        on:click={handlePlay}
        aria-label="Play or navigate"
        title="Navigate to content"
    >
        <i class="material-icons text-4xl">play_arrow</i>
    </button>
    
    <button 
        class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100 transition-colors"
        on:click={handleShuffle}
        aria-label="Shuffle to random page"
        title="Go to random page"
    >
        <i class="material-icons text-4xl">shuffle</i>
    </button>
    
    <button 
        class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100 transition-colors {isFavorited ? 'text-green-400' : ''}"
        on:click={handleFavorite}
        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
        <i class="material-icons text-4xl">{isFavorited ? 'favorite' : 'add_circle_outline'}</i>
    </button>
    
    <button 
        class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"
        on:click={handleFeaturedLink}
        aria-label={featuredLink ? 'View featured content' : 'Share page'}
        title={featuredLink ? 'View featured content' : 'Share page'}
    >
        <i class="material-icons text-4xl">{featuredLink ? 'open_in_new' : 'share'}</i>
    </button>
    
    <button 
        class="rounded-full h-18 w-18 flex items-center justify-center my-4 mx-2 opacity-75 hover:opacity-100"
        on:click={toggleMoreMenu}
        aria-label="More options"
        title="More options"
    >
        <i class="material-icons text-4xl">more_horiz</i>
    </button>
    
        {#if showMoreMenu}
            <div 
                class="absolute top-20 right-0 bg-surface-800 rounded-lg shadow-xl p-2 z-50 min-w-48"
                role="menu"
            >
                <button 
                    class="w-full text-left px-4 py-2 hover:bg-surface-700 rounded flex items-center gap-2"
                    on:click={() => { handleShare(); showMoreMenu = false; }}
                >
                    <i class="material-icons">share</i>
                    Share Page
                </button>
                <a 
                    href="https://www.linkedin.com/in/kevin-clelland-84311420"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full block text-left px-4 py-2 hover:bg-surface-700 rounded flex items-center gap-2"
                    on:click={() => showMoreMenu = false}
                >
                    <i class="material-icons">work</i>
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full block text-left px-4 py-2 hover:bg-surface-700 rounded flex items-center gap-2"
                    on:click={() => showMoreMenu = false}
                >
                    <i class="material-icons">code</i>
                    GitHub
                </a>
                <a 
                    href="mailto:kevinclelland@gmail.com?subject=CV Request"
                    class="w-full block text-left px-4 py-2 hover:bg-surface-700 rounded flex items-center gap-2"
                    on:click={() => showMoreMenu = false}
                >
                    <i class="material-icons">description</i>
                    Request CV
                </a>
                <a 
                    href="https://x.com/kevinclelland"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full block text-left px-4 py-2 hover:bg-surface-700 rounded flex items-center gap-2"
                    on:click={() => showMoreMenu = false}
                >
                    <i class="material-icons">tag</i>
                    Follow on X
                </a>
            </div>
        {/if}
</div>

<!-- Click outside to close menu -->
{#if showMoreMenu}
    <button 
        class="fixed inset-0 z-40"
        on:click={() => showMoreMenu = false}
        aria-label="Close menu"
    ></button>
{/if}
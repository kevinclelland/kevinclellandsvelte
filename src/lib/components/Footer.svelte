<script lang="ts">
import { RangeSlider } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { onMount, onDestroy } from 'svelte';

let valueseconds = 0;
let interval: ReturnType<typeof setInterval>;
const MAX_SECONDS = 235; // 3 minutes and 55 seconds
let isPlaying = true; // Add this to track play state

// Track previous pathname to prevent double triggers
let previousPathname = '';

// Reset timer when page changes
$: if ($page.url.pathname && $page.url.pathname !== previousPathname) {
    previousPathname = $page.url.pathname;
    resetTimer();
    isPlaying = true; // Reset to playing state on page change
}

function resetTimer() {
    if (interval) {
        clearInterval(interval);
    }
    valueseconds = 0;
    startTimer();
}

function startTimer() {
    // Clear any existing interval first
    if (interval) {
        clearInterval(interval);
    }
    
    interval = setInterval(() => {
        if (valueseconds < MAX_SECONDS) {
            valueseconds += 1;
        } else {
            clearInterval(interval);
            isPlaying = false;
        }
    }, 1000);
}

function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        startTimer();
    } else {
        clearInterval(interval);
    }
}

// Cleanup interval when component is destroyed
onDestroy(() => {
    if (interval) clearInterval(interval);
});

// Start timer when component mounts
onMount(() => {
    previousPathname = $page.url.pathname;
    startTimer();
});

// Format time for display
function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/*let interval: string | number | NodeJS.Timeout | undefined;
let isPlaying = "play_arrow";

function increaseValue() {
  interval = setInterval(() => {
    valueseconds += 1;
  }, 1000);
}

function playing() {
  increaseValue();
  if (valueseconds > songs[songselection].max) {
    clearInterval(interval);
    valueseconds = 0;
  }
  if (isPlaying == "play_arrow") {
    isPlaying = "pause";
  } else {
    isPlaying = "play_arrow";
  }
  if (isPlaying == "play_arrow") {
    clearInterval(interval);
  }

}

let songs = [
    {photo: "/a2.jpg", songname: "Genocide", artist: "The Offspring", max: 213,},
    {photo: "/a1.jpg", songname: "The Psychic", artist: "Crash Test Dummies", max: 230,},
    {photo: "/a3.jpg", songname: "Saints and Sailors", artist: "Dashboard Confessional", max: 153,},
    {photo: "/a4.jpg", songname: "Blinded", artist: "Third Eye Blind", max: 213,},
    {photo: "/a5.jpg", songname: "Believe", artist: "K's Choice", max: 213,},
    {photo: "/a1.jpg", songname: "God Shuffled His Feet", artist: "Crash Test Dummies", max: 213,},
    {photo: "/a2.jpg", songname: "Self Esteem", artist: "The Offspring", max: 213,},
    {photo: "/a6.jpg", songname: "Mutt", artist: "Blink 182", max: 213,},
    {photo: "/a7.jpg", songname: "Some Sort of Grace", artist: "Shotgun Tori", max: 213,},
    {photo: "/a8.jpg", songname: "Just", artist: "Henry Ate", max: 213,},
    {photo: "/a9.jpg", songname: "Overweight", artist: "Blue October", max: 213,},
    {photo: "/a10.jpg", songname: "Defying Gravity", artist: "Wicked", max: 213,},
    {photo: "/a11.jpg", songname: "Born to Run", artist: "Bruce Springsteen", max: 213,},
    {photo: "/a12.jpg", songname: "Head Over Feet", artist: "Alanis Morissette", max: 213,},
    {photo: "/a13.jpg", songname: "The Blower's Daughter", artist: "Damien Rice", max: 213,},

    ]*/

// Get current route and find its index in listData
$: currentIndex = listData.findIndex(item => {
    if ($page.url.pathname === '/' && item.link === '') {
        return true;
    }
    return item.link === $page.url.pathname.slice(1);
});

function previoussong() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = listData.length - 1;
    }
    goto('/' + listData[newIndex].link);
}

function nextsong() {
    let newIndex = currentIndex + 1;
    if (newIndex >= listData.length) {
        newIndex = 0;
    }
    goto('/' + listData[newIndex].link);
}

// Update songselection to match current route
$: songselection = currentIndex >= 0 ? currentIndex : 0;

const listData = [
    { avatar: 'YOErFW8AfkI', icon:'🏠', name: 'Home', label: 'Welcome Page', link: '', max: 235, },
    //{ avatar: 'YOErFW8AfkI', icon:'❤️', name: 'Liked Songs', label: 'Playlist - 90 songs', link: 'likedsongs', max: 213, },
    { avatar: 'YOErFW8AfkI', icon:'💻️', name: 'Coding', label: 'Coding Graveyard', link: 'coding', max: 230, },
    { avatar: 'YOErFW8AfkI', icon:'👟', name: 'Triathlon', label: 'Tri race results', link: 'triathlon', max: 153, },
    { avatar: 'z_X0PxmBuIQ', icon:'✍️', name: 'Writing', label: 'My book and Blog', link: 'writing', max: 217, },
    { avatar: '8vKVlNIbAc4', icon:'📸', name: 'Photography', label: 'My favourite photos', link: 'photography', max: 313, },
    { avatar: '8vKVlNIbAc4', icon:'🧪', name: 'Projects', label: 'Random Rabbit Holes', link: 'projects', max: 262, },
    //{ avatar: '8vKVlNIbAc4', icon:'🎸', name: 'Music', label: 'The record company Rosie, gave me a big advance', link: 'music' },
    { avatar: '8vKVlNIbAc4', icon:'⏳️', name: 'Now', label: 'What I am up to now', link: 'now', max: 113, }
];

</script>

<footer class="bg-surface-100-800-token">
<!-- play bar -->
<div class="w-full flex items-center justify-between px-1 sm:px-3 bg-light border-t border-dark min-h-24" style="height: 12vh;">

  <div class="p-2 col-span-1 flex min-w-44 md:min-w-60">
			
    <div class="p-2 text-2xl rounded-md bg-sky-500/25">{listData[songselection].icon}</div>
    
      <div class="flex-auto place-self-center">
        <div class="font-bold px-2">{listData[songselection].name}</div>
        <div class="text-sm px-2 opacity-50">Now Playing</div>
      </div>
      <i class="hidden sm:block material-icons text-xl text-green-600">favorite</i>
    
  </div>
    <!--<div class="flex items-center">
      <div class="mx-2 w-12 md:w-20  h-12 md:h-20">
      <img src="{ songs[songselection].photo }" alt="album cover">
    </div>
      <div class="min-w-44 md:min-w-60">
        <h1 class="text-lg sm:text-xl text-white tracking-wide">{ songs[songselection].songname }</h1>
        <h2 class="text-sm text-lightest tracking-wide">{ songs[songselection].artist }</h2>
      </div>
      <i class="hidden sm:block material-icons text-xl text-green-600">favorite</i>
      
    </div>
-->
    <div class="flex flex-col justify-center w-1/3 items-center mr-2">
      <div class="flex items-center">
        <button class="hidden sm:block mx-5 text-lightest hover:text-white">
            <i class="material-icons text-lg">shuffle</i>
        </button>
        <button class="text-lightest hover:text-white" on:click={previoussong}>
            <i class="material-icons text-lg">skip_previous</i>
        </button>
        <button 
            class="rounded-full h-10 w-10 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white"
            on:click={togglePlayPause}
        >
            <i class="material-icons">{isPlaying ? 'pause' : 'play_arrow'}</i>
        </button>
        <button class="text-lightest hover:text-white" on:click={nextsong}>
            <i class="material-icons text-lg">skip_next</i>
        </button>
        <button class="hidden sm:block mx-5 text-lightest hover:text-white">
            <i class="material-icons text-lg">repeat</i>
        </button>
      </div>
      <div class="w-full flex items-center justify-center mt-3">
        <p class="text-xs text-lightest mr-2">{formatTime(valueseconds)}</p>
        <RangeSlider 
            name="range-slider" 
            class="w-full" 
            bind:value={valueseconds} 
            max={MAX_SECONDS} 
            step={1}
        ></RangeSlider>
        <p class="text-xs text-lightest ml-2">{formatTime(MAX_SECONDS)}</p>
      </div>
    </div>

    <div class="sm:flex items-center hidden">
      <i class="material-icons text-xl text-lightest hover:text-white">volume_up</i>
      <div class="h-20 w-1 mx-2 bg-lightest rounded-full hover:bg-white"></div>
    </div>
  </div>
</footer>

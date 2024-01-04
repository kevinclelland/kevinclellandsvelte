<script lang="ts">
import { RangeSlider } from '@skeletonlabs/skeleton';
let value = 0.00;

let max = 3.33;

let interval: string | number | NodeJS.Timeout | undefined;
let isPlaying = "play_arrow";

function increaseValue() {
  interval = setInterval(() => {
    value += 0.01;
  }, 1000);
}

function playing() {
  //increaseValue();
  //if (value > max) {
  //  clearInterval(interval);
  //  value = 0.00;
  //}
  if (isPlaying == "play_arrow") {
    isPlaying = "pause";
  } else {
    isPlaying = "play_arrow";
  }
  //if (isPlaying == "play_arrow") {
  //  clearInterval(interval);
  //}

}

let songs = [
    {photo: "/a2.jpg", songname: "Genocide", artist: "The Offspring", max: "3.33",},
    {photo: "/a1.jpg", songname: "The Psychic", artist: "Crash Test Dummies", max: "3.50",},
    {photo: "/a3.jpg", songname: "Saints and Sailors", artist: "Dashboard Confessional", max: "2.33",},
    {photo: "/a4.jpg", songname: "Blinded", artist: "Third Eye Blind", max: "3.33",},
    {photo: "/a5.jpg", songname: "Believe", artist: "K's Choice", max: "3.33",},
    {photo: "/a1.jpg", songname: "God Shuffled His Feet", artist: "Crash Test Dummies", max: "3.33",},
    {photo: "/a2.jpg", songname: "Self Esteem", artist: "The Offspring", max: "3.33",},
    {photo: "/a6.jpg", songname: "Mutt", artist: "Blink 182", max: "3.33",},
    {photo: "/a7.jpg", songname: "Some Sort of Grace", artist: "Shotgun Tori", max: "3.33",},
    {photo: "/a8.jpg", songname: "Just", artist: "Henry Ate", max: "3.33",},
    {photo: "/a9.jpg", songname: "Overweight", artist: "Blue October", max: "3.33",},
    {photo: "/a10.jpg", songname: "Defying Gravity", artist: "Wicked", max: "3.33",},
    {photo: "/a11.jpg", songname: "Born to Run", artist: "Bruce Springsteen", max: "3.33",},
    {photo: "/a12.jpg", songname: "Head Over Feet", artist: "Alanis Morissette", max: "3.33",},
    {photo: "/a13.jpg", songname: "The Blower's Daughter", artist: "Damien Rice", max: "3.33",},

    ]

 let songselection = 0;
 
 function nextsong() {
     songselection = songselection + 1;
     if (songselection > 14) {
         songselection = 0;
     }
    
 }

 function previoussong() {
     songselection = songselection - 1;
     if (songselection < 0) {
         songselection = 14;
     }
     
 }

</script>

<footer class="bg-surface-100-800-token">
<!-- play bar -->
<div class="w-full flex items-center justify-between px-1 sm:px-3 bg-light border-t border-dark" style="height: 12vh;">
    <div class="flex items-center">
      <div class="mx-2 w-12 md:w-20  h-12 md:h-20">
      <img src="{ songs[songselection].photo }" alt="album cover">
    </div>
      <div class="min-w-44 md:min-w-60">
        <h1 class="text-lg sm:text-xl text-white tracking-wide">{ songs[songselection].songname }</h1>
        <h2 class="text-sm text-lightest tracking-wide">{ songs[songselection].artist }</h2>
      </div>
      <i class="hidden sm:block material-icons text-xl text-green-600">favorite</i>
      
    </div>

    <div class="flex flex-col justify-center w-1/3 items-center">
      <div class="flex items-center">
        <button class="hidden sm:block mx-5 text-lightest hover:text-white"><i class="material-icons text-lg">shuffle</i></button>
        <button class="text-lightest hover:text-white" on:click={previoussong}><i class="material-icons text-lg">skip_previous</i></button>
        <button class="rounded-full h-10 w-10 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white" on:click={playing}><i class="material-icons">{isPlaying}</i></button>
        <button class="text-lightest hover:text-white" on:click={nextsong}><i class="material-icons text-lg">skip_next</i></button>
        <button class="hidden sm:block mx-5 text-lightest hover:text-white"><i class="material-icons text-lg">repeat</i></button>
      </div>
      <div class="w-full flex items-center justify-center mt-3">
        <p class="text-xs text-lightest mr-2">{value}</p>
        <RangeSlider name="range-slider" class="w-full" bind:value={value} max={max} step={0.01}></RangeSlider>
        
        <p class="text-xs text-lightest ml-2">{max}</p>
      </div>
    </div>

    <div class="sm:flex items-center hidden">
      <i class="material-icons text-xl text-lightest hover:text-white">volume_up</i>
      <div class="h-20 w-1 mx-2 bg-lightest rounded-full hover:bg-white"></div>
    </div>
  </div>
</footer>

<script lang="ts">
import { RangeSlider } from '@skeletonlabs/skeleton';
let value = 0.28;
let max = 3.33;
</script>

<footer class="bg-surface-100-800-token">
<!-- play bar -->
<div class="w-full flex items-center justify-between px-3 bg-light border-t border-dark" style="height: 12vh;">
    <div class="flex items-center">
      <div class="relative mx-2 w-14 md:w-20  h-14 md:h20">
      <img src="/a2.jpg" alt="Offspring smash album cover">
    </div>
      <div>
        <h1 class="text-xl text-white tracking-wide">Genocide</h1>
        <h2 class="text-sm text-lightest tracking-wide">The Offspring</h2>
      </div>
      <i class="material-icons text-xl text-green-600 mx-4">favorite</i>
      
    </div>

    <div class="flex flex-col justify-center w-1/3 items-center">
      <div class="flex items-center">
        <button class="hidden sm:block mx-5 text-lightest hover:text-white"><i class="material-icons text-lg">shuffle</i></button>
        <button class="text-lightest hover:text-white"><i class="material-icons text-lg">skip_previous</i></button>
        <button class="rounded-full h-10 w-10 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white"><i class="material-icons">pause</i></button>
        <button class="text-lightest hover:text-white"><i class="material-icons text-lg">skip_next</i></button>
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

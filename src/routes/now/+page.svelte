<script lang="ts">

</script>

<div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
    <!-- side nav -->
    <div class="w-56 bg-light h-full flex-none">
      <div class="p-4 flex items-center justify-center"><img src="saamplogocrop.png" class="h-28"></div>
      <div class="mx-2">
        <button class="w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start 'bg-light text-white' : 'text-lightest'}`">
          
          
        </button>

      </div>
      <div class="mx-5">
<h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">Playlists</h1>
<button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
  <i class="material-icons mr-3"> add_box</i>
  <p class="text-sm text-white font-semibold">Create Playlist</p>
</button>
<button class="flex items-center justify-start opacity-75 hover:opacity-100">
  <i class="material-icons mr-3">favorite_border</i>
  <p class="text-sm text-white font-semibold">Liked Songs</p>
</button>
<div class="h-px w-full bg-light my-3"></div>
      </div>
      <div class="mx-5">
        <div class="w-full h-28 overflow-y-scroll">
          <p class="text-lightest hover:text-white text-sm py-1"> </p>
        </div>
        <button class="flex items-center justify-start text-lightest hover:text-white py-6">
          <i class="material-icons mr-3 rounded-full border border-lightest">arrow_downward</i>
          <p class="text-sm font-semibold">Install App</p>
          </button>
      </div>

    </div>
    <!-- main content -->
    <div class="w-full h-full relative overflow-y-scroll">
      <!-- header -->
      <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-saampyellow z-20">
        <div class="flex items-center">
          <button class="rounded-full bg-saampgrey w8 h8 text-white mr-3">
            <i class="material-icons text-3xl">keyboard_arrow_left</i>
          </button>
          <button class="rounded-full bg-saampgrey w8 h8 text-white">
            <i class="material-icons text-3xl">keyboard_arrow_right</i>
          </button>
        </div>

        <h1 class="text-saampgrey text-4xl font-extrabold">SA AMP</h1>

        <div class="relative">
          <button class="bg-saampgrey rounded-full py-1 px-2 flex items-center">
            <img src="KJC Headshot.jpg" alt="" class="rounded-full h-6 w-6 mr-2">
            <p class="text-white font-semibold text-xs mr-3">Kevin Clelland</p>
            <i class="material-icons text-white">arrow_drop_down</i>
            <i class="material-icons text-white">arrow_drop_up</i>
          </button>
          <div class="absolute bg-light w-full rounded mt-1">
            <button class="w-full text-sm py-2 text-lightest hover:text-white border-b border-white opacity-75 hover:opacity-100">Account</button>
            <button class="w-full text-sm py-2 text-lightest hover:text-white border-b border-light opacity-75 hover:opacity-100">Log Out</button>
          </div>
        </div>
      </div>
      <!-- cards -->
      <div class="px-6 py-3">
      <div class="flex items-center justify-between">
        <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Albums</h1>
        <input type="text" placeholder="Search albums..." class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-saampyellow focus:ring-saampyellow block w-auto hover:w-96 rounded-md sm:text-sm focus:ring-1 text-black"/>
        <h2 class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3">See All</h2>
        </div>
        
        <div class="w-full flex flex-wrap">
          <div class="p-2 w-48 relative">
            <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100 z-10">
              <div class="bg-green rounded-full h-10 w-10 flex items-center justify-center">
                <i class="material-icons text-white text-2xl">play_arrow</i>
              </div>
            </div>
            <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
              <img src="" class="h-auto w-full shadow mb-2">
              <h1 class="text-sm font-semibold text-white tracking-wide truncate"> </h1>
              <h2 class="text-xs text-lightest tracking-wide pb-5 truncate"> </h2>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </div>

    

  </div>
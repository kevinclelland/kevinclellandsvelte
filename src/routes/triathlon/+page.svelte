<script lang="ts">
    import Play from "$lib/components/Play.svelte";


    let races = [
    {racedate: "02 Jun 2024", racelogo: "/703logo.jpg", racename: "Durban 70.3", raceresult: "Upcoming", racetime: "Upcoming"},
    {racedate: "24 Jan 2024", racelogo: "/otherlogo.jpg", racename: "KZN Tri Champs", raceresult: "Upcoming", racetime: "Upcoming"},
    {racedate: "19 Nov 2023", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "1st 34-39, 4th Overall", racetime: "00:49:30"},
    {racedate: "06 Aug 2023", racelogo: "/ultralogo.jpg", racename: "Durban Ultra Sprint", raceresult: "3rd 34-39, 13th Overall", racetime: "01:20:18"},
    {racedate: "12 Mar 2023", racelogo: "/tinmanlogo.jpg", racename: "Tinman Challenge", raceresult: "5th 34-39, 14th Overall", racetime: "02:26:15"},
    {racedate: "30 Oct 2022", racelogo: "/otherlogo.jpg", racename: "WWXTRI", raceresult: "1st 34-39, 1st Overall", racetime: "01:15:50"},
    {racedate: "02 Oct 2022", racelogo: "/703logo.jpg", racename: "Durban 70.3", raceresult: "11th 34-39, 64th Overall", racetime: "05:15:10"},
    {racedate: "21 Aug 2022", racelogo: "/tinmanlogo.jpg", racename: "Tinman Challenge", raceresult: "4th 34-39, 15th Overall", racetime: "02:15:52"},
    {racedate: "20 Feb 2022", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "1st 34-39, 1st Overall", racetime: "00:39:35"},
    {racedate: "09 Jan 2022", racelogo: "/otherlogo.jpg", racename: "KZN Tri Champs", raceresult: "2nd 34-39, 24th Overall", racetime: "02:44:56"},
    {racedate: "06 Jun 2021", racelogo: "/703logo.jpg", racename: "Durban Half Ironman", raceresult: "18th 35-39, 82nd Overall", racetime: "05:20:15"},
    {racedate: "16 Feb 2020", racelogo: "/tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "3rd 35-39, 19th Overall", racetime: "02:09:43"},
    {racedate: "19 Jan 2020", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "4th 35-39, 37th Overall", racetime: "02:28:01"},
    {racedate: "02 Jun 2019", racelogo: "/703logo.jpg", racename: "Durban Half Ironman", raceresult: "19th 35-39, 128th Overall", racetime: "05:01:20"},
    {racedate: "14 Apr 2019", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "3rd Male, 3rd Overall", racetime: "00:39:35"},
    {racedate: "17 Mar 2019", racelogo: "/otherlogo.jpg", racename: "Deloitte 10km run", raceresult: "26th Male, 29th Overall", racetime: "00:40:42"},
    {racedate: "12 Aug 2018", racelogo: "/tinmanlogo.jpg", racename: "Tinman 10km run", raceresult: "8th Male, 10th Overall", racetime: "00:45:13 (spasm)"},
    {racedate: "04 Feb 2018", racelogo: "/otherlogo.jpg", racename: "226 Brick 21km Run", raceresult: "1st 30-34, 4th Overall", racetime: "01:40:29"},
    {racedate: "14 Jan 2018", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "2nd 30-34, 23rd Overall", racetime: "02:22:18"},
    {racedate: "08 Oct 2017", racelogo: "/otherlogo.jpg", racename: "FNB 10km Run", raceresult: "109th Open, 155th Overall", racetime: "00:42:04"},
    {racedate: "28 May 2017", racelogo: "/otherlogo.jpg", racename: "KZN Duathlon Champs", raceresult: "1st 30-34, 24th Overall", racetime: "02:21:34"},
    {racedate: "19 Mar 2017", racelogo: "/otherlogo.jpg", racename: "SA Triathlon Champs", raceresult: "8th 30-34", racetime: "02:32:37"},
    {racedate: "05 Mar 2017", racelogo: "/ultralogo.jpg", racename: "Durban Ultra Sprint", raceresult: "2nd 24-39, 8th Overall", racetime: "01:04:28"},
    {racedate: "15 Jan 2017", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "2nd 30-34, 25th Overall", racetime: "02:25:09"},
    {racedate: "27 Nov 2016", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-34, 13th Overall", racetime: "01:13:58"},
    {racedate: "24 Oct 2016", racelogo: "/otherlogo.jpg", racename: "Golden Gate 3 Day Trail Run", raceresult: "43rd 30-39, 101st Overall", racetime: "13:06:30"},
    {racedate: "17 Apr 2016", racelogo: "/tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "15th Overall", racetime: "01:48:38"},
    {racedate: "22 Mar 2016", racelogo: "/otherlogo.jpg", racename: "SA Triathlon Champs", raceresult: "10th 30-34, 51st Overall", racetime: "01:28:35"},
    {racedate: "06 Mar 2016", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-34, 4th Overall", racetime: "01:12:19"},
    {racedate: "21 Feb 2016", racelogo: "tinmanlogo.jpg", racename: "Tinman Triathlon", raceresult: "1st 30-34, 4th Overall", racetime: "01:46:41"},
    {racedate: "17 Jan 2016", racelogo: "/otherlogo.jpg", racename: "KZN Triathlon Champs", raceresult: "1st 30-34, 8th Overall", racetime: "02:11:38"},
    {racedate: "29 Nov 2015", racelogo: "/ultralogo.jpg", racename: "Midlands Ultra Sprint", raceresult: "1st 30-39, 9th Overall", racetime: "01:19:17"},
        
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/covertri.webp" alt="me smiling at a pool" />
                    <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-black font-semibold mx-2">Verified Age Grouper</p></button>
                    <h1 class="hidden sm:block absolute font-bold text-5xl text-black bottom-20 left-5">Triathlon</h1>
                    <h3 class="hidden sm:block absolute text-lg font-semibold text-black bottom-12 left-5 opacity-75 mx-1">Since 2003</h3>
                    
                </div>
                <button class="sm:hidden text-white px-2 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Age Grouper</p></button>
                    <h1 class="sm:hidden text-white px-2 font-bold text-5xl">Triathlon</h1>
                    <h3 class="sm:hidden text-white px-2 text-lg font-semibold opacity-75 mx-1">Since 2003</h3>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">Results and Upcoming</h3>

            {#each races as {racedate, racelogo, racename, raceresult, racetime}}
            <div class="p-4 m-4 gap-4 card card-hover overflow-hidden w-auto md:w-1/4 shadow-xl">
                <div class="flex">
                <img src="{racelogo}" class="max-h-24 mx-2" alt="">
                <div>
                    <div>Date: {racedate}</div>
                    <div>{racename}</div>
                    <div>Result: {raceresult}</div>
                    <div>Time: {racetime}</div>
                </div>
            </div>
            </div>
        {/each}
    
            
    
<h3 class="h3 p-4 font-semibold">On Training</h3>
<div class="px-4 max-w-2xl relative card-hover">
	<img src="/trainerphoto.jpg" alt="" class="rounded-lg grayscale brightness-50">
	<div class="hidden lg:block absolute text-lg font-semibold bottom-20 left-5 opacity-100 p-6">
	<div class="italic">“It is simply that we can all be good boys and wear our letter sweaters around and get our little degrees and find some nice girl to settle, you know, down with…Or we can blaze! Become legends in our own time, strike fear in the heart of mediocre talent everywhere! We can scald dogs, put records out of reach! Make the stands gasp as we blow into an unearthly kick from three hundred yards out! We can become God’s own messengers delivering the dreaded scrolls! We can race dark Satan himself till he wheezes fiery cinders down the back straightaway….They’ll speak our names in hushed tones, ‘those guys are animals’ they’ll say! We can lay it on the line, bust a gut, show them a clean pair of heels. We can sprint the turn on a spring breeze and feel the winter leave our feet! We can, by God, let our demons loose and just wail on!”</div><br>
	
</div>
</div>

<div class="lg:hidden text-lg font-semibold opacity-100 p-6">
	<div class="italic">“It is simply that we can all be good boys and wear our letter sweaters around and get our little degrees and find some nice girl to settle, you know, down with…Or we can blaze! Become legends in our own time, strike fear in the heart of mediocre talent everywhere! We can scald dogs, put records out of reach! Make the stands gasp as we blow into an unearthly kick from three hundred yards out! We can become God’s own messengers delivering the dreaded scrolls! We can race dark Satan himself till he wheezes fiery cinders down the back straightaway….They’ll speak our names in hushed tones, ‘those guys are animals’ they’ll say! We can lay it on the line, bust a gut, show them a clean pair of heels. We can sprint the turn on a spring breeze and feel the winter leave our feet! We can, by God, let our demons loose and just wail on!”</div>
	
</div>
                
    
  </div>
</div>
    
        
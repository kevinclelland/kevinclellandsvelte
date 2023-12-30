<script lang="ts">
    import Play from "$lib/components/Play.svelte";


    let albums = [
    {albumcover: "/mockups/acmockup.png", albumname: "Afternoons Coffeespoons", albumartist: "Music Albums"},
    {albumcover: "/mockups/aomockup.png", albumname: "Aero Oats", albumartist: "Triathlon Tools"},
    {albumcover: "/mockups/hhmockup.png", albumname: "Humphrey & Hunter", albumartist: "Dog travel"},
    {albumcover: "/mockups/ssmockup.png", albumname: "Sanele Shange", albumartist: "Triathlete"},
    {albumcover: "/mockups/pomockup.png", albumname: "Product Owners Guide", albumartist: "Product Owner"},
    {albumcover: "/mockups/icmockup.png", albumname: "Inamandla Contractors", albumartist: "Construction Company"},
    {albumcover: "/mockups/lcmockup.png", albumname: "Lisa Clelland Kitchens", albumartist: "Kitchen Design Company"},
    {albumcover: "/mockups/rsmockup.png", albumname: "Rugby Strat", albumartist: "Rugby Game"},
    {albumcover: "/mockups/lifecmockup.png", albumname: "Life Check", albumartist: "Time Calculator"},
    {albumcover: "/mockups/tdpmockup.png", albumname: "Time Distance Pace", albumartist: "Running Calculator"},
    {albumcover: "/mockups/ttmockup.png", albumname: "Time Till", albumartist: "Countdown Calculator"},
    {albumcover: "/mockups/vdbmockup.png", albumname: "VDB Speed", albumartist: "Paddling Pace Calculator"},
    {albumcover: "/mockups/cssmockup.png", albumname: "CSS Hearts", albumartist: "CSS visualisation"},
    {albumcover: "/mockups/ebmockup.png", albumname: "Equi Book", albumartist: "Equestrian Social Media"},
    {albumcover: "/mockups/esmockup.png", albumname: "eSports Level Up", albumartist: "eSports education"},
    ]
    
    
    </script>
    
    <div class="mx-auto grid grid-cols-1 gap-4 p-4">
    
    
    
    
        <div class="col-span-3 card card-hover overflow-hidden">
            <header>
                <div class="relative">
                    <img class="" src="/covertri.png" alt="me smiling at a pool" />
                    <button class="absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Artist</p></button>
                    <h1 class="absolute font-bold text-5xl text-white bottom-20 left-5">Triathlon</h1>
                    <h3 class="absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">13 projects</h3>
                    
                </div>
                    
            </header>
    
            <Play />
    
            <h3 class="h3 p-4 font-semibold">Results and Upcoming</h3>
    
            
            <!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-compact table-hover">
		
		<tbody>
			
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">02 Jun 2024</div><img src="/a1.jpg" class="max-h-14 mx-2" alt=""><div class="mx-2 text-lg">Durban 70.3</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Upcoming</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Upcoming</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">24 Jan 2024</div><img src="/a2.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">KZN Tri Champs</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Upcoming</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">Upcoming</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">19 Nov 2023</div><img src="/a3.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Tinman 10km run</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">145,451</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">2:33</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">06 Aug 2023</div><img src="/a4.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Durban Ultra Sprint</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">2,421,148</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">4:21</div></div></td>
				</tr>
				<tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">12 Mar 2023</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Tinman Challenge</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">965,457</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">3:31</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">30 Oct 2022</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">WWXTRI</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">1st Age-Group, 1st Overall</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">01:15:50</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">02 Oct 2022</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Durban 70.3</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">11th Age-Group, 64th Overall</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">05:15:10</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">21 Aug 2022</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Tinman Challenge</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">4th Age-Group, 15th Overall</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">02:15:52</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">20 Feb 2022</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">Tinman 10km run</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">1st Age-Group, 1st Overall</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">00:39:35</div></div></td>
				</tr>
                <tr>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">09 Jan 2022</div><img src="/a5.jpg" class="max-h-14 m-0 mx-2" alt=""><div class="mx-2 text-lg">KZN Tri Champs</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">2nd Age-Group, 24th Overall</div></div></td>
					<td><div class="flex items-center"><div class="mx-2 text-lg opacity-75 hover:opacity-100">02:44:56</div></div></td>
				</tr>

                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">6 June 2021</div><div class="mx-2 text-lg">Durban Half Ironman</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">18th 35-39, 82nd Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">5:20:15</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">16 Feb 2020</div><div class="mx-2 text-lg">Tinman Triathlon</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">3rd 35-39, 19th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:09:43</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">19 January 2020</div><div class="mx-2 text-lg">KZN Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">4th 35-39, 37th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:28:01</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2 June 2019</div><div class="mx-2 text-lg">Durban Half Ironman</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">19th 35-39, 128th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">5:01:20</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">14 April 2019</div><div class="mx-2 text-lg">Tinman 10km Run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">3rd Male, 3rd Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">39:22</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">17 March 2019</div><div class="mx-2 text-lg">Deloitte 10km run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">26th Male, 29th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">40:42</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">12 Aug 2018</div><div class="mx-2 text-lg">Tinman 10km Run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">8th Male, 10th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">45:13 (back spasm]]]]])</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">4 Feb 2018</div><div class="mx-2 text-lg">226 Brick Challenge 21km Run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 4th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:40:29</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">14 Jan 2018</div><div class="mx-2 text-lg">KZN Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2nd 30-34, 23rd Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:22:18</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">8 Oct 2017</div><div class="mx-2 text-lg">FNB 10km Run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">109th Open, 155th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">42:04</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">28 May 2017</div><div class="mx-2 text-lg">KZN Duathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 24th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:21:34</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">19 March 2017</div><div class="mx-2 text-lg">SA Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">8th 30-34</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:32:37</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">5 March 2017</div><div class="mx-2 text-lg">Durban Ultra Sprint</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2nd 24-39, 8th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:04:28</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">15 Jan 2017</div><div class="mx-2 text-lg">KZN Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2nd 30-34, 25th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:25:09</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">27 Nov 2016</div><div class="mx-2 text-lg">Midlands Ultra Sprint</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 13th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:13:58</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">Oct 2016</div><div class="mx-2 text-lg">Golden Gates 3 day Trail Run</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">43rd 30-39, 101st Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">13:06:30</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">17 April 2016</div><div class="mx-2 text-lg">Tinman Triathlon</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">15th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:48:38</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">22 March 2016</div><div class="mx-2 text-lg">SA Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">10th 30-34, 51st Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:28:35</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">6 March 2016</div><div class="mx-2 text-lg">Midlands Ultra Sprint</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 4th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:12:19</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">21 Feb 2016</div><div class="mx-2 text-lg">Tinman Triathlon</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 4th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:46:41</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">17 Jan 2016</div><div class="mx-2 text-lg">KZN Triathlon Champs</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-34, 8th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">2:11:38</div></div></td>
                </tr>
                <tr>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">29 Nov 2015</div><div class="mx-2 text-lg">Midlands Ultra Sprint</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1st 30-39, 9th Overall</div></div></td>
                    <td><div class="flex items-center"><div class="mx-2 text-lg opacity-75">1:19:17</div></div></td>
                </tr>
                
                
			
		</tbody>
	
	</table>
</div>
    
            
    
    
    </div>
    </div>
    
        
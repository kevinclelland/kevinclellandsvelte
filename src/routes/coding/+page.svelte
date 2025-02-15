<script lang="ts">
import Play from "$lib/components/Play.svelte";

let albums = [
{albumcover: "/mockups/founditmockup.webp", albumname: "Foundit", albumartist: "Student App", link: "https://getfoundit.app/", description: "Building a student app for Stellenbosch. Partnered with a student currently studying there. Leaning into AI hard to build within 2 months. NextJS, TailwindCSS with Supabase. CapacitorJS for native. Very steep learning curve to get native apps published on the respective app stores within a short time frame.", date: "2025",},
{albumcover: "/mockups/aomockup.webp", albumname: "Aero Oats", albumartist: "Triathlon Tools", link: "https://aerooats.com/", description: "The home of my Triathlon newsletter. First Sveltkit, TailwindCSS and Skeleton project. Lots of little JS calculators and tools. Used RSS to pull in news and my newlstter posts.", date: "2023",},
{albumcover: "/mockups/ssmockup.webp", albumname: "Sanele Shange", albumartist: "Triathlete", link: "https://saneleshange.com/", description: "Quick Sveltkit site for talented and up and coming triathlete", date: "2023",},
{albumcover: "/mockups/pomockup.webp", albumname: "Product Owner Guide", albumartist: "Product Owner", link: "https://productowner.guide/", description: "Use Astro framework to build somewhat of an “Indie Hackers” inspired website to help a Product Owner get up to speed with their career. Used AI to write several blog posts but project just parked until I have some more time.", date: "2023",},
{albumcover: "/mockups/hhmockup.webp", albumname: "Humphrey & Hunter", albumartist: "Dog travel", link: "https://humphreyandhunter.com/", description: "Back into WordPress to experiment with WooCommerce and dropshipping. Dropshipping is quite difficult in RSA so will go international to get a fully automated solution. Main content of website is around English Springer Spaniel dogs and going on holiday with a dog.", date: "2022",},
{albumcover: "/mockups/acmockup.webp", albumname: "Afternoons Coffeespoons", albumartist: "Music Albums", link: "https://www.afternoonscoffeespoons.com/", description: "Currently being rebuilt using Sveltkit, TailwindCSS and Skeleton. A JAMStack site using NODE.JS, Eleventy and Netlify. Full build process automated through GITHUB. Still need to add relevant API’s. ", date: "2021",},
{albumcover: "/mockups/icmockup.webp", albumname: "Inamandla Contractors", albumartist: "Construction Company", link: "https://inamandlacontractors.co.za/", description: "Currently a vanilla HTML/CSS website for a local construction company. Have re-written in Svelte but not live yet.", date: "2020",},
{albumcover: "/mockups/lcmockup.webp", albumname: "Lisa Clelland Kitchens", albumartist: "Kitchen Design Company", link: "https://bejewelled-souffle-14b639.netlify.app/", description: "Simple landing page for a local kitchen designer", date: "2020",},
{albumcover: "/mockups/rsmockup.webp", albumname: "Rugby Strat", albumartist: "Rugby Game", link: "https://laughing-bose-3b75b6.netlify.app/", description: "A fun little vanilla HTML/CSS/JS game", date: "2020",},
{albumcover: "/mockups/lifecmockup.webp", albumname: "Life Check", albumartist: "Time Calculator", link: "https://distracted-spence-3351bc.netlify.app/", description: "More vanilla Javascript but playing with checkboxes. There’s that story about someone asking you to pick up 10 pebbles and then to throw away 1 pebble for every 10 years you’ve lived. What you’re left with is the number of years you have left…so make the most of it!", date: "2021",},
{albumcover: "/mockups/tdpmockup.webp", albumname: "Time Distance Pace", albumartist: "Running Calculator", link: "https://focused-fermi-4759c7.netlify.app/", description: "A website to calculate running time, distance and pace. Built using HTML, CSS and JavaScript. I relied on maths to get around my relatively poor coding ability and built a working version in Excel first. I am always wondering “how many minutes per km is a 38min 10km, if I can sustain 3:50/km how fast will my half marathon be”…", date: "2018",},
{albumcover: "/mockups/ttmockup.webp", albumname: "Time Till", albumartist: "Countdown Calculator", link: "https://lively-mooncake-c74526.netlify.app/", description: "A simple countdown website providing the “time till” various   upcoming events. I used Bootstrap 4 along with basic HTML, CSS and Javascript. Introduced some “Applied Visual Design” ideas from FreeCodeCamp – specifically the split complementary colours. Not maintained.", date: "2018",},
{albumcover: "/mockups/vdbmockup.webp", albumname: "VDB Speed", albumartist: "Paddling Pace Calculator", link: "https://tubular-jalebi-59ed88.netlify.app/", description: "This was built as a tool for paddlers to calculate their pace – similar to timedistancepace.com. This is a simpler version but is slightly difference because it deals with speed(km/h) rather than pace(min/km).", date: "2019",},
{albumcover: "/mockups/cssmockup.webp", albumname: "CSS Heart", albumartist: "CSS visualisation", link: "https://taupe-lily-3eb154.netlify.app/", description: "A fun small project using CSS and a bit of HTML. I was fascinated that a heart in CSS is effectively 3 squares (well one square with the before and after pseaudo class!). I loved the idea of the three separate elements coming together to form a heart and it felt a bit like a ‘love story’.", date: "2018",},
{albumcover: "/mockups/ebmockup.webp", albumname: "Equi Book", albumartist: "Equestrian Social Media", link: "na", description: "(Discontinued) A website aiming to be “Facebook for horse riders”. I used WordPress. I ended up discontinuing this due to the project being way too big for my ability – I got it up and running with the help of WordPress but I was too far removed from the code to be able to do anything meaningful.", date: "2017",},
{albumcover: "/mockups/esmockup.webp", albumname: "eSports Level Up", albumartist: "eSports education", link: "na", description: "(Discontinued) A website aimed at introducing non-techie people to the world of eSorts. I used WordPress. Discontinued as I didn’t know enough about eSports myself and would rather spend the time learning to code than learning about the subject I’m supposed to be an “expert” in.", date: "2017",},
]


</script>

<div class="mx-auto grid grid-cols-1 gap-4 p-4">




	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img class="" src="/covercoding2.webp" alt="me smiling at a pool" />
				<button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p></button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Coding</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">16 projects - 8 years</h3>
				
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2" ><span class="material-icons text-sky-600 text-2xl mxr-4">verified</span> <p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p></button>
			<h1 class="sm:hidden font-bold text-5xl text-white px-2">Coding</h1>
			<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">16 projects - 8 years</h3>
				
		</header>

		<Play />

		<h3 class="h3 p-4 font-semibold">Catalogue</h3>

		
		<div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">

			{#each albums as {albumcover, albumname, albumartist, link, description, date}, index (albumcover)}
				<div class="col-span-1 card card-hover border-y-2 overflow-hidden max-w-xs p-2">
					<a href="{link}" target="_blank"><header class="flex justify-around">
						<img src={albumcover} class="max-w-fill" alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3">{albumname}</h3>
						<p>Date: {date}</p>
						<p>Theme: {albumartist}</p>
						<p>{description}</p>

					</div>
		
				</a>
				</div>
			{/each}
			
		</div>

		


</div>
</div>

	
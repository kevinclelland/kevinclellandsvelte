<script lang="ts">
import Play from "$lib/components/Play.svelte";

type ProjectStatus = 'Live' | 'Discontinued' | 'In Progress' | 'Archived';
type HostingType = 'Custom Domain' | 'Netlify' | 'Discontinued';

interface Project {
	albumcover: string;
	albumname: string;
	albumartist: string;
	link: string;
	description: string;
	date: string;
	status: ProjectStatus;
	technologies: string[];
	hosting: HostingType;
}

let albums: Project[] = [
	{
		albumcover: "/mockups/protristatsmockup.webp",
		albumname: "Pro Tri Stats",
		albumartist: "Tri Race Results",
		link: "https://protristats.netlify.app/",
		description: "Started creating an archive of known triathlon race results going back in history. Hoping to build out the view and analytics off this in the future. ",
		date: "2025",
		status: "In Progress",
		technologies: ["Next.js", "TailwindCSS", "Supabase", "AI"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/founditmockup.webp",
		albumname: "Foundit",
		albumartist: "Student App",
		link: "https://getfoundit.app/",
		description: "Building a student app for Stellenbosch. Partnered with a student currently studying there. Leaning into AI hard to build within 2 months. NextJS, TailwindCSS with Supabase. CapacitorJS for native. Very steep learning curve to get native apps published on the respective app stores within a short time frame.",
		date: "2025",
		status: "Live",
		technologies: ["Next.js", "TailwindCSS", "Supabase", "CapacitorJS", "AI"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/aomockup.webp",
		albumname: "Aero Oats",
		albumartist: "Triathlon Tools",
		link: "https://aerooats.com/",
		description: "The home of my Triathlon newsletter. First SvelteKit, TailwindCSS and Skeleton project. Lots of little JS calculators and tools. Used RSS to pull in news and my newsletter posts.",
		date: "2023",
		status: "Live",
		technologies: ["SvelteKit", "TailwindCSS", "Skeleton UI", "RSS"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/ssmockup.webp",
		albumname: "Sanele Shange",
		albumartist: "Triathlete",
		link: "https://saneleshange.com/",
		description: "Quick SvelteKit site for talented and up and coming triathlete",
		date: "2023",
		status: "Live",
		technologies: ["SvelteKit", "TailwindCSS"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/pomockup.webp",
		albumname: "Product Owner Guide",
		albumartist: "Product Owner",
		link: "https://productowner.guide/",
		description: "Use Astro framework to build somewhat of an 'Indie Hackers' inspired website to help a Product Owner get up to speed with their career. Used AI to write several blog posts but project just parked until I have some more time.",
		date: "2023",
		status: "Discontinued",
		technologies: ["Astro", "AI"],
		hosting: "Discontinued"
	},
	{
		albumcover: "/mockups/hhmockup.webp",
		albumname: "Humphrey & Hunter",
		albumartist: "Dog Travel",
		link: "https://humphreyandhunter.com/",
		description: "Back into WordPress to experiment with WooCommerce and dropshipping. Dropshipping is quite difficult in RSA so will go international to get a fully automated solution. Main content of website is around English Springer Spaniel dogs and going on holiday with a dog.",
		date: "2022",
		status: "Live",
		technologies: ["WordPress", "WooCommerce"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/acmockup.webp",
		albumname: "Afternoons Coffeespoons",
		albumartist: "Music Albums",
		link: "https://www.afternoonscoffeespoons.com/",
		description: "Currently being rebuilt using SvelteKit, TailwindCSS and Skeleton. A JAMStack site using Node.js, Eleventy and Netlify. Full build process automated through GitHub. Still need to add relevant APIs.",
		date: "2021",
		status: "Live",
		technologies: ["SvelteKit", "Node.js", "Eleventy", "Netlify"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/icmockup.webp",
		albumname: "Inamandla Contractors",
		albumartist: "Construction Company",
		link: "https://inamandlacontractors.co.za/",
		description: "Currently a vanilla HTML/CSS website for a local construction company. Have re-written in Svelte but not live yet.",
		date: "2020",
		status: "Live",
		technologies: ["HTML", "CSS", "Svelte"],
		hosting: "Custom Domain"
	},
	{
		albumcover: "/mockups/lcmockup.webp",
		albumname: "Lisa Clelland Kitchens",
		albumartist: "Kitchen Design Company",
		link: "https://bejewelled-souffle-14b639.netlify.app/",
		description: "Simple landing page for a local kitchen designer",
		date: "2020",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/rsmockup.webp",
		albumname: "Rugby Strat",
		albumartist: "Rugby Game",
		link: "https://laughing-bose-3b75b6.netlify.app/",
		description: "A fun little vanilla HTML/CSS/JS game",
		date: "2020",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/lifecmockup.webp",
		albumname: "Life Check",
		albumartist: "Time Calculator",
		link: "https://distracted-spence-3351bc.netlify.app/",
		description: "More vanilla JavaScript but playing with checkboxes. There's that story about someone asking you to pick up 10 pebbles and then to throw away 1 pebble for every 10 years you've lived. What you're left with is the number of years you have left…so make the most of it!",
		date: "2021",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/tdpmockup.webp",
		albumname: "Time Distance Pace",
		albumartist: "Running Calculator",
		link: "https://focused-fermi-4759c7.netlify.app/",
		description: "A website to calculate running time, distance and pace. Built using HTML, CSS and JavaScript. I relied on maths to get around my relatively poor coding ability and built a working version in Excel first. I am always wondering 'how many minutes per km is a 38min 10km, if I can sustain 3:50/km how fast will my half marathon be'…",
		date: "2018",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/ttmockup.webp",
		albumname: "Time Till",
		albumartist: "Countdown Calculator",
		link: "https://lively-mooncake-c74526.netlify.app/",
		description: "A simple countdown website providing the 'time till' various upcoming events. I used Bootstrap 4 along with basic HTML, CSS and JavaScript. Introduced some 'Applied Visual Design' ideas from FreeCodeCamp – specifically the split complementary colours. Not maintained.",
		date: "2018",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/vdbmockup.webp",
		albumname: "VDB Speed",
		albumartist: "Paddling Pace Calculator",
		link: "https://tubular-jalebi-59ed88.netlify.app/",
		description: "This was built as a tool for paddlers to calculate their pace – similar to timedistancepace.com. This is a simpler version but is slightly different because it deals with speed (km/h) rather than pace (min/km).",
		date: "2019",
		status: "Archived",
		technologies: ["HTML", "CSS", "JavaScript"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/cssmockup.webp",
		albumname: "CSS Heart",
		albumartist: "CSS Visualisation",
		link: "https://taupe-lily-3eb154.netlify.app/",
		description: "A fun small project using CSS and a bit of HTML. I was fascinated that a heart in CSS is effectively 3 squares (well one square with the before and after pseudo class!). I loved the idea of the three separate elements coming together to form a heart and it felt a bit like a 'love story'.",
		date: "2018",
		status: "Archived",
		technologies: ["HTML", "CSS"],
		hosting: "Netlify"
	},
	{
		albumcover: "/mockups/ebmockup.webp",
		albumname: "Equi Book",
		albumartist: "Equestrian Social Media",
		link: "",
		description: "A website aiming to be 'Facebook for horse riders'. I used WordPress. I ended up discontinuing this due to the project being way too big for my ability – I got it up and running with the help of WordPress but I was too far removed from the code to be able to do anything meaningful.",
		date: "2017",
		status: "Discontinued",
		technologies: ["WordPress"],
		hosting: "Discontinued"
	},
	{
		albumcover: "/mockups/esmockup.webp",
		albumname: "eSports Level Up",
		albumartist: "eSports Education",
		link: "",
		description: "A website aimed at introducing non-techie people to the world of eSports. I used WordPress. Discontinued as I didn't know enough about eSports myself and would rather spend the time learning to code than learning about the subject I'm supposed to be an 'expert' in.",
		date: "2017",
		status: "Discontinued",
		technologies: ["WordPress"],
		hosting: "Discontinued"
	}
];

// Calculate stats
$: stats = {
	total: albums.length,
	live: albums.filter(p => p.status === 'Live').length,
	inProgress: albums.filter(p => p.status === 'In Progress').length,
	discontinued: albums.filter(p => p.status === 'Discontinued').length,
	archived: albums.filter(p => p.status === 'Archived').length,
	yearsExperience: new Date().getFullYear() - 2017,
	customDomain: albums.filter(p => p.hosting === 'Custom Domain').length,
	netlify: albums.filter(p => p.hosting === 'Netlify').length,
};

// Get all unique technologies
$: allTechnologies = [...new Set(albums.flatMap(a => a.technologies))].sort();

// Search and filter
let searchQuery = '';
let selectedStatus: ProjectStatus | 'All' = 'All';
let selectedTech: string = 'All';
let sortBy: 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc' | 'status' = 'date-desc';

// Modal state
let selectedProject: Project | null = null;

$: filteredProjects = albums
	.filter(project => {
		const matchesSearch = 
			project.albumname.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.albumartist.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
		const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
		return matchesSearch && matchesStatus && matchesTech;
	})
	.sort((a, b) => {
		if (sortBy === 'date-desc') return parseInt(b.date) - parseInt(a.date);
		if (sortBy === 'date-asc') return parseInt(a.date) - parseInt(b.date);
		if (sortBy === 'name-asc') return a.albumname.localeCompare(b.albumname);
		if (sortBy === 'name-desc') return b.albumname.localeCompare(a.albumname);
		if (sortBy === 'status') {
			const statusOrder = { 'Live': 0, 'In Progress': 1, 'Archived': 2, 'Discontinued': 3 };
			const statusCompare = statusOrder[a.status] - statusOrder[b.status];
			return statusCompare !== 0 ? statusCompare : parseInt(b.date) - parseInt(a.date);
		}
		return 0;
	});

function getStatusColor(status: ProjectStatus): string {
	const colors: Record<ProjectStatus, string> = {
		'Live': 'variant-filled-success',
		'In Progress': 'variant-filled-warning',
		'Archived': 'variant-filled-surface',
		'Discontinued': 'variant-filled-error'
	};
	return colors[status];
}

function getStatusIcon(status: ProjectStatus): string {
	const icons: Record<ProjectStatus, string> = {
		'Live': 'check_circle',
		'In Progress': 'schedule',
		'Archived': 'archive',
		'Discontinued': 'cancel'
	};
	return icons[status];
}

function getHostingIcon(hosting: HostingType): string {
	if (hosting === 'Custom Domain') return 'public';
	if (hosting === 'Netlify') return 'cloud';
	return 'cloud_off';
}

function openProjectModal(project: Project) {
	selectedProject = project;
}

function closeProjectModal() {
	selectedProject = null;
}

function handleKeydown(e: KeyboardEvent) {
	if (e.key === 'Escape' && selectedProject) {
		closeProjectModal();
	}
}

function truncateDescription(description: string, maxLength: number = 120): string {
	if (description.length <= maxLength) return description;
	return description.substring(0, maxLength) + '...';
}

</script>

<svelte:window on:keydown={handleKeydown} />

<div class="mx-auto grid grid-cols-1 gap-4 p-4">

	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img src="/covercoding2.webp" alt="Coding projects cover - developer workspace" loading="lazy" />
				<button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100">
					<span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
					<p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p>
				</button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Coding</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">{stats.total} projects - {stats.yearsExperience} years</h3>
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2">
				<span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
				<p class="text-lg text-white font-semibold mx-2">Verified Self Learner</p>
			</button>
			<h1 class="sm:hidden font-bold text-5xl text-white px-2">Coding</h1>
			<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">{stats.total} projects - {stats.yearsExperience} years</h3>
		</header>

		<Play 
			pageName="Coding" 
			playAction={() => window.open(albums[0].link, '_blank')}
			featuredLink={albums[0].link}
		/>

		<!-- Stats Summary -->
		<div class="p-4">
			<h3 class="h3 font-semibold mb-4">Portfolio Stats</h3>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">💻</div>
					<div class="text-2xl font-bold text-primary-500">{stats.total}</div>
					<div class="text-xs opacity-75">Total Projects</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🟢</div>
					<div class="text-2xl font-bold text-success-500">{stats.live}</div>
					<div class="text-xs opacity-75">Live</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🟡</div>
					<div class="text-2xl font-bold text-warning-500">{stats.inProgress}</div>
					<div class="text-xs opacity-75">In Progress</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">📅</div>
					<div class="text-2xl font-bold text-tertiary-500">{stats.yearsExperience}</div>
					<div class="text-xs opacity-75">Years Coding</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🌐</div>
					<div class="text-2xl font-bold text-primary-500">{stats.customDomain}</div>
					<div class="text-xs opacity-75">Custom Domains</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">☁️</div>
					<div class="text-2xl font-bold text-secondary-500">{stats.netlify}</div>
					<div class="text-xs opacity-75">On Netlify</div>
				</div>
			</div>
		</div>

		<!-- Search, Filter and Sort Controls -->
		<div class="p-4 border-t border-surface-500">
			<h3 class="h3 font-semibold mb-4">Browse Projects</h3>
			
			<!-- Search Bar -->
			<div class="mb-4">
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">
						<i class="material-icons">search</i>
					</div>
					<input
						type="search"
						placeholder="Search by project name, description, or theme..."
						bind:value={searchQuery}
						class="input"
						aria-label="Search projects"
					/>
					{#if searchQuery}
					<button class="btn variant-filled-surface" on:click={() => searchQuery = ''} aria-label="Clear search">
						<i class="material-icons">close</i>
					</button>
					{/if}
				</div>
			</div>

			<!-- Filters and Sort -->
			<div class="flex flex-wrap gap-4 items-center">
				<div class="flex items-center gap-2">
					<label class="label text-sm">
						Status:
						<select class="select w-auto ml-2" bind:value={selectedStatus}>
							<option value="All">All Statuses</option>
							<option value="Live">🟢 Live</option>
							<option value="In Progress">🟡 In Progress</option>
							<option value="Archived">📦 Archived</option>
							<option value="Discontinued">🔴 Discontinued</option>
						</select>
					</label>
				</div>
				<div class="flex items-center gap-2">
					<label class="label text-sm">
						Technology:
						<select class="select w-auto ml-2" bind:value={selectedTech}>
							<option value="All">All Technologies</option>
							{#each allTechnologies as tech}
							<option value={tech}>{tech}</option>
							{/each}
						</select>
					</label>
				</div>
				<div class="flex items-center gap-2">
					<label class="label text-sm">
						Sort:
						<select class="select w-auto ml-2" bind:value={sortBy}>
							<option value="date-desc">Newest First</option>
							<option value="date-asc">Oldest First</option>
							<option value="name-asc">Name (A-Z)</option>
							<option value="name-desc">Name (Z-A)</option>
							<option value="status">By Status</option>
						</select>
					</label>
				</div>
				<div class="flex-1"></div>
				<div class="text-sm opacity-75">
					Showing {filteredProjects.length} of {stats.total} projects
				</div>
			</div>
		</div>

		<!-- Project Grid -->
		<div class="p-4">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{#each filteredProjects as project (project.albumcover)}
				<button
					class="card overflow-hidden text-left transition-transform hover:scale-105 {project.status === 'Discontinued' ? 'opacity-60' : 'card-hover'} flex flex-col"
					on:click={() => openProjectModal(project)}
					aria-label="View details for {project.albumname}"
				>
					<div class="relative bg-surface-900 flex items-center justify-center p-6" style="min-height: 280px;">
						<img
							src={project.albumcover}
							alt="{project.albumname} floppy disc mockup"
							loading="lazy"
							class="w-full h-auto object-contain max-h-[260px]"
						/>
						<div class="absolute top-2 right-2 flex gap-1">
							<span class="badge {getStatusColor(project.status)} text-xs flex items-center gap-1">
								<i class="material-icons text-xs">{getStatusIcon(project.status)}</i>
								{project.status}
							</span>
						</div>
						{#if project.hosting !== 'Discontinued'}
						<div class="absolute top-2 left-2">
							<span class="badge variant-soft-surface text-xs flex items-center gap-1">
								<i class="material-icons text-xs">{getHostingIcon(project.hosting)}</i>
								{project.hosting === 'Custom Domain' ? 'Custom' : 'Netlify'}
							</span>
						</div>
						{/if}
					</div>
					<div class="p-4 space-y-2 flex-1 flex flex-col">
						<div class="flex items-start justify-between gap-2">
							<h3 class="font-bold text-lg leading-tight">{project.albumname}</h3>
							<span class="badge variant-ghost-surface text-xs shrink-0">{project.date}</span>
						</div>
						<p class="text-xs opacity-75 font-semibold">{project.albumartist}</p>
						<p class="text-sm opacity-75 line-clamp-3 flex-1">{truncateDescription(project.description)}</p>
						<div class="flex flex-wrap gap-1 pt-2">
							{#each project.technologies.slice(0, 3) as tech}
							<span class="badge variant-soft-primary text-xs">{tech}</span>
							{/each}
							{#if project.technologies.length > 3}
							<span class="badge variant-soft-surface text-xs">+{project.technologies.length - 3}</span>
							{/if}
						</div>
					</div>
				</button>
				{/each}
			</div>

			{#if filteredProjects.length === 0}
			<div class="p-8 text-center opacity-50">
				<i class="material-icons text-6xl mb-4">search_off</i>
				<p>No projects found matching your filters</p>
				<button class="btn variant-filled-primary mt-4" on:click={() => {searchQuery = ''; selectedStatus = 'All'; selectedTech = 'All';}}>
					Clear Filters
				</button>
			</div>
			{/if}
		</div>

	</div>
</div>

<!-- Project Detail Modal -->
{#if selectedProject}
<div
	class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
	on:click|self={closeProjectModal}
	on:keydown={(e) => e.key === 'Escape' && closeProjectModal()}
	role="dialog"
	aria-modal="true"
	aria-labelledby="project-modal-title"
	tabindex="-1"
>
	<div class="card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
		<div class="relative bg-surface-900 p-8 flex items-center justify-center">
			<img
				src={selectedProject.albumcover}
				alt="{selectedProject.albumname} floppy disc mockup"
				class="w-full max-h-[50vh] object-contain"
			/>
			<button
				class="btn-icon variant-filled-surface absolute top-4 right-4"
				on:click={closeProjectModal}
				aria-label="Close modal"
			>
				<i class="material-icons">close</i>
			</button>
			<div class="absolute bottom-4 left-4 flex gap-2">
				<span class="badge {getStatusColor(selectedProject.status)} flex items-center gap-2">
					<i class="material-icons text-sm">{getStatusIcon(selectedProject.status)}</i>
					{selectedProject.status}
				</span>
				{#if selectedProject.hosting !== 'Discontinued'}
				<span class="badge variant-soft-surface flex items-center gap-2">
					<i class="material-icons text-sm">{getHostingIcon(selectedProject.hosting)}</i>
					{selectedProject.hosting}
				</span>
				{/if}
			</div>
		</div>
		<div class="p-6">
			<div class="flex items-start justify-between gap-4 mb-4">
				<div class="flex-1">
					<h2 id="project-modal-title" class="h2 font-bold mb-2">{selectedProject.albumname}</h2>
					<p class="text-lg opacity-75 mb-2">{selectedProject.albumartist}</p>
					<p class="badge variant-ghost-surface">{selectedProject.date}</p>
				</div>
			</div>
			
			<div class="mb-6">
				<h3 class="h4 font-semibold mb-2">Description</h3>
				<p class="opacity-75">{selectedProject.description}</p>
			</div>

			<div class="mb-6">
				<h3 class="h4 font-semibold mb-2">Technologies Used</h3>
				<div class="flex flex-wrap gap-2">
					{#each selectedProject.technologies as tech}
					<span class="badge variant-filled-primary">{tech}</span>
					{/each}
				</div>
			</div>
			
			<div class="flex gap-2 mt-6">
				{#if selectedProject.link && selectedProject.status !== 'Discontinued'}
				<a
					href={selectedProject.link}
					target="_blank"
					rel="noopener noreferrer"
					class="btn variant-filled-primary flex-1"
				>
					<i class="material-icons mr-2">open_in_new</i>
					Visit Project
				</a>
				{:else}
				<button class="btn variant-filled-surface flex-1" disabled>
					<i class="material-icons mr-2">block</i>
					Project Discontinued
				</button>
				{/if}
				<button class="btn variant-filled-surface" on:click={closeProjectModal}>
					Close
				</button>
			</div>
		</div>
	</div>
</div>
{/if}
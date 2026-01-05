<script lang="ts">
import Play from "$lib/components/Play.svelte";

type BirdCategory = 'Raptors' | 'Waterbirds' | 'Songbirds' | 'Doves & Pigeons' | 'Garden Birds' | 'Ground Birds' | 'Unique';

interface Bird {
	birdphoto: string;
	birdname: string;
	category: BirdCategory;
}

let birds: Bird[] = [
	{ birdphoto: "/birds/1.jpg", birdname: "Southern Black Tit", category: "Garden Birds" },
	{ birdphoto: "/birds/2.jpg", birdname: "Hamerkop", category: "Waterbirds" },
	{ birdphoto: "/birds/3.jpg", birdname: "Spotted Eagle-Owl", category: "Raptors" },
	{ birdphoto: "/birds/4.jpg", birdname: "Rock Dove", category: "Doves & Pigeons" },
	{ birdphoto: "/birds/5.jpg", birdname: "Yellow Billed Kite", category: "Raptors" },
	{ birdphoto: "/birds/6.jpg", birdname: "Woolly Necked Stork", category: "Waterbirds" },
	{ birdphoto: "/birds/7.jpg", birdname: "Burchells Coucal (rainbird)", category: "Unique" },
	{ birdphoto: "/birds/8.jpg", birdname: "Crested Barbet", category: "Garden Birds" },
	{ birdphoto: "/birds/9.jpg", birdname: "Hadeda Ibis", category: "Waterbirds" },
	{ birdphoto: "/birds/11.jpg", birdname: "Common Myna", category: "Garden Birds" },
	{ birdphoto: "/birds/12.jpg", birdname: "Bronze Mannikin", category: "Songbirds" },
	{ birdphoto: "/birds/13.jpg", birdname: "Common Fiscal (Jackie Hangman)", category: "Songbirds" },
	{ birdphoto: "/birds/14.jpg", birdname: "Dark-capped Bulbul", category: "Songbirds" },
	{ birdphoto: "/birds/15.jpg", birdname: "Natal Spurfowl", category: "Ground Birds" },
	{ birdphoto: "/birds/19.jpg", birdname: "Cape Turtle Dove", category: "Doves & Pigeons" },
	{ birdphoto: "/birds/20.jpg", birdname: "Black Headed Heron", category: "Waterbirds" },
	{ birdphoto: "/birds/21.jpg", birdname: "Speckled Mousebird", category: "Garden Birds" },
	{ birdphoto: "/birds/22.jpg", birdname: "Laughing Dove", category: "Doves & Pigeons" },
	{ birdphoto: "/birds/23.jpg", birdname: "Village Weaver", category: "Garden Birds" },
	{ birdphoto: "/birds/24.jpg", birdname: "Pied Crow", category: "Garden Birds" },
	{ birdphoto: "/birds/26.jpg", birdname: "Black-Collared Barbet", category: "Garden Birds" },
	{ birdphoto: "/birds/27.jpg", birdname: "Cape Glossy Starling", category: "Songbirds" },
	{ birdphoto: "/birds/30.jpg", birdname: "Speckled Pigeon", category: "Doves & Pigeons" },
	{ birdphoto: "/birds/31.jpg", birdname: "House Sparrow", category: "Garden Birds" },
	{ birdphoto: "/birds/35.jpg", birdname: "Black Sparrowhawk", category: "Raptors" },
	{ birdphoto: "/birds/36.jpg", birdname: "Swift", category: "Garden Birds" },
	{ birdphoto: "/birds/38.jpg", birdname: "Long-crested Eagle", category: "Raptors" },
	{ birdphoto: "/birds/39.jpg", birdname: "Egyptian Goose", category: "Waterbirds" },
	{ birdphoto: "/birds/40.jpg", birdname: "Red-throated Wryneck", category: "Unique" },
	{ birdphoto: "/birds/41.jpg", birdname: "Helmeted Guineafowl", category: "Ground Birds" },
	{ birdphoto: "/birds/42.jpg", birdname: "Pin-tailed Whydah", category: "Songbirds" },
	{ birdphoto: "/birds/43.jpg", birdname: "Purple-Crested Turaco", category: "Unique" },
	{ birdphoto: "/birds/44.jpg", birdname: "Violet-backed Starling", category: "Songbirds" },
	{ birdphoto: "/birds/46.jpg", birdname: "Red-Billed Quelea (Breeding male center)", category: "Songbirds" },
	{ birdphoto: "/birds/47.jpg", birdname: "Dusky Indigobird", category: "Songbirds" },
	{ birdphoto: "/birds/48.jpg", birdname: "Southern Red Bishop", category: "Songbirds" },
	{ birdphoto: "/birds/49.jpg", birdname: "Thick Billed Weaver", category: "Garden Birds" },
	{ birdphoto: "/birds/50.jpg", birdname: "Golden Tailed Woodpecker", category: "Unique" }
];

// Calculate stats
$: stats = {
	total: birds.length,
	raptors: birds.filter(b => b.category === 'Raptors').length,
	waterbirds: birds.filter(b => b.category === 'Waterbirds').length,
	songbirds: birds.filter(b => b.category === 'Songbirds').length,
	gardenBirds: birds.filter(b => b.category === 'Garden Birds').length,
	unique: birds.filter(b => b.category === 'Unique').length,
};

// Search and filter
let searchQuery = '';
let selectedCategory: BirdCategory | 'All' = 'All';
let sortBy: 'name-asc' | 'name-desc' | 'category' = 'name-asc';

// Modal state
let selectedBird: Bird | null = null;

$: filteredBirds = birds
	.filter(bird => {
		const matchesSearch = bird.birdname.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesCategory = selectedCategory === 'All' || bird.category === selectedCategory;
		return matchesSearch && matchesCategory;
	})
	.sort((a, b) => {
		if (sortBy === 'name-asc') return a.birdname.localeCompare(b.birdname);
		if (sortBy === 'name-desc') return b.birdname.localeCompare(a.birdname);
		if (sortBy === 'category') {
			const categoryCompare = a.category.localeCompare(b.category);
			return categoryCompare !== 0 ? categoryCompare : a.birdname.localeCompare(b.birdname);
		}
		return 0;
	});

function getCategoryIcon(category: BirdCategory): string {
	const icons: Record<BirdCategory, string> = {
		'Raptors': '🦅',
		'Waterbirds': '🦆',
		'Songbirds': '🎵',
		'Doves & Pigeons': '🕊️',
		'Garden Birds': '🦜',
		'Ground Birds': '🦤',
		'Unique': '🦚'
	};
	return icons[category];
}

function getCategoryColor(category: BirdCategory): string {
	const colors: Record<BirdCategory, string> = {
		'Raptors': 'variant-filled-error',
		'Waterbirds': 'variant-filled-primary',
		'Songbirds': 'variant-filled-tertiary',
		'Doves & Pigeons': 'variant-filled-surface',
		'Garden Birds': 'variant-filled-success',
		'Ground Birds': 'variant-filled-warning',
		'Unique': 'variant-filled-secondary'
	};
	return colors[category];
}

function openBirdModal(bird: Bird) {
	selectedBird = bird;
}

function closeBirdModal() {
	selectedBird = null;
}

function handleKeydown(e: KeyboardEvent) {
	if (e.key === 'Escape' && selectedBird) {
		closeBirdModal();
	}
}

</script>

<svelte:window on:keydown={handleKeydown} />

<div class="mx-auto grid grid-cols-1 gap-4 p-4">

	<div class="col-span-3 card card-hover overflow-hidden">
		<header>
			<div class="relative">
				<img src="/covergardenbirds.webp" alt="Garden birds cover - birds in natural setting" loading="lazy" />
				<button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100">
					<span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
					<p class="text-lg text-white font-semibold mx-2">Verified from the Garden</p>
				</button>
				<h1 class="hidden sm:block absolute font-bold text-5xl text-white bottom-20 left-5">Garden Birds</h1>
				<h3 class="hidden sm:block absolute text-lg font-semibold text-white bottom-12 left-5 opacity-75 mx-1">{stats.total} species identified</h3>
			</div>
			<button class="sm:hidden flex items-center justify-start opacity-75 hover:opacity-100 px-2">
				<span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
				<p class="text-lg text-white font-semibold mx-2">Verified from the Garden</p>
			</button>
			<h1 class="sm:hidden font-bold text-5xl text-white px-2">Garden Birds</h1>
			<h3 class="sm:hidden text-lg font-semibold text-white opacity-75 mx-1 px-2">{stats.total} species identified</h3>
		</header>

		<Play pageName="Garden Birds" featuredLink="/covergardenbirds.webp" />

		<!-- Stats Summary -->
		<div class="p-4">
			<h3 class="h3 font-semibold mb-4">Collection Stats</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🦜</div>
					<div class="text-2xl font-bold text-primary-500">{stats.total}</div>
					<div class="text-xs opacity-75">Total Species</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🦅</div>
					<div class="text-2xl font-bold text-error-500">{stats.raptors}</div>
					<div class="text-xs opacity-75">Raptors</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🦆</div>
					<div class="text-2xl font-bold text-primary-500">{stats.waterbirds}</div>
					<div class="text-xs opacity-75">Waterbirds</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🎵</div>
					<div class="text-2xl font-bold text-tertiary-500">{stats.songbirds}</div>
					<div class="text-xs opacity-75">Songbirds</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🦜</div>
					<div class="text-2xl font-bold text-success-500">{stats.gardenBirds}</div>
					<div class="text-xs opacity-75">Garden Birds</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🕊️</div>
					<div class="text-2xl font-bold text-surface-500">{birds.filter(b => b.category === 'Doves & Pigeons').length}</div>
					<div class="text-xs opacity-75">Doves</div>
				</div>
				<div class="card p-3 text-center">
					<div class="text-3xl mb-1">🦚</div>
					<div class="text-2xl font-bold text-secondary-500">{stats.unique}</div>
					<div class="text-xs opacity-75">Unique</div>
				</div>
			</div>
		</div>

		<!-- Search, Filter and Sort Controls -->
		<div class="p-4 border-t border-surface-500">
			<h3 class="h3 font-semibold mb-4">Browse Collection</h3>
			
			<!-- Search Bar -->
			<div class="mb-4">
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">
						<i class="material-icons">search</i>
					</div>
					<input
						type="search"
						placeholder="Search by bird name..."
						bind:value={searchQuery}
						class="input"
						aria-label="Search birds"
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
						Category:
						<select class="select w-auto ml-2" bind:value={selectedCategory}>
							<option value="All">All Categories</option>
							<option value="Raptors">🦅 Raptors</option>
							<option value="Waterbirds">🦆 Waterbirds</option>
							<option value="Songbirds">🎵 Songbirds</option>
							<option value="Doves & Pigeons">🕊️ Doves & Pigeons</option>
							<option value="Garden Birds">🦜 Garden Birds</option>
							<option value="Ground Birds">🦤 Ground Birds</option>
							<option value="Unique">🦚 Unique</option>
						</select>
					</label>
				</div>
				<div class="flex items-center gap-2">
					<label class="label text-sm">
						Sort:
						<select class="select w-auto ml-2" bind:value={sortBy}>
							<option value="name-asc">Name (A-Z)</option>
							<option value="name-desc">Name (Z-A)</option>
							<option value="category">Category</option>
						</select>
					</label>
				</div>
				<div class="flex-1"></div>
				<div class="text-sm opacity-75">
					Showing {filteredBirds.length} of {stats.total} species
				</div>
			</div>
		</div>

		<!-- Bird Grid -->
		<div class="p-4">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{#each filteredBirds as bird (bird.birdphoto)}
				<button
					class="card card-hover overflow-hidden cursor-pointer text-left transition-transform hover:scale-105"
					on:click={() => openBirdModal(bird)}
					aria-label="View details for {bird.birdname}"
				>
					<div class="relative">
						<img
							src={bird.birdphoto}
							alt={bird.birdname}
							loading="lazy"
							class="w-full aspect-square object-cover"
						/>
						<div class="absolute top-2 right-2">
							<span class="badge {getCategoryColor(bird.category)} text-xs">
								{getCategoryIcon(bird.category)}
							</span>
						</div>
					</div>
					<div class="p-3">
						<h4 class="font-bold text-sm leading-tight">{bird.birdname}</h4>
						<p class="text-xs opacity-75 mt-1">{bird.category}</p>
					</div>
				</button>
				{/each}
			</div>

			{#if filteredBirds.length === 0}
			<div class="p-8 text-center opacity-50">
				<i class="material-icons text-6xl mb-4">search_off</i>
				<p>No birds found matching your search</p>
				<button class="btn variant-filled-primary mt-4" on:click={() => {searchQuery = ''; selectedCategory = 'All';}}>
					Clear Filters
				</button>
			</div>
			{/if}
		</div>

	</div>
</div>

<!-- Bird Detail Modal -->
{#if selectedBird}
<div
	class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
	on:click|self={closeBirdModal}
	on:keydown={(e) => e.key === 'Escape' && closeBirdModal()}
	role="dialog"
	aria-modal="true"
	aria-labelledby="bird-modal-title"
	tabindex="-1"
>
	<div class="card max-w-3xl w-full max-h-[90vh] overflow-y-auto">
		<div class="relative">
			<img
				src={selectedBird.birdphoto}
				alt={selectedBird.birdname}
				class="w-full max-h-[60vh] object-contain bg-surface-900"
			/>
			<button
				class="btn-icon variant-filled-surface absolute top-4 right-4"
				on:click={closeBirdModal}
				aria-label="Close modal"
			>
				<i class="material-icons">close</i>
			</button>
		</div>
		<div class="p-6">
			<div class="flex items-start justify-between gap-4 mb-4">
				<div class="flex-1">
					<h2 id="bird-modal-title" class="h2 font-bold mb-2">{selectedBird.birdname}</h2>
					<span class="badge {getCategoryColor(selectedBird.category)} flex items-center gap-2 w-fit">
						<span class="text-lg">{getCategoryIcon(selectedBird.category)}</span>
						{selectedBird.category}
					</span>
				</div>
			</div>
			
			<div class="flex gap-2 mt-6">
				<button class="btn variant-filled-primary flex-1" on:click={closeBirdModal}>
					<i class="material-icons mr-2">check</i>
					Close
				</button>
			</div>
		</div>
	</div>
</div>
{/if}
<script lang="ts">
    import Play from "$lib/components/Play.svelte";
    import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { Post } from '$lib/types';

	export let data;

	interface BookInfo {
		title: string;
		cover: string;
		description: string;
		link: string;
		amazonLink?: string;
		publishDate: string;
		pages?: number;
	}

	const book: BookInfo = {
		title: "Triathlon Autobiography",
		cover: "/bookcoverflat2.jpg",
		description: "A struggling age grouper's journey through the world's most challenging sport. Humorous and instantly accessible whether you're an athlete or someone just looking for an easy read. Follow the triumphs, struggles, and lessons learned from years of competing in triathlon.",
		link: "/triathlonautobiography",
		amazonLink: "https://www.amazon.com/Triathlon-Autobiography-struggling-age-grouper-challenging-ebook/dp/B0716LN6RL/",
		publishDate: "2017",
		pages: undefined
	};

	// Calculate reading time (average 200 words per minute)
	function calculateReadingTime(description: string): number {
		const wordsPerMinute = 200;
		const wordCount = description.split(/\s+/).length;
		const minutes = Math.ceil(wordCount / wordsPerMinute);
		return Math.max(1, minutes); // Minimum 1 minute
	}

	// Stats
	$: stats = {
		totalPosts: data.posts.length,
		totalBooks: 1,
		categories: [...new Set(data.posts.flatMap((p: Post) => p.categories))].length,
		latestPost: data.posts.length > 0 ? data.posts[0].date : null,
	};

	// Search and filter
	let searchQuery = '';
	let selectedCategory: string = 'All';
	let sortBy: 'newest' | 'oldest' = 'newest';

	// Get all unique categories
	$: allCategories = ['All', ...new Set(data.posts.flatMap((p: Post) => p.categories))];

	// Filtered posts
	$: filteredPosts = data.posts
		.filter((post: Post) => {
			const matchesSearch = 
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
			return matchesSearch && matchesCategory && post.published;
		})
		.sort((a: Post, b: Post) => {
			if (sortBy === 'newest') {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			}
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});

	function getCategoryColor(category: string): string {
		const colors: Record<string, string> = {
			'sveltekit': 'variant-filled-primary',
			'svelte': 'variant-filled-secondary',
			'triathlon': 'variant-filled-success',
			'writing': 'variant-filled-warning',
			'tech': 'variant-filled-tertiary',
			'personal': 'variant-filled-error',
		};
		return colors[category.toLowerCase()] || 'variant-filled-surface';
	}

	function truncateDescription(text: string, maxLength: number = 150): string {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength).trim() + '...';
	}

	$: featuredPosts = data.posts.filter((p: Post) => p.published).slice(0, 3);
    
    </script>
    
<div class="mx-auto grid grid-cols-1 gap-4 p-4">

    <div class="col-span-3 card overflow-hidden">
        <header>
            <div class="relative">
                <img src="/writingcover.webp" alt="Writing cover - author at desk" loading="lazy" />
                <button class="hidden sm:flex absolute bottom-32 left-5 flex items-center justify-start opacity-75 hover:opacity-100">
                    <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                    <p class="text-lg text-black font-semibold mx-2">Verified Author 😜</p>
                </button>
                <h1 class="hidden sm:block absolute font-bold text-5xl text-black bottom-20 left-5">Writing</h1>
                <h3 class="hidden sm:block absolute text-lg font-semibold text-black bottom-12 left-5 opacity-75 mx-1">{stats.totalBooks} book, {stats.totalPosts} posts</h3>
            </div>
            <button class="sm:hidden px-2 flex items-center justify-start opacity-75 hover:opacity-100">
                <span class="material-icons text-sky-600 text-2xl mxr-4">verified</span>
                <p class="text-lg text-white font-semibold mx-2">Verified Author 😜</p>
            </button>
            <h1 class="sm:hidden px-2 text-white font-bold text-5xl">Writing</h1>
            <h3 class="sm:hidden px-2 text-white text-lg font-semibold opacity-75 mx-1">{stats.totalBooks} book, {stats.totalPosts} posts</h3>
        </header>

        <Play 
            pageName="Writing" 
            featuredLink={book.link}
            playAction="scroll"
        />

        <!-- Stats Summary -->
        <div class="p-4">
            <h3 class="h3 font-semibold mb-4">Writing Stats</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">📚</div>
                    <div class="text-2xl font-bold text-primary-500">{stats.totalBooks}</div>
                    <div class="text-xs opacity-75">Books Published</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">✍️</div>
                    <div class="text-2xl font-bold text-secondary-500">{stats.totalPosts}</div>
                    <div class="text-xs opacity-75">Blog Posts</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">🏷️</div>
                    <div class="text-2xl font-bold text-tertiary-500">{stats.categories}</div>
                    <div class="text-xs opacity-75">Categories</div>
                </div>
                <div class="card p-3 text-center">
                    <div class="text-3xl mb-1">📅</div>
                    <div class="text-2xl font-bold text-success-500">{stats.latestPost ? new Date(stats.latestPost).getFullYear() : 'N/A'}</div>
                    <div class="text-xs opacity-75">Latest Post</div>
                </div>
            </div>
        </div>

        <!-- Book Section -->
        <div class="p-4 border-t border-surface-500">
            <h3 class="h3 font-semibold mb-4">📖 Featured Book</h3>
            <div class="card card-hover overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/3">
                        <img 
                            src={book.cover} 
                            alt="{book.title} book cover" 
                            loading="lazy"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-6 md:w-2/3">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <h4 class="h2 font-bold mb-2">{book.title}</h4>
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="badge variant-filled-success">Triathlon</span>
                                    <span class="badge variant-filled-primary">eBook</span>
                                    <span class="badge variant-soft-surface">Published {book.publishDate}</span>
                                    {#if book.pages}
                                    <span class="badge variant-soft-surface">{book.pages} pages</span>
                                    {/if}
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 card p-3 bg-primary-500/10 border-l-4 border-primary-500">
                            <p class="text-sm italic">"Humorous and instantly accessible whether you're an athlete or someone just looking for an easy read."</p>
                        </div>
                        <p class="text-lg mb-4">{book.description}</p>
                        <div class="mb-4">
                            <p class="text-sm opacity-75 flex items-start gap-2">
                                <i class="material-icons text-sm">info</i>
                                <span>The book's <strong>Epilogue</strong> is available as a separate blog post below, detailing how the story continues.</span>
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <a href={book.link} class="btn variant-filled-primary">
                                <i class="material-icons mr-2">menu_book</i>
                                Read More
                            </a>
                            {#if book.amazonLink}
                            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" class="btn variant-filled-secondary">
                                <i class="material-icons mr-2">shopping_cart</i>
                                Buy on Amazon
                            </a>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Search and Filter -->
        <div class="p-4 border-t border-surface-500">
            <h3 class="h3 font-semibold mb-4">Browse Posts</h3>
            
            <!-- Search Bar -->
            <div class="mb-4">
                <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
                    <div class="input-group-shim">
                        <i class="material-icons">search</i>
                    </div>
                    <input
                        type="search"
                        placeholder="Search posts by title or content..."
                        bind:value={searchQuery}
                        class="input"
                        aria-label="Search posts"
                    />
                    {#if searchQuery}
                    <button class="btn variant-filled-surface" on:click={() => searchQuery = ''} aria-label="Clear search">
                        <i class="material-icons">close</i>
                    </button>
                    {/if}
                </div>
            </div>

            <!-- Filters -->
            <div class="flex flex-wrap gap-4 items-center">
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Category:
                        <select class="select w-auto ml-2" bind:value={selectedCategory}>
                            {#each allCategories as category}
                            <option value={category}>{category}</option>
                            {/each}
                        </select>
                    </label>
                </div>
                <div class="flex items-center gap-2">
                    <label class="label text-sm">
                        Sort:
                        <select class="select w-auto ml-2" bind:value={sortBy}>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </label>
                </div>
                <div class="flex-1"></div>
                <div class="text-sm opacity-75">
                    Showing {filteredPosts.length} of {stats.totalPosts} posts
                </div>
            </div>
        </div>

        <!-- Posts Grid -->
        <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each filteredPosts as post (post.slug)}
                <a href={post.slug} class="card card-hover overflow-hidden flex flex-col transition-transform hover:scale-105">
                    <div class="relative">
                        <img 
                            src={post.photo} 
                            alt="{post.title} cover image" 
                            loading="lazy"
                            class="w-full aspect-video object-cover"
                        />
                        <div class="absolute top-2 right-2 flex gap-1 flex-wrap">
                            {#each post.categories.slice(0, 2) as category}
                            <span class="badge {getCategoryColor(category)} text-xs">
                                {category}
                            </span>
                            {/each}
                        </div>
                        <div class="absolute bottom-2 left-2">
                            <span class="badge variant-filled-surface text-xs flex items-center gap-1">
                                <i class="material-icons text-xs">schedule</i>
                                {calculateReadingTime(post.description)} min read
                            </span>
                        </div>
                    </div>
                    <div class="p-4 flex-1 flex flex-col">
                        <h3 class="h4 font-bold mb-2 line-clamp-2">{post.title}</h3>
                        <p class="text-sm opacity-75 mb-4 flex-1 line-clamp-3">{truncateDescription(post.description)}</p>
                        
                        <div class="flex items-center gap-2 pt-3 border-t border-surface-500">
                            <Avatar src={post.avatar} width="w-8" />
                            <div class="flex-1 min-w-0">
                                <p class="font-bold text-sm truncate">{post.user}</p>
                                <p class="text-xs opacity-75">{formatDate(post.date)}</p>
                            </div>
                            <i class="material-icons text-primary-500">arrow_forward</i>
                        </div>
                    </div>
                </a>
                {/each}
            </div>

            {#if filteredPosts.length === 0}
            <div class="p-8 text-center opacity-50">
                <i class="material-icons text-6xl mb-4">article</i>
                <p>No posts found matching your search</p>
                <button class="btn variant-filled-primary mt-4" on:click={() => {searchQuery = ''; selectedCategory = 'All';}}>
                    Clear Filters
                </button>
            </div>
            {/if}
        </div>

    </div>
</div>


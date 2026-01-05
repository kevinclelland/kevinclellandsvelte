<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>



<section
	class="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 border-t border-b border-black py-3 px-5 font-thin">
	<div class="flex flex-wrap gap-2">
		{#each data.meta.categories as category}
			<span class="surface-4 px-2 border border-black rounded-md text-sm">&num;{category}</span>
		{/each}
	</div>
	<span class="text-sm md:text-base">Posted on {formatDate(data.meta.date)}</span>
	<div class="flex items-center">
		<Avatar src={data.meta.avatar} width="w-10" />
		<p class="px-2 text-sm md:text-base">Author: {data.meta.user}</p>
	</div>
</section>

<section class="py-8 md:py-12 px-4 md:px-6">
	<h1 class="text-center font-serif text-4xl md:text-6xl lg:text-7xl px-4 mb-6 md:mb-8 max-w-4xl mx-auto">{data.meta.title}</h1>
	<h2 class="text-center font-serif text-lg md:text-2xl lg:text-3xl xl:text-4xl italic px-4 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">{data.meta.description}</h2>
	<img src="{data.meta.photo}" alt="Relevant graphic for the post" class="max-w-2xl mx-auto w-full px-4 mt-4">
</section>

<!-- Post -->
<article class="px-4 md:px-6 pb-12 md:pb-16 max-w-7xl mx-auto">
	<svelte:component this={data.content} />
</article>

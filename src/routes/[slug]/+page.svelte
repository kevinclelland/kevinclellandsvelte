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
	class="mx-auto flex items-center justify-between border-t border-b border-black py-3 px-5 font-thin">
	<div>
		{#each data.meta.categories as category}
			<span class="surface-4 px-2 mx-2 border border-black rounded-md">&num;{category}</span>
		{/each}
	</div>
	<span>Posted on {formatDate(data.meta.date)}</span>
	<div class="flex items-center">
		<Avatar src={data.meta.avatar} width="w-10" />
		<p class="px-2">Author: {data.meta.user}</p>
	</div>
</section>

<section class="py-5">
	<h1 class="text-center font-serif text-7xl p-2">{data.meta.title}</h1>
	<h1 class="mt-5 text-center font-serif text-4xl italic p-4 mb-4">{data.meta.description}</h1>
	<img src="{data.meta.photo}" alt="Relevant graphic for the post" class="max-w-2xl mx-auto">
</section>

<!-- Post -->
<div class="p-4">
	<p>
		<svelte:component this={data.content} />
	</p>
</div>

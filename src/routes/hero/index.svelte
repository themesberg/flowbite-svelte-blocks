<script>
	import { Section, News, HeroHeader, HeroBody } from '$lib/index';
	import { Button } from 'flowbite-svelte';
	import { ArrowRight, VideoCamera } from 'svelte-heros';
	import Youtube from '../utils/icons/Youtube.svelte';
	import ProductHunt from '../utils/icons/ProductHunt.svelte';
	import Reddit from '../utils/icons/Reddit.svelte';
</script>

<Section>
	<News>
		<span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
		<span class="text-sm font-medium">Flowbite is out! See what's new</span>
	</News>
	<HeroHeader>
		<svelte:fragment slot="h1">We invest in the world’s potential</svelte:fragment>
		<svelte:fragment slot="paragraph">
			Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.
		</svelte:fragment>
	</HeroHeader>

	<div
		class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
	>
		<a href="/">
			<Button size="lg">
				Learn more <ArrowRight size="18" class="ml-2" />
			</Button>
		</a>
		<a href="/">
			<Button size="lg" color="light">
				<VideoCamera variation="solid" size="28" class="pt-1" />
				Watch video
			</Button>
		</a>
	</div>
	<HeroBody>
		<svelte:fragment slot="head">FEATURED IN</svelte:fragment>

		<div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
				<Youtube />
			</a>
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
				<ProductHunt />
			</a>
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
				<Reddit />
			</a>
		</div>
	</HeroBody>
</Section>

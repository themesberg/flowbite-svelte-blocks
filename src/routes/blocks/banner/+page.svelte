<script lang="ts">
	throw new Error(
		'@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
	);

	import { Section, Banner } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem, CloseButton } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
	export let visible = true;
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Banners</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Banner - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>The banner component can be used to show extra information or enable interactions with the user
		without affecting the main content area of the website.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default banner
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example of a dismissable banner component to show extra information relative to the
				main content area of the page based on a sticky positition.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/banner.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	{#if visible}
		<Banner>
			<p class="text-sm font-light text-gray-500 dark:text-gray-400">
				Supercharge your hiring by taking advantage of our <a
					class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
					href="/">limited-time sale</a
				> for Designer Search + Job Board. Unlimited access to over 190K top-ranked candidates and the
				#1 design job board.
			</p>
			<CloseButton
				on:click={() => (visible = false)}
				class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
			/>
		</Banner>
	{/if}
</ExampleDiv>

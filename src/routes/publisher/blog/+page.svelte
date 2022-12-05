<script>
	import { Section, Page500 } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/publisher">Publisher</BreadcrumbItem>
		<BreadcrumbItem>Blog Templates</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Blog Templates - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with a collection of Tailwind CSS blog templates, themes, and article layouts to
		publish content crafted with built-in SEO optimization.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default blog template
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this free blog template to show the content of an article using the Flowbite Typography
				plugin including the author, post date, and a comments section.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/publisher/blog/+page.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

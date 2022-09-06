<script>
	import { Section, Page500 } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { BlogTemplatesection } from '../sections/+server';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem>Marketing</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Publisher UI</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with a collection of free and premium Tailwind CSS UI components for publishing
		blog posts, articles, comment sections, sidebar widgets, and more.</svelte:fragment
	>
</SectionHeader>

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
	<div class="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
		<div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
			<BlogTemplatesection />
		</div>
	</div>
</section>

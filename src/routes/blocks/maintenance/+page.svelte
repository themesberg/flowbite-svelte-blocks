<script>
	import { Section, Maintenance } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Maintenance Pages</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1"
		>Tailwind CSS Maintenance Pages - Flowbite-Svelte-Blocks</svelte:fragment
	>
	<svelte:fragment slot="paragraph"
		>Get started with maintenance pages coded with Tailwind CSS to show your users when you are
		currently working on an update and the website is not accessible.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default maintenance page
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to let your users know that you are working on an important update and the
				website is down for a couple of hours.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/maintenance.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="maintenance">
		<Maintenance>
			<svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
			<svelte:fragment slot="paragraph">
				Our Enterprise administrators are performing scheduled maintenance.
			</svelte:fragment>
		</Maintenance>
	</Section>
</ExampleDiv>

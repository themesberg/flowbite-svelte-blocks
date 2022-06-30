<script lang="ts">
	import { Section } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Cookie Consent</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Cookie Consent - Flowbite</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with the cookie banner component to interact with the website visitor and enable
		them to decide whether you can collect their personal data or not.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Cookie banner
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				This banner positioned at the bottom of the page can be used as an example to quickly ask
				for permission to store third-party cookies and collect personal information from your
				website visitors.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/cookie.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

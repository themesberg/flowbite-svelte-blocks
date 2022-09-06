<script lang="ts">
	import { Section } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
		<BreadcrumbItem>User Onboarding</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS User Onboarding - Flowbite</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Use a collection of user onboarding pages to increase the chances of the adoption of your
		software by improving the introduction phase of your product.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Choose account type
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example as the first step of the user onboarding process to ask what type of
				account would your user like to create (ie. business or individual).
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/user-onboarding.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

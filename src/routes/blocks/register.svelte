<script lang="ts">
	import { Section } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Register Forms</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Register Form - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Use a collection of register pages to let your users create an account on your website based on
		multiple layouts, social media authentication, and more.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default register page
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				This example can be used to allow users to create an account on your website using their
				email address and password and also a checkbox with the terms and conditions as a
				requirement.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/register.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

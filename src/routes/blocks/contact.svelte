<script lang="ts">
	import { Section } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Contact Forms</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Contact Form - Flowbite</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>The contact section is an important part of your website where the user can reach out to your
		team by interacting with the form elements and submitting the data.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default contact form
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example of a contact form coded with Tailwind CSS including the email, subject, and
				message that can be delivered by clicking on the form submission button.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/contact.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

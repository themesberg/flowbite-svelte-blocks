<script>
	import { Section, HeroHeader } from '$lib';
	import {
		ExampleDiv,
		SectionHeader,
		EditOnGithub,
		Airbnb,
		Google,
		Mailchimp,
		Mashable,
		Microsoft,
		Spotify
	} from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
		<BreadcrumbItem>Customer Logos</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Customer Logos - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>This website section can be used as a social proof incentive to convince your potential clients
		by showcasing popular companies that you've collaborated with.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default example
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show a list of logos of the companies that have used your product or
				worked with to provide strong social proof to your website visitors.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/customer-logos/+page.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="logos">
		<HeroHeader>
			<svelte:fragment slot="h2">You’ll be in good company</svelte:fragment>
			<div
				class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
			>
				<a href="/" class="flex justify-center items-center">
					<Airbnb />
				</a>
				<a href="/" class="flex justify-center items-center">
					<Google />
				</a>
				<a href="/" class="flex justify-center items-center">
					<Microsoft />
				</a>

				<a href="/" class="flex justify-center items-center">
					<Spotify />
				</a>
				<a href="/" class="flex justify-center items-center">
					<Mailchimp />
				</a>
				<a href="/" class="flex justify-center items-center">
					<Mashable />
				</a>
			</div></HeroHeader
		>
	</Section>
</ExampleDiv>

<script lang="ts">
	import { Section, Cta, HeroHeader } from '$lib';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import SectionHeader from '../utils/SectionHeader.svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>CTA Sections</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS CTA Sections - Flowbite</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>The CTA (call to action) website sections can be used anywhere on your website to encourage
		your users to take any action, such as creating a new account.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default CTA section
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show a simple heading, paragraph, and a couple of CTA buttons to
				encourage users to take action.
			</p>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="cta">
		<Cta>
			<svelte:fragment slot="h2">Let's find more that brings us together.</svelte:fragment>
			<p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
				Flowbite helps you connect with friends, family and communities of people who share your
				interests. Connecting with your friends and family as well as discovering new ones is easy
				with features like Groups, Watch and Marketplace.
			</p>
			<a
				href="/"
				class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<svg
					class="mr-2 -ml-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
					/></svg
				>
				View more
			</a>
		</Cta>
	</Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Image with CTA button
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show an image or app screenshot next to the CTA button to provide
				additional visual impact.
			</p>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="ctawithimg">
		<Cta ctatype="image">
			<svelte:fragment slot="img">
				<img
					class="w-full dark:hidden"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
					alt="dashboard"
				/>
				<img
					class="w-full hidden dark:block"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
					alt="dashboard"
				/>
			</svelte:fragment>
			<svelte:fragment slot="h2"
				>Let's create more tools and ideas that brings us together.</svelte:fragment
			>
			<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
				Flowbite helps you connect with friends and communities of people who share your interests.
				Connecting with your friends and family as well as discovering new ones is easy with
				features like Groups.
			</p>
			<a
				href="/"
				class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
			>
				Get started
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
		</Cta>
	</Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Heading with CTA button
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this simple yet effective CTA section with a heading, short paragraph, and a button to
				encourage users to start a free trial.
			</p>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="cta">
		<Cta ctatype="heading">
			<svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
			<p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
				Try Flowbite Platform for 30 days. No credit card required.
			</p>
			<a
				href="/"
				class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
				>Free trial for 30 days</a
			>
		</Cta>
	</Section>
</ExampleDiv>

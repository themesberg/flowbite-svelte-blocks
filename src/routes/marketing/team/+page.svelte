<script lang="ts">
	import {
		Section,
		TeamWrapper,
		TeamHeader,
		TeamBody,
		TeamItem,
		Facebook,
		Github,
		Twitter
	} from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	let members = [
		{
			href: '/',
			src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
			alt: 'Bonnie Green',
			name: 'Bonnie Green',
			jobTitle: 'CEO & Web Developer',
			description: 'Bonnie drives the technical strategy of the flowbite platform and brand.'
		},
		{
			href: '/',
			src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
			alt: 'Jese Leos',
			name: 'Jese Leos',
			jobTitle: 'CTO',
			description: 'Jese drives the technical strategy of the flowbite platform and brand.'
		},
		{
			href: '/',
			src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
			alt: 'Michael Gouch',
			name: 'Michael Gouch',
			jobTitle: 'Senior Front-end Developer',
			description: 'Michael drives the technical strategy of the flowbite platform and brand'
		},
		{
			href: '/',
			src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
			alt: 'Lana Byrd',
			name: 'Lana Byrd',
			jobTitle: 'Marketing & Sale',
			description: 'Lana drives the technical strategy of the flowbite platform and brand.'
		}
	];
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
		<BreadcrumbItem>Team Sections</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Team Sections - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with a collection of team sections built with Tailwind CSS and Flowbite to showcase
		your organization's team members based on multiple layouts.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Team member cards
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show information about your team members such as the name, occupation,
				picture, and social media accounts inside a card component.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/team.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="team">
		<TeamWrapper>
			<TeamHeader>
				<svelte:fragment slot="label">Our Team</svelte:fragment>
				<p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
					Explore the whole collection of open-source web components and elements built with the
					utility classes from Tailwind
				</p>
			</TeamHeader>
			<TeamBody>
				{#each members as { href, src, alt, name, jobTitle, description }}
					<TeamItem {href} {src} {alt} {name} {jobTitle}>
						<p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
							{description}
						</p>
						<svelte:fragment slot="social">
							<Facebook href="/" />
							<Github href="/" />
							<Twitter href="/" />
						</svelte:fragment>
					</TeamItem>
				{/each}
			</TeamBody>
		</TeamWrapper>
	</Section>
</ExampleDiv>

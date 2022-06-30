<script lang="ts">
	import { Section, Content, ContentWithImage, HeroHeader } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Button, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home, ChevronRight } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Content Sections</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Content Sections - Flowbite</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Choose one of these website sections to show extra content relative to the other sections on
		the page such as a gallery of images, description texts, and more.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Heading with description
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show a heading with a paragraph and a CTA link anywhere on your page
				relative to other sections.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/content.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="content">
		<Content>
			<svelte:fragment slot="h2"
				>Powering innovation at 200,000+ companies worldwide</svelte:fragment
			>
			<p class="mb-4 font-light">
				Track work across the enterprise through an open, collaborative platform. Link issues across
				Jira and ingest data from other software development tools, so your IT support and
				operations teams have richer contextual information to rapidly respond to requests,
				incidents, and changes.
			</p>
			<p class="mb-4 font-medium">
				Deliver great service experiences fast - without the complexity of traditional ITSM
				solutions.Accelerate critical development work, eliminate toil, and deploy changes with
				ease.
			</p>
			<a
				href="/"
				class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
			>
				Learn more
				<ChevronRight class="ml-1 w-6 h-6" />
			</a>
		</Content>
	</Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Images with heading and description
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example to show a couple of images next to a heading and paragraph to provide
				visual impact to your users.
			</p>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="contentwithimg">
		<ContentWithImage>
			<svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
			<p class="mb-4">
				We are strategists, designers and developers. Innovators and problem solvers. Small enough
				to be simple and quick, but big enough to deliver the scope you want at the pace you need.
				Small enough to be simple and quick, but big enough to deliver the scope you want at the
				pace you need.
			</p>
			<p>
				We are strategists, designers and developers. Innovators and problem solvers. Small enough
				to be simple and quick.
			</p>

			<svelte:fragment slot="image">
				<img
					class="w-full rounded-lg"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
					alt="office content 1"
				/>
				<img
					class="mt-4 w-full lg:mt-10 rounded-lg"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
					alt="office content 2"
				/>
			</svelte:fragment>
		</ContentWithImage>
	</Section>
</ExampleDiv>

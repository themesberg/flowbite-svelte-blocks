<script lang="ts">
	import { Section, Content, ContentWithImage, HeroHeader } from '$lib';
	import { ChevronRight } from 'svelte-heros';
</script>

<Section name="feature">
	<HeroHeader
		class="max-w-screen-md mb-8 lg:mb-16"
		h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
		pClass="text-gray-500 sm:text-xl dark:text-gray-400"
	>
		<svelte:fragment slot="h2">Content Default</svelte:fragment>
	</HeroHeader>
</Section>

<Section name="content">
	<Content>
		<svelte:fragment slot="h2">Powering innovation at 200,000+ companies worldwide</svelte:fragment>
		<p class="mb-4 font-light">
			Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.
		</p>
		<p class="mb-4 font-medium">
			Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
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

<Section name="feature">
	<HeroHeader
		class="max-w-screen-md mb-8 lg:mb-16"
		h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
		pClass="text-gray-500 sm:text-xl dark:text-gray-400"
	>
		<svelte:fragment slot="h2">Content with Image</svelte:fragment>
	</HeroHeader>
</Section>

<Section name="contentwithimg">
	<ContentWithImage>
		<svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
		<p class="mb-4">
			We are strategists, designers and developers. Innovators and problem solvers. Small enough to
			be simple and quick, but big enough to deliver the scope you want at the pace you need. Small
			enough to be simple and quick, but big enough to deliver the scope you want at the pace you
			need.
		</p>
		<p>
			We are strategists, designers and developers. Innovators and problem solvers. Small enough to
			be simple and quick.
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

<script lang="ts">
	import { Section, Newsletter } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem, Iconinput } from 'flowbite-svelte';
	import { Home, Mail } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Newsletter Sections</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Newsletter - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>The newsletter component is an important marketing method that you can use to convince website
		visitors to sign up for additional news from your organization.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default newsletter
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example as a website section to allow website visitors to sign up for your
				newsletter program featuring an input field and privacy notice.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/newsletter.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section>
		<Newsletter>
			<svelte:fragment slot="h2">Sign up for our newsletter</svelte:fragment>
			<p
				class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
			>
				Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
				to sign up with your email.
			</p>
			<form action="/">
				<div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
					<Iconinput
						noBorder
						id="email"
						type="email"
						icon={Mail}
						iconClass="h-5 w-5 mr-2 dark:text-gray-400"
						placeholder="Enter your email"
					/>
				</div>
			</form>
		</Newsletter>
	</Section>
</ExampleDiv>

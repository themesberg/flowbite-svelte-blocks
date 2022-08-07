<script>
	import { Section } from '$lib';
	import { Github } from '../utils';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import {
		Breadcrumb,
		BreadcrumbItem,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon
	} from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Footer Sections</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Footer Sections - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with footer sections coded in Tailwind CSS to use at the bottom of every page of
		your website and showcase your logo, sitemap links, and more.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default footer section
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example of a footer section to show the logo of your brand, a description, links,
				and the copyright notice.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/footer.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Footer footerType="socialmedia">
		<div class="grid gap-12 lg:grid-cols-6 lg:gap-24">
			<div class="col-span-2">
				<FooterBrand
					href="https://flowbite.com"
					src="https://flowbite.com/docs/images/logo.svg"
					alt="Flowbite Logo"
					name="Flowbite"
					aClass="flex mb-6"
				/>
				<p class="text-gray-600 dark:text-gray-400">
					Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block
					sections, a Figma design system and other resources.
				</p>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
					Resources
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
					<FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
					<FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">Flowbite-Svelte</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
					HELP & SUPPORT
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
					<FooterLink
						liClass="mb-4"
						href="https://github.com/shinokada/flowbite-svelte-blocks/issues">GitHub</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
					Follow us
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks"
						>Gihub</FooterLink
					>
					<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
				<FooterLinkGroup>
					<FooterLink
						liClass="mb-4"
						href="https://github.com/shinokada/flowbite-svelte-blocks/LICENSE">LICENSE</FooterLink
					>
				</FooterLinkGroup>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterCopyright href="/" by="Flowbite™" />
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon
					href="https://github.com/shinokada/flowbite-svelte-blocks"
					class="text-gray-400 hover:text-gray-900"
					icon={Github}
				/>
			</div>
		</div>
	</Footer>
</ExampleDiv>

<script>
	import { Section } from '$lib/index';
	import { SocialMediaFooter } from 'flowbite-svelte';
	import { Facebook, Github, Twitter, Instagram } from 'svelte-simples';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
	let site = {
		href: '/',
		name: 'Flowbite',
		img: 'https://flowbite.com/docs/images/logo.svg'
	};
	let links = [
		{
			parent: 'RESOURCES',
			children: [
				{ name: 'Flowbite-Svelte', href: '/' },
				{
					name: 'Flowbite',
					href: '/'
				}
			]
		},
		{
			parent: 'FOLLOW US',
			children: [
				{ name: 'Github', href: '/' },
				{
					name: 'Flowbite',
					href: '/'
				}
			]
		},
		{
			parent: 'LEGAL',
			children: [
				{ name: 'Privacy Policy', href: '/' },
				{
					name: 'Terms & Conditions',
					href: '/'
				}
			]
		}
	];
	let socialMedia = [
		{
			href: '/',
			icon: Facebook
		},
		{
			href: '/',
			icon: Github
		},
		{
			href: '/',
			icon: Twitter
		},
		{
			href: '/',
			icon: Instagram
		}
	];
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
	<SocialMediaFooter {socialMedia} {links} {site} />
</ExampleDiv>

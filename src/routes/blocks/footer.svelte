<script>
	import { Section, HeroHeader } from '$lib/index';
	import { SocialMediaFooter } from 'flowbite-svelte';
	import { Facebook, Github, Twitter, Instagram } from 'svelte-simples';
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

<Section name="feature">
	<HeroHeader
		class="max-w-screen-md mb-8 lg:mb-16"
		h2Class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
		pClass="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl"
	>
		<svelte:fragment slot="h2">Sitemap with logo and social media</svelte:fragment>
		<svelte:fragment slot="paragraph">
			Use this footer section to show the logo of your brand, the sitemap, social media accounts,
			and the copyright notice.
		</svelte:fragment>
	</HeroHeader>
</Section>

<SocialMediaFooter {socialMedia} {links} {site} />

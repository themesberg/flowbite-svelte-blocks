<script>
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

<SocialMediaFooter {socialMedia} {links} {site} />

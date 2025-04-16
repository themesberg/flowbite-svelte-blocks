<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import {
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Dropdown,
		DropdownItem,
		DarkMode,
		Tooltip
	} from 'flowbite-svelte';
	import GitHubHome from './utils/icons/GitHubHome.svelte';
	import DocBadge from './utils/DocBadge.svelte';
	import Discord from './utils/icons/Discord.svelte';
	import YoutubeHome from './utils/icons/YoutubeHome.svelte';
	import ToolbarLink from './utils/ToolbarLink.svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	// import {Runatics} from 'Runatics';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	const analyticsId = data.ANALYTICS_ID_FLOWBITE;

	let version = import.meta.env.VITE_APP_VERSION;

	// to fix scrolling problem
	afterNavigate((navigation) => {
		document.getElementById('svelte')?.scrollTo({ top: 0 });
	});

	let activeUrl: string = $state('');
	let activeCategory: boolean = $state(false);

	$effect(() => {
		activeUrl = page.url.pathname;
		const keywords = ['marketing', 'application', 'publisher'];
		const isActive = keywords.some((keyword) => activeUrl.includes(keyword));
		activeCategory = isActive ? true : false;
	});

	let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
	let ulClass =
		'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';
</script>

<div class="flex min-h-screen flex-col bg-white dark:bg-gray-900">
	<header
		class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
	>
		<Navbar
			color="default"
			fluid
			class="mx-auto flex w-full items-center justify-between px-4 py-1.5"
		>
			<NavBrand href="/">
				<img src="/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
					Flowbite Svelte Blocks
				</span>
			</NavBrand>
			<NavUl
				class={divClass}
				{ulClass}
				nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
				activeClass="md:!pl-3 md:!py-2 lg:!pl-0 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-700 dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
			>
				<NavLi class="lg:mb-0 lg:px-2" href="/">Home</NavLi>
				<NavLi id="nav-menu1" class="cursor-pointer">
					Categories<ChevronDownOutline class="ml-2 inline h-3 w-3 text-gray-500 dark:text-white" />
				</NavLi>
				<Dropdown simple triggeredBy="#nav-menu1" placement="bottom-start" class="z-20 w-44">
					<DropdownItem href="/application">Application</DropdownItem>
					<DropdownItem href="/marketing">Marketing</DropdownItem>
					<DropdownItem href="/publisher">Publisher</DropdownItem>
					<DropdownItem href="/example">Example</DropdownItem>
				</Dropdown>
				<NavLi href="/pages/quickstart">Quickstart</NavLi>
				<NavLi href="https://next.flowbite-svelte.com">Flowbite-Svelte</NavLi>
				<NavLi href="https://flowbite-svelte-icons.codewithshin.com">Icons</NavLi>
				
			</NavUl>
			<div class="ml-auto flex items-center">
				<ToolbarLink
					class="hidden hover:text-gray-900 sm:inline-block dark:hover:text-white"
					name="View on GitHub"
					href="https://github.com/themesberg/flowbite-svelte-blocks"
				>
					<GitHubHome /></ToolbarLink
				>
				<ToolbarLink
					class="hidden hover:text-gray-900 xl:inline-block dark:hover:text-white"
					name="Join community on Discord"
					href="https://discord.gg/4eeurUVvTy"><Discord /></ToolbarLink
				>
				<ToolbarLink
					class="hidden hover:text-gray-900 xl:inline-block dark:hover:text-white"
					name="Subscribe to YouTube channel"
					href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A"
				>
					<YoutubeHome />
				</ToolbarLink>
				<DarkMode size="lg" class="inline-block hover:text-gray-900 dark:hover:text-white" />
				<Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
			</div>
			<a href="https://www.npmjs.com/package/flowbite-svelte-blocks" class="hidden sm:block">
				<DocBadge
					class="hover:bg-primary-600 dark:hover:bg-primary-800 ml-2 hover:text-white xl:ml-6 dark:hover:text-white"
				>
					v{version}
				</DocBadge>
			</a>

			<NavHamburger class="m-0 ml-3 lg:hidden" />
		</Navbar>
	</header>
	<main class="grow">
		{@render children()}
	</main>
</div>

<aside class="bg-gray-50 py-16 lg:py-20 dark:bg-gray-800">
	<div class="max-w-8xl mx-auto px-4">
		<h2
			class="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-center md:font-extrabold lg:mb-7 lg:leading-none dark:text-white"
		>
			Sign up for our newsletter
		</h2>
		<p
			class="mb-6 text-base text-gray-500 md:mb-10 md:text-center md:text-xl lg:px-20 xl:px-56 dark:text-gray-400"
		>
			Do you want to get notified when a new component is added to Flowbite? Sign up for our
			newsletter and you will be among the first to find out about new features, components,
			versions, and tools.
		</p>
		<div id="revue-embed" class="mb-4">
			<form
				action="https://app.convertkit.com/forms/4692392/subscriptions"
				method="post"
				id="revue-form"
				name="revue-form"
				class="flex max-w-xl md:mx-auto"
			>
				<div class="w-full">
					<label for="member_email" class="hidden">Email address</label>
					<div class="relative h-full">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								class="h-5 w-5 text-gray-500 dark:text-gray-400"
								><path
									d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
								/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
							>
						</div>
						<input
							type="email"
							id="member_email"
							name="member[email]"
							class="revue-form-field block w-full rounded-l-xl border border-gray-200 bg-white px-3 py-4 pl-10 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							placeholder="Enter your email"
							required
						/>
					</div>
				</div>
				<div class="revue-form-actions">
					<input
						type="submit"
						name="member[subscribe]"
						id="member_submit"
						class="bg-primary-600 border-primary-600 formkit-submit hover:bg-primary-700 focus:ring-primary-600 focus:border-primary-600 w-full cursor-pointer rounded-r-xl border px-4 py-4 text-center text-base font-semibold text-white focus:ring-2 focus:outline-none"
						value="Subscribe"
					/>
				</div>
			</form>
		</div>
		<p class="text-sm text-gray-500 md:text-center dark:text-gray-400">
			By subscribing, you agree with Revue’s <a
				rel="nofollow noopener noreferrer"
				class="text-primary-600 dark-text-primary-400 hover:underline"
				href="https://www.getrevue.co/terms">Terms of Service</a
			>
			and
			<a
				class="dark-text-blue-400 text-blue-600 hover:underline"
				rel="nofollow noopener noreferrer"
				href="https://www.getrevue.co/privacy">Privacy Policy</a
			>.
		</p>
	</div>
</aside>

<Footer footerType="socialmedia">
	<div class="max-w-8xl mx-auto grid gap-12 lg:grid-cols-6 lg:gap-24">
		<div class="col-span-2">
			<FooterBrand
				href="https://flowbite.com"
				src="/images/logo.svg"
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
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
				<FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
				<FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">Flowbite-Svelte</FooterLink>
				<FooterLink liClass="mb-4" href="https://flowbite-svelte-icons.com/"
					>Flowbite-Svelte-Icons</FooterLink
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
					href="https://github.com/themesberg/flowbite-svelte-blocks/issues">GitHub</FooterLink
				>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks"
					>Github</FooterLink
				>
				<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
			<FooterLinkGroup>
				<FooterLink
					liClass="mb-4"
					href="https://github.com/themesberg/flowbite-svelte-blocks/LICENSE">LICENSE</FooterLink
				>
			</FooterLinkGroup>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
	<div class="flex items-center justify-center">
		<FooterCopyright href="/" by="Flowbite™" />
		<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
			<FooterIcon
				href="https://github.com/themesberg/flowbite-svelte-blocks"
				class="text-gray-400 hover:text-gray-900"
			>
				<GitHubHome />
			</FooterIcon>
		</div>
	</div>
</Footer>

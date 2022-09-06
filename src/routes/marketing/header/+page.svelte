<script>
	import { Section } from '$lib';
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Button,
		Breadcrumb,
		BreadcrumbItem
	} from 'flowbite-svelte';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';

	let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
	let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
		<BreadcrumbItem>Headers</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1">Tailwind CSS Header - Flowbite-Svelte-Blocks</svelte:fragment>
	<svelte:fragment slot="paragraph"
		>Get started with the header component for the navigation of a website featuring multi-level
		dropdowns, mega-menus, search bars, language selectors, and more.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default header navigation
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example of a responsive navigation bar for your website by showing multiple menu
				items, a few CTA buttons, and a hamburger icon to toggle the mobile view.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/header.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<header>
		<Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
			<NavBrand href="/">
				<img
					src="https://flowbite.com/docs/images/logo.svg"
					class="mr-3 h-6 sm:h-9"
					alt="Flowbite Logo"
				/>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite
				</span>
			</NavBrand>
			<div class="flex items-center lg:order-2">
				<Button href="/" color="dark">Log in</Button>
				<Button href="/" class="ml-2" color="red">Get started</Button>
				<NavHamburger
					on:click={toggle}
					btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				/>
			</div>
			<NavUl
				{hidden}
				divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
				ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
			>
				<NavLi href="/" active={true}>Home</NavLi>
				<NavLi href="/">Company</NavLi>
				<NavLi href="/">Marketplace</NavLi>
				<NavLi href="/">Features</NavLi>
				<NavLi href="/">Team</NavLi>
				<NavLi href="/">Contact</NavLi>
			</NavUl>
		</Navbar>
	</header>
</ExampleDiv>

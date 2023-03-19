<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button, DarkMode } from 'flowbite-svelte';

	let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
	let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 ml-2';
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
	<header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900 ">
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
				<a href="https://github.com/shinokada/flowbite-svelte-blocks"
					><Button>Get started</Button></a
				>
				<DarkMode {btnClass} />
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
				<NavLi href="/">Home</NavLi>
				<NavLi href="/example">Example</NavLi>
        <NavLi href="https://flowbite-svelte-blocks.pages.dev/" target="_blank" >Docs</NavLi>
				<NavLi href="https://github.com/shinokada/flowbite-svelte-blocks">GitHub</NavLi>
				<NavLi href="https://flowbite-svelte.com">Flowbite-Svelte</NavLi>
			</NavUl>
		</Navbar>
	</header>
	<div class="px-4 mx-auto max-w-8xl dark:bg-gray-900 pb-8">
		<slot />
	</div>
</div>

<script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Button,
		DarkMode,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon
	} from 'flowbite-svelte';
	import {
		AccountRecoverysection,
		Bannersection,
		Blogsection,
		ContactFormsection,
		Contentsection,
		CookieConsentsection,
		CustomerLogosection,
		Ctasection,
		Faqsection,
		Featuresection,
		Footersection,
		Headersection,
		Herosection,
		LoginFormsection,
		Maintenancesection,
		Newslettersection,
		Page404section,
		Page500section,
		Popupsection,
		Pricingsection,
		RegisterFormsection,
		ResetPasswordFormsection,
		SocialProofsection,
		Teamsection,
		Testimonialsection,
		UserOnboarding
	} from './sections/';
	import { Github } from './utils';
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
				<a href="/" class="text-gray-500 dark:text-white"
					><Button color="alternative">Log in</Button></a
				>
				<a href="/"><Button>Get started</Button></a>
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
				<NavLi href="/examples">Examples</NavLi>
				<NavLi href="https://github.com/shinokada/flowbite-svelte-blocks">GitHub</NavLi>
				<NavLi href="https://flowbite-svelte.com">Flowbite-Svelte</NavLi>
			</NavUl>
		</Navbar>
	</header>
	<div class="px-4 mx-auto max-w-8xl dark:bg-gray-900">
		<main class="grow">
			<section class="px-4 mx-auto max-w-8xl">
				<div class="grid mt-3 mb-6 lg:gap-8 lg:mt-5 lg:mb-6 xl:grid-cols-3">
					<div class="col-span-2 mb-2 lg:mb-0">
						<h1 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
							Flowbite Blocks - Tailwind UI components
						</h1>
						<p class="text-lg text-gray-500 xl:mr-64 lg:mb-0 dark:text-gray-400">
							Get started with 122 free and premium UI components built with the utility classes
							from Tailwind CSS to upgrade your web development stack and customize the colors,
							fonts, and dark mode using the configurator.
						</p>
					</div>
				</div>
			</section>
			<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
				<div class="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
					<div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
						<Herosection />
						<Featuresection />
						<Headersection />
						<Ctasection />
						<Pricingsection />
						<Contentsection />
						<Footersection />
						<SocialProofsection />
						<RegisterFormsection />
						<Popupsection />
						<Teamsection />
						<ResetPasswordFormsection />
						<LoginFormsection />
						<Faqsection />
						<Testimonialsection />
						<Newslettersection />
						<Bannersection />
						<ContactFormsection />
						<AccountRecoverysection />
						<Blogsection />
						<CookieConsentsection />
						<UserOnboarding />
						<CustomerLogosection />
						<Page404section />
						<Page500section />
						<Maintenancesection />
					</div>
				</div>
			</section>
		</main>
	</div>
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
</div>

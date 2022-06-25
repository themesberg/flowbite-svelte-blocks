<script>
	import { Section, HeroHeader } from '$lib/index';
	import { Button } from 'flowbite-svelte';
	import { ArrowRight } from 'svelte-heros';
</script>

<Section name="heroVisual">
	<div class="mr-auto place-self-center lg:col-span-7">
		<HeroHeader
			h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
			pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
		>
			<svelte:fragment slot="h1">Payments tool for software companies</svelte:fragment>
			<svelte:fragment slot="paragraph">
				From checkout to global sales tax compliance, companies around the world use Flowbite to
				simplify their payment stack.
			</svelte:fragment>
			<a href="/"
				><Button size="xl" class="inline-flex items-center justify-center mr-3"
					>Get started<ArrowRight size="18" class="ml-2 -mr-1" /></Button
				>
			</a>
			<a href="/"
				><Button color="light" size="xl" class="inline-flex items-center justify-center"
					>Speak to Sales</Button
				>
			</a>
		</HeroHeader>
	</div>
	<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
		<img
			src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
			alt="mockup"
		/>
	</div>
</Section>

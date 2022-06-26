<script>
	import { Section, HeroHeader } from '$lib';
	import Airbnb from '../utils/icons/Airbnb.svelte';
	import Google from '../utils/icons/Google.svelte';
	import Mailchimp from '../utils/icons/Mailchimp.svelte';
	import Mashable from '../utils/icons/Mashable.svelte';
	import Microsoft from '../utils/icons/Microsoft.svelte';
	import Spotify from '../utils/icons/Spotify.svelte';
</script>

<Section name="logos">
	<HeroHeader>
		<svelte:fragment slot="h2">You’ll be in good company</svelte:fragment>
		<div
			class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
		>
			<a href="/" class="flex justify-center items-center">
				<Airbnb />
			</a>
			<a href="/" class="flex justify-center items-center">
				<Google />
			</a>
			<a href="/" class="flex justify-center items-center">
				<Microsoft />
			</a>

			<a href="/" class="flex justify-center items-center">
				<Spotify />
			</a>
			<a href="/" class="flex justify-center items-center">
				<Mailchimp />
			</a>
			<a href="/" class="flex justify-center items-center">
				<Mashable />
			</a>
		</div></HeroHeader
	>
</Section>

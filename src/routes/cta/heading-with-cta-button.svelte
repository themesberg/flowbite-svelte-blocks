<script lang="ts">
	import { Section, HeadingWithCtaButton } from '$lib';
</script>

<Section name="headingwithctabutton">
	<HeadingWithCtaButton>
		<svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
		<p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
			Try Flowbite Platform for 30 days. No credit card required.
		</p>
		<a
			href="/"
			class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
			>Free trial for 30 days</a
		>
	</HeadingWithCtaButton>
</Section>

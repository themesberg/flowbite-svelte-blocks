<script lang="ts">
	import { Section, Content } from '$lib';
	import { ChevronRight } from 'svelte-heros';
</script>

<Section name="content">
	<Content>
		<svelte:fragment slot="h2">Powering innovation at 200,000+ companies worldwide</svelte:fragment>
		<p class="mb-4 font-light">
			Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.
		</p>
		<p class="mb-4 font-medium">
			Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
		</p>
		<a
			href="/"
			class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
		>
			Learn more
			<ChevronRight class="ml-1 w-6 h-6" />
		</a>
	</Content>
</Section>

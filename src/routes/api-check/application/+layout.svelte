<script lang="ts">
	import type { PageData } from '../../$types';
	// import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
	// import ComponentsLayout from "../layouts/ComponentsLayout.svelte";
	import type { Snippet } from 'svelte';

	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<div class="mx-auto mb-32 max-w-7xl">
	{@render children()}
</div>

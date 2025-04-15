<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		divClass?: string;
		class?: string;
	}
	let { children, divClass = 'grid gap-8 lg:grid-cols-2', class: className }: Props = $props();
	// export let divClass: string = 'grid gap-8 lg:grid-cols-2';
</script>

<div class={twMerge(divClass, className)}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:divClass: any = 'grid gap-8 lg:grid-cols-2';
@props:class: string;
-->

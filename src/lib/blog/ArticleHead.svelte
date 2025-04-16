<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		divClass?: string;
		class?: string;
	}
	let { children, divClass = 'flex justify-between items-center mb-5 text-gray-500', class: className }: Props = $props();
	// export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
</script>

<div class={twMerge(divClass, className)}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:divClass: any = 'flex justify-between items-center mb-5 text-gray-500';
@props:class: string;
-->

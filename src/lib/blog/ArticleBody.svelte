<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		h2?: Snippet;
		h2Class?: string;
		class?: string;
	}
	let { children, h2, h2Class = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white', class: className }: Props = $props();

	// export let h2Class: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
</script>

{#if h2}
	<h2 class={twMerge(h2Class, className)}>
		{@render h2()}
	</h2>
{/if}
{#if children}
	{@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h2: any;
@props:h2Class: any = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
@props:class: string;
-->

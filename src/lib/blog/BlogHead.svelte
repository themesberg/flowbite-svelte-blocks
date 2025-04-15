<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		h2?: Snippet;
		divClass?: string;
		h2Class?: string;
		classH2?: string;
		class?: string;
	}
	let {
		children,
		h2,
		divClass = 'mx-auto max-w-screen-sm text-center lg:mb-16 mb-8',
		h2Class = 'mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white',
		classH2,
		class: className
	}: Props = $props();
</script>

<div class={twMerge(divClass, className)}>
	{#if h2}
		<h2 class={twMerge(h2Class, classH2)}>
			{@render h2()}
		</h2>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h2: any;
@props:divClass: any = 'mx-auto max-w-screen-sm text-center lg:mb-16 mb-8';
@props:h2Class: any = 'mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
@props:classH2: any;
@props:class: string;
-->

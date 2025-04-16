<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		h2?: Snippet;
		divClass?: string;
		h2Class?: string;
	}
	let { children, h2, divClass, h2Class }: Props = $props();
	let divCls: string = twMerge('mx-auto max-w-screen-md sm:text-center', divClass);
	let h2Cls: string = twMerge('mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white', h2Class);
</script>

<div class={divCls}>
	{#if h2}
		<h2 class={h2Cls}>
			{@render h2()}
		</h2>
	{/if}
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h2: any;
@props:divClass: any;
@props:h2Class: any;
-->

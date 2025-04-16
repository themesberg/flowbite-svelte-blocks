<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		h1?: Snippet;
		paragraph?: Snippet;
		divClass?: string;
		h1Class?: string;
	}
	let { h1, paragraph, divClass, h1Class }: Props = $props();
	let divCls: string = twMerge('mx-auto max-w-screen-sm text-center', divClass);
	let h1Cls: string = twMerge('mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500', h1Class);
</script>

<div class={divCls}>
	{#if h1}
		<h1 class={h1Cls}>
			{@render h1()}
		</h1>
	{/if}
	{#if paragraph}
		{@render paragraph()}
	{/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: h1: any;
@props:paragraph: any;
@props:divClass: any;
@props:h1Class: any;
-->

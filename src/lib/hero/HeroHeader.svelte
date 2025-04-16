<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		h1?: Snippet;
		h2?: Snippet;
		paragraph?: Snippet;
		class?: string;
		h1Class?: string;
		h2Class?: string;
		pClass?: string;
	}
	let { children, h1, h2, paragraph, class: className, h1Class, h2Class, pClass, ...restProps }: Props = $props();

	let h1Cls: string = twMerge('mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white', h1Class);
	let h2Cls: string = twMerge('mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl', h2Class);
	let pCls: string = twMerge('mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400', pClass);
</script>

<div class={className} {...restProps}>
	{#if h1}
		<h1 class={h1Cls}>
			{@render h1()}
		</h1>
	{/if}
	{#if h2}
		<h2 class={h2Cls}>
			{@render h2()}
		</h2>
	{/if}
	{#if paragraph}
		<p class={pCls}>
			{@render paragraph()}
		</p>
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
@props:h1: any;
@props:h2: any;
@props:paragraph: any;
@props:class: string;
@props:h1Class: any;
@props:h2Class: any;
@props:pClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		h2?: Snippet;
		paragraph?: Snippet;
		class?: string;
		h2Class?: string;
		pClass?: string;
	}
	let { h2, paragraph, class: className, h2Class, pClass }: Props = $props();
	let divCls: string = twMerge('mx-auto max-w-screen-md text-center mb-8 lg:mb-12', className);
	let h2Cls: string = twMerge('mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white', h2Class);
	let pCls: string = twMerge('mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400', pClass);
</script>

<div class={divCls}>
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
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: h2: any;
@props:paragraph: any;
@props:class: string;
@props:h2Class: any;
@props:pClass: any;
-->

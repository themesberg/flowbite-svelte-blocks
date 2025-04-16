<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		h2?: Snippet;
		paragraph?: Snippet;
		h2Class?: string;
		pClass?: string;
	}
	let { children, h2, paragraph, h2Class, pClass }: Props = $props();
	let h2Cls: string = twMerge('mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white', h2Class);
	let pCls: string = twMerge('mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl', pClass);
</script>

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
{@render children()}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h2: any;
@props:paragraph: any;
@props:h2Class: any;
@props:pClass: any;
-->

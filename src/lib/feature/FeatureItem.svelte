<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		icon: Snippet;
		h3?: Snippet;
		paragraph?: Snippet;
		divClass?: string;
		h3Class?: string;
		pClass?: string;
	}
	let { icon, h3, paragraph, divClass, h3Class, pClass }: Props = $props();
	let divCls: string = twMerge('flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900', divClass);
	let h3Cls: string = twMerge('mb-2 text-xl font-bold dark:text-white', h3Class);
	let pCls: string = twMerge('text-gray-500 dark:text-gray-400', pClass);
</script>

<div>
	{#if icon}
		<div class={divCls}>
			{@render icon()}
		</div>
	{/if}
	{#if h3}
		<h3 class={h3Cls}>
			{@render h3()}
		</h3>
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
@props: icon: any;
@props:h3: any;
@props:paragraph: any;
@props:divClass: any;
@props:h3Class: any;
@props:pClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		search?: Snippet;
		outerClass?: string;
		headerType?: 'search' | 'textbtn' | 'custom';
		slotClass?: string;
	}
	let { children, search, outerClass, headerType = 'search', slotClass }: Props = $props();
	let outerCls: string = twMerge('relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg', outerClass);
	const innerClasses = {
		search: 'flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4',
		textbtn: 'flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4',
		custom: ''
	};
	let slotCls: string = twMerge('flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3', slotClass);
</script>

<div class={outerCls}>
	{#if headerType === 'search'}
		<div class={innerClasses[headerType]}>
			{#if search}
				{@render search()}
			{/if}
			<div class={slotCls}>
				{@render children()}
			</div>
		</div>
	{:else}
		<div class={innerClasses[headerType]}>
			{@render children()}
		</div>
	{/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:search: any;
@props:outerClass: any;
@props:headerType: any = 'search';
@props:slotClass: any;
-->

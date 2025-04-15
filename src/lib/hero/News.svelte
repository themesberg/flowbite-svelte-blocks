<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
		href?: string;
		aClass?: string;
		iconClass?: string;
	}
	let { children, href = '/', aClass, iconClass, ...restProps }: Props = $props();
	// export let href: string = '/';
	// export let classA: string = '';
	let aCls: string = twMerge(
		'inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
		aClass
	);
</script>

<a {href} {...restProps} class={aCls}>
	{@render children()}
	<ChevronRightOutline size="xs" class={twMerge('ml-2', iconClass)} />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:href: any = '/';
@props:aClass: any;
@props:iconClass: any;
-->

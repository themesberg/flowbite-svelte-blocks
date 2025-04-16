<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	interface Item {
		customer?: string;
		title?: string;
		description?: string;
		href?: string;
		linkTitle?: string;
	}
	interface Props {
		children?: Snippet;
		item: Item;
		divClass?: string;
		customerClass?: string;
		titleClass?: string;
		descriptionClass?: string;
		linkClass?: string;
	}
	let { children, item, divClass, customerClass, titleClass, descriptionClass, linkClass }: Props = $props();
	let divCls: string = twMerge('space-y-4', divClass);
	let customerCls: string = twMerge('bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300', customerClass);
	let titleCls: string = twMerge('text-2xl font-bold leading-tight text-gray-900 dark:text-white', titleClass);
	let descriptionCls: string = twMerge('text-lg font-normal text-gray-500 dark:text-gray-400', descriptionClass);
	let linkCls: string = twMerge(
		'text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
		linkClass
	);
</script>

<div class={divCls}>
	{#if item.customer}
		<span class={customerCls}>
			{item.customer}
		</span>
	{/if}
	{#if item.title}
		<h3 class={titleCls}>
			{item.title}
		</h3>
	{/if}
	{#if item.description}
		<p class={descriptionCls}>
			{item.description}
		</p>
	{/if}

	<a href={item.href} title="" class={linkCls} role="button">
		{item.linkTitle}
		<svg aria-hidden="true" class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
		</svg>
	</a>
	{#if children}
		{@render children()}
	{/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:item: any;
@props:divClass: any;
@props:customerClass: any;
@props:titleClass: any;
@props:descriptionClass: any;
@props:linkClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		top?: Snippet;
		href?: string;
		aClass?: string;
		class?: string;
	}
	let { children, top, href, aClass, class: className }: Props = $props();
	// let href: string = '';
	let aCls: string = twMerge('flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white', aClass);
	let divCls: string = twMerge('w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700', className);
</script>

{#if top}
	<a {href} class={aCls}>
		{@render top()}
	</a>
{/if}
<div class={divCls}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:top: any;
@props:href: any;
@props:aClass: any;
@props:class: string;
-->

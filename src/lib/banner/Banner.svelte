<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		id?: string;
		class?: string;
	}
	let { children, id = 'banner', class: className }: Props = $props();

	let divCls: string = twMerge(
		'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800',
		className
	);
</script>

<div {id} tabindex="-1" class={divCls}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:id: any = 'banner';
@props:class: string;
-->

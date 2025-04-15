<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
	let divCls: string = twMerge(
		'flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white',
		className
	);
</script>

<div class={divCls}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
-->

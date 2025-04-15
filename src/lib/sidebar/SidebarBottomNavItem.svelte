<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		tooltip?: string;
		href?: string;
		aClass?: string;
	}
	let { children, tooltip, href, aClass }: Props = $props();

	let aCls: string = twMerge(
		'inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600',
		aClass
	);
</script>

<a {href} class={aCls}>
	{@render children()}
</a>
{#if tooltip}
	<Tooltip arrow={false}>{tooltip}</Tooltip>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:tooltip: any;
@props:href: any;
@props:aClass: any;
-->

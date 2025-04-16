<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		outerClass?: string;
		innerClass?: string;
		contentClass?: string;
	}
	let { children, outerClass, innerClass, contentClass }: Props = $props();
	let outerDivCls: string = twMerge('overflow-y-auto overflow-x-hidden z-50 md:inset-0 md:h-full', outerClass);
	let innerDivCls: string = twMerge('relative p-4 w-full max-w-lg h-full md:h-auto', innerClass);
	let contentDivCls: string = twMerge('relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8', contentClass);
</script>

<div id="info-popup" tabindex="-1" class={outerDivCls}>
	<div class={innerDivCls}>
		<div class={contentDivCls}>
			{@render children()}
		</div>
	</div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:outerClass: any;
@props:innerClass: any;
@props:contentClass: any;
-->

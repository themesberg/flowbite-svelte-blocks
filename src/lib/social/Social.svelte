<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
		dlClass?: string;
	}
	let { children, class: className, dlClass }: Props = $props();
	let divCls: string = twMerge('max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6', className);
	let dlCls: string = twMerge('grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white', dlClass);
</script>

<div class={divCls}>
	<dl class={dlCls}>
		{@render children()}
	</dl>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:dlClass: any;
-->

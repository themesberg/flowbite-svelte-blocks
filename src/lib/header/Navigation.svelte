<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
		navClass?: string;
		divClass?: string;
	}

	let { children, navClass, divClass, ...restProps }: Props = $props();
	let navCls: string = twMerge('bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800', navClass);
	let divCls: string = twMerge('flex flex-wrap justify-between items-center mx-auto max-w-screen-xl', divClass);
</script>

<header>
	<nav {...restProps} class={navCls}>
		<div class={divCls}>
			{@render children()}
		</div>
	</nav>
</header>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:navClass: any;
@props:divClass: any;
-->

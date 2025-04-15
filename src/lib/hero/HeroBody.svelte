<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		head?: Snippet;
		hero?: 'default' | 'visual';
		class?: string;
	}
	let { children, head, hero = 'default', class: className, ...restProps }: Props = $props();
	// export let hero: 'default' | 'visual' = 'default';
	const divClasses = {
		default: 'px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36',
		visual: ''
	};
</script>

<div {...restProps} class={twMerge(divClasses[hero], className)} class:has-head={head}>
	{#if head}
		<span class="font-semibold text-gray-400 uppercase">
			{@render head()}
		</span>
	{/if}
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:head: any;
@props:hero: any = 'default';
@props:class: string;
-->

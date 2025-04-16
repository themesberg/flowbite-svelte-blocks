<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Component } from 'svelte';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		footer?: Snippet;
		Icon?: Component;
		class?: string;
		figureFooterClass?: string;
	}
	let { children, footer, Icon, class: className, figureFooterClass }: Props = $props();
	// let icon: Component;
	let figureCls: string = twMerge('max-w-screen-md mx-auto', className);
	let figureFooterCls: string = twMerge('flex items-center justify-center mt-6 space-x-3', figureFooterClass);
</script>

<figure class={figureCls}>
	{#if Icon}
		<Icon />
	{/if}
	{@render children()}
	{#if footer}
		<figcaption class={figureFooterCls}>
			{@render footer()}
		</figcaption>
	{/if}
</figure>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:footer: any;
@props:Icon: any;
@props:class: string;
@props:figureFooterClass: any;
-->

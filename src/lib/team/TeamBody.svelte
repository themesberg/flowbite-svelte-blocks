<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
	let divCls: string = twMerge('grid gap-8 mb-6 lg:mb-16 md:grid-cols-2', className);
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

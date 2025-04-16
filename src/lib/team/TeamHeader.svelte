<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		label: Snippet;
		class?: string;
		h2Class?: string;
	}
	let { children, label, class: className, h2Class }: Props = $props();
	let divCls: string = twMerge('mx-auto max-w-screen-sm text-center mb-8 lg:mb-16', className);
	let h2Cls: string = twMerge('mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white', h2Class);
</script>

<div class={divCls}>
	<h2 class={h2Cls}>
		{@render label()}
	</h2>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:label: any;
@props:class: string;
@props:h2Class: any;
-->

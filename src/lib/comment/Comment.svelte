<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		title?: string;
		titleClass?: string;
		h2Class?: string;
		class?: string;
	}
	let { children, title, titleClass, h2Class, class: className }: Props = $props();
	//   export let title: string = '';
	const classTitle: string = 'flex justify-between items-center mb-6';
	const classH2: string = 'text-lg lg:text-2xl font-bold text-gray-900 dark:text-white';

	const titleDivCls: string = twMerge(classTitle, titleClass);
	const h2Cls: string = twMerge(classH2, h2Class);
</script>

<div class={titleDivCls}>
	<h2 class={h2Cls}>{title}</h2>
</div>

{@render children()}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:title: any;
@props:titleClass: any;
@props:h2Class: any;
@props:class: string;
-->

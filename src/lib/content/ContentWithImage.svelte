<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		h2?: Snippet;
		image?: Snippet;
		divClass?: string;
		h2Class?: string;
		imgClass?: string;
	}
	let { children, h2, image, divClass, h2Class, imgClass }: Props = $props();
	let divCls: string = twMerge('font-light text-gray-500 sm:text-lg dark:text-gray-400', divClass);
	let h2Cls: string = twMerge('mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white', h2Class);
	let imgCls: string = twMerge('grid grid-cols-2 gap-4 mt-8', imgClass);
</script>

<div class={divCls}>
	{#if h2}
		<h2 class={h2Cls}>
			{@render h2()}
		</h2>
	{/if}
	{@render children()}
</div>
{#if image}
	<div class={imgCls}>
		{@render image()}
	</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h2: any;
@props:image: any;
@props:divClass: any;
@props:h2Class: any;
@props:imgClass: any;
-->

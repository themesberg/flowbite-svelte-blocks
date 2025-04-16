<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		author?: Snippet;
		authorDiv?: string;
		authorImgDiv?: string;
		class?: string;
	}
	let { children, author, authorDiv = 'flex justify-between items-center', authorImgDiv = 'flex items-center space-x-4', class: className }: Props = $props();
	// export let authorDiv: string = 'flex justify-between items-center';
	// export let authorImgDiv: string = 'flex items-center space-x-4';
</script>

<div class={twMerge(authorDiv, className)}>
	<div class={authorImgDiv}>
		{#if author}
			{@render author()}
		{/if}
	</div>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:author: any;
@props:authorDiv: any = 'flex justify-between items-center';
@props:authorImgDiv: any = 'flex items-center space-x-4';
@props:class: string;
-->

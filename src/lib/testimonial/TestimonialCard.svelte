<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		header?: Snippet;
		class?: string;
		headerClass?: string;
	}
	let { children, header, class: className, headerClass }: Props = $props();
	let headerCls: string = twMerge('mx-auto max-w-screen-sm', headerClass);
	let divCls: string = twMerge('grid mb-8 lg:mb-12 lg:grid-cols-2', className);
</script>

{#if header}
	<div class={headerCls}>
		{@render header()}
	</div>
{/if}
{#if children}
	<div class={divCls}>
		{@render children()}
	</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:header: any;
@props:class: string;
@props:headerClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		btn: Snippet;
		ulClass?: string;
	}
	let { children, btn, ulClass }: Props = $props();
	let ulCls: string = twMerge('mb-8 space-y-4 text-left', ulClass);
</script>

<ul class={ulCls}>
	{@render children()}
</ul>
{#if btn}
	{@render btn()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:btn: any;
@props:ulClass: any;
-->

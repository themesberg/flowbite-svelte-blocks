<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		h3?: Snippet;
		paragraph?: Snippet;
		price?: Snippet;
		h3Class?: string;
		pClass?: string;
		priceClass?: string;
	}
	let { h3, paragraph, price, h3Class, pClass, priceClass }: Props = $props();
	let h3Cls: string = twMerge('mb-4 text-2xl font-semibold', h3Class);
	let pCls: string = twMerge('font-light text-gray-500 sm:text-lg dark:text-gray-400', pClass);
	let priceCls: string = twMerge('flex justify-center items-baseline my-8', priceClass);
</script>

{#if h3}
	<h3 class={h3Cls}>
		{@render h3()}
	</h3>
{/if}
{#if paragraph}
	<p class={pCls}>
		{@render paragraph()}
	</p>
{/if}
{#if price}
	<div class={priceCls}>
		{@render price()}
	</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: h3: any;
@props:paragraph: any;
@props:price: any;
@props:h3Class: any;
@props:pClass: any;
@props:priceClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		h3?: Snippet;
		caption?: Snippet;
		class?: string;
		blockQuoteClass?: string;
		h3Class?: string;
		footerBlockQuoteClass?: string;
	}
	let { children, h3, caption, class: className, blockQuoteClass, h3Class, footerBlockQuoteClass }: Props = $props();
	let figureCls: string = twMerge('flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700', className);
	let blockQuoteCls: string = twMerge('mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400', blockQuoteClass);
	let h3Cls: string = twMerge('text-lg font-semibold text-gray-900 dark:text-white', h3Class);
	let footerBlockQuoteCls: string = twMerge('flex justify-center items-center space-x-3', footerBlockQuoteClass);
</script>

<figure class={figureCls}>
	<blockquote class={blockQuoteCls}>
		{#if h3}
			<h3 class={h3Cls}>
				{@render h3()}
			</h3>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</blockquote>
	{#if caption}
		<figcaption class={footerBlockQuoteCls}>
			{@render caption()}
		</figcaption>
	{/if}
</figure>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h3: any;
@props:caption: any;
@props:class: string;
@props:blockQuoteClass: any;
@props:h3Class: any;
@props:footerBlockQuoteClass: any;
-->

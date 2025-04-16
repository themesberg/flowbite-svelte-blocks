<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		social: Snippet;
		class?: string;
		imgClass?: string;
		h3Class?: string;
		spanClass?: string;
		href?: string;
		src?: string;
		alt?: string;
		name?: string;
		jobTitle?: string;
	}
	let { children, social, class: className, imgClass, h3Class, spanClass, href, src, alt, name, jobTitle }: Props = $props();
	let divCls: string = twMerge('items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700', className);
	let imgCls: string = twMerge('w-full rounded-lg sm:rounded-none sm:rounded-l-lg', imgClass);
	let h3Cls: string = twMerge('text-xl font-bold tracking-tight text-gray-900 dark:text-white', h3Class);
	let spanCls: string = twMerge('text-gray-500 dark:text-gray-400', spanClass);
</script>

<div class={divCls}>
	{#if href && src}
		<a {href}>
			<img class={imgCls} {src} {alt} />
		</a>
	{/if}
	<div class="p-5">
		{#if href && name}
			<h3 class={h3Cls}>
				<a {href}>{name}</a>
			</h3>
		{/if}
		{#if jobTitle}
			<span class={spanCls}>{jobTitle}</span>
		{/if}
		{@render children()}
		<ul class="flex space-x-4 sm:mt-0">
			{@render social()}
		</ul>
	</div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:social: any;
@props:class: string;
@props:imgClass: any;
@props:h3Class: any;
@props:spanClass: any;
@props:href: any;
@props:src: any;
@props:alt: any;
@props:name: any;
@props:jobTitle: any;
-->

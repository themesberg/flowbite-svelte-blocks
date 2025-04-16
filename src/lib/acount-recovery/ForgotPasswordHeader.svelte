<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		aClass?: string;
		imgClass?: string;
		src?: string;
		href?: string;
		alt?: string;
		class?: string;
	}
	let { children, aClass = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white', imgClass = 'w-8 h-8 mr-2', src, href, alt, class: className }: Props = $props();
	// export let aClass: string = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
	// export let imgClass: string = 'w-8 h-8 mr-2';
	// export let src: string = '';
	// export let href: string = '';
	// export let alt: string = '';
</script>

<a {href} class={twMerge(aClass, className)}>
	<img class={imgClass} {src} {alt} />
	{@render children()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:aClass: any = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
@props:imgClass: any = 'w-8 h-8 mr-2';
@props:src: any;
@props:href: any;
@props:alt: any;
@props:class: string;
-->

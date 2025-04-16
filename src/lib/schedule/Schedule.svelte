<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		subtitle?: Snippet;
		scheduleName?: string;
		scheduleClass?: string;
		h2Class?: string;
		bodyOuterClass?: string;
		bodyInnerClass?: string;
	}
	let { children, subtitle, scheduleName, scheduleClass, h2Class, bodyOuterClass, bodyInnerClass }: Props = $props();
	//  let scheduleName: string = '';
	let divCls: string = twMerge('max-w-3xl mx-auto text-center', scheduleClass);
	let h2Cls: string = twMerge('text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white', h2Class);
	let bodyOuterCls: string = twMerge('flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16', bodyOuterClass);
	let bodyInnerCls: string = twMerge('-my-4 divide-y divide-gray-200 dark:divide-gray-700', bodyInnerClass);
</script>

<div class={divCls}>
	<h2 class={h2Cls}>
		{scheduleName}
	</h2>
	{#if subtitle}
		{@render subtitle()}
	{/if}
</div>

<div class={bodyOuterCls}>
	<div class={bodyInnerCls}>
		{@render children()}
	</div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:subtitle: any;
@props:scheduleName: any;
@props:scheduleClass: any;
@props:h2Class: any;
@props:bodyOuterClass: any;
@props:bodyInnerClass: any;
-->

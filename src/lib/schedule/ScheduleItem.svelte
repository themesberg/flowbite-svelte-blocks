<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Item {
		time?: string;
		href?: string;
		title?: string;
	}
	interface Props {
		item: Item;
		class?: string;
		pClass?: string;
		h3Class?: string;
		aClass?: string;
	}
	let { item, class: className, pClass, h3Class, aClass }: Props = $props();
	let divCls: string = twMerge('flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center', className);
	let pCls: string = twMerge('w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0', pClass);
	let h3Cls: string = twMerge('text-lg font-semibold text-gray-900 dark:text-white', h3Class);
	let aCls: string = twMerge('hover:underline', aClass);
</script>

<div class={divCls}>
	{#if item.time}
		<p class={pCls}>
			{item.time}
		</p>
	{/if}
	<h3 class={h3Cls}>
		{#if item.href}
			<a href={item.href} class={aCls}>{item.title}</a>
		{:else}
			{item.title}
		{/if}
	</h3>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: item: any;
@props:class: string;
@props:pClass: any;
@props:h3Class: any;
@props:aClass: any;
-->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { CheckCircleSolid } from 'flowbite-svelte-icons';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
		iconClass?: string;
	}
	let { children, class: className, iconClass }: Props = $props();
	let liCls: string = twMerge('flex items-center space-x-3', className);
	let iconCls: string = twMerge('ml-2', iconClass);
</script>

<li class={liCls}>
	<CheckCircleSolid size="sm" class={iconCls} />
	{@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
@props:iconClass: any;
-->

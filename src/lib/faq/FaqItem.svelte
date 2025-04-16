<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { QuestionCircleSolid } from 'flowbite-svelte-icons';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		h3: Snippet;
		divClass?: string;
		h3Class?: string;
	}
	let { children, h3, divClass, h3Class }: Props = $props();
	let divCls: string = twMerge('mb-10', divClass);
	let h3Cls: string = twMerge('flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white', h3Class);
</script>

<div class={divCls}>
	<h3 class={h3Cls}>
		<QuestionCircleSolid size="sm" class="mr-2" />
		{@render h3()}
	</h3>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@props: children: any;
@props:h3: any;
@props:divClass: any;
@props:h3Class: any;
-->

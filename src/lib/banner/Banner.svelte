<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet,
    id?: string;
    divClass?: string;
    class?: string;
  }
  let { children, id = 'banner', divClass = 'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800', className } = $props();
  // export let id: string = 'banner';
  // export let divClass: string = 'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800';
</script>

<div {id} tabindex="-1" class={twMerge(divClass, className)}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let id: string = 'banner';
@prop export let divClass: string = 'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800';
-->

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import ToolsIcon from './ToolsIcon.svelte';
  export let Icon: typeof SvelteComponent = ToolsIcon;
  export let h1Class: string =
    'mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white';
  export let pClass: string = 'font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400';
</script>

<svelte:component this={Icon} />

{#if $$slots.h1}
  <h1 class={twMerge(h1Class, $$props.classH1)}><slot name="h1" /></h1>
{/if}
{#if $$slots.paragraph}
  <p class={twMerge(pClass, $$props.classP)}><slot name="paragraph" /></p>
{/if}

<!--
@component
[Go to Popover](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let Icon: typeof SvelteComponent = ToolsIcon;
@prop export let h1Class: string =
    'mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white';
@prop export let pClass: string = 'font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400';
-->

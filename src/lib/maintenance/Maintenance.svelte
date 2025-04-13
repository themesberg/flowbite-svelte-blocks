<script lang="ts">
  import type { Component } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from 'svelte';
  import ToolsIcon from './ToolsIcon.svelte';
  interface Props{
    Icon?: Component;
    h1?: Snippet;
    paragraph?: Snippet;
    h1Class?: string;
    pClass?: string;
  }
  let { Icon = ToolsIcon, h1, paragraph, h1Class, pClass }: Props = $props();
  // export let Icon = ToolsIcon;
   let h1Cls: string = twMerge('mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white', h1Class);
   let pCls: string = twMerge('font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400', pClass);
</script>

<Icon />

{#if h1}
  <h1 class={h1Cls}>
    {@render h1()}
  </h1>
{/if}
{#if paragraph}
  <p class={pCls}>
    {@render paragraph()}
  </p>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let Icon = ToolsIcon;
@prop export let h1Class: string = 'mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white';
@prop export let pClass: string = 'font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400';
-->

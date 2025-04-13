<script lang="ts">
  import type { Snippet } from "svelte";
	import { twMerge } from "tailwind-merge";
  interface Props{
    children: Snippet;
    title: string;
    subtitle: string;
    divClass?: string;
    h2Class?: string;
    subtitleClass?: string;
    bodyClass?: string;
  }

  let { children, title, subtitle, divClass, h2Class, subtitleClass, bodyClass }: Props = $props();
  //  let title: string = '';
  //  let subtitle: string = '';
   let divCls: string = twMerge('max-w-2xl mx-auto text-center', divClass);
   let h2Cls: string = twMerge('text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white', h2Class);
   let subtitleCls: string = twMerge('mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400', subtitleClass);
   let bodyCls: string = twMerge('grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3', bodyClass);
</script>

<div class={divCls}>
  <h2 class={h2Cls}>
    {title}
  </h2>
  {#if subtitle}
    <p class={subtitleCls}>
      {subtitle}
    </p>
  {/if}
</div>

<div class={bodyCls}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let title: string = '';
@prop export let subtitle: string = '';
@prop export let headerDivClass: string = 'max-w-2xl mx-auto text-center';
@prop export let h2Class: string = 'text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white';
@prop export let subtitleClass: string = 'mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400';
@prop export let bodyDivClasss: string = 'grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3';
-->

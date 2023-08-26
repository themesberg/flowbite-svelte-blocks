<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let figureClass: string = 'flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700';
  export let blockQuoteClass: string = 'mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400';
  export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
  export let footerBlockQuoteClass: string = 'flex justify-center items-center space-x-3';
</script>

<figure class={twMerge(figureClass, $$props.class)}>
  <blockquote class={twMerge(blockQuoteClass, $$props.classBlockQuote)}>
    {#if $$slots.h3}
      <h3 class={twMerge(h3Class, $$props.classH3)}>
        <slot name="h3" />
      </h3>
    {/if}
    <slot />
  </blockquote>
  {#if $$slots.caption}
    <figcaption class={twMerge(footerBlockQuoteClass, $$props.classFooterBlockQuote)}>
      <slot name="caption" />
    </figcaption>
  {/if}
</figure>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let figureClass: string = 'flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700';
@prop export let blockQuoteClass: string = 'mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400';
@prop export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
@prop export let footerBlockQuoteClass: string = 'flex justify-center items-center space-x-3';
-->

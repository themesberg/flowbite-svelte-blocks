<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let h3Class: string = 'mb-4 text-2xl font-semibold';
  export let pClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
  export let priceClass: string = 'flex justify-center items-baseline my-8';
</script>

{#if $$slots.h3}
  <h3 class={twMerge(h3Class, $$props.class)}><slot name="h3" /></h3>
{/if}
{#if $$slots.paragraph}
  <p class={twMerge(pClass, $$props.classP)}>
    <slot name="paragraph" />
  </p>
{/if}
{#if $$slots.price}
  <div class={twMerge(priceClass, $$props.classPrice)}>
    <slot name="price" />
  </div>
{/if}

<!--
@component
[Go to Popover](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let h3Class: string = 'mb-4 text-2xl font-semibold';
@prop export let pClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
@prop export let priceClass: string = 'flex justify-center items-baseline my-8';
-->

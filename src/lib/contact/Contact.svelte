<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white';
  export let pClass: string =
    'mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl';
</script>

{#if $$slots.h2}
  <h2 class={twMerge(h2Class, $$props.class)}>
    <slot name="h2" />
  </h2>
{/if}
{#if $$slots.paragraph}
  <p class={twMerge(pClass, $$props.classP)}>
    <slot name="paragraph" />
  </p>
{/if}
<slot />

<!--
@component
[Go to Popover](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white';
@prop export let pClass: string =
    'mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl';
-->

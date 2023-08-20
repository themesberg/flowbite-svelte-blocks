<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let divClass: string = 'max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400';
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white';
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if $$slots.h2}
    <h2 class={twMerge(h2Class, $$props.classH2)}><slot name="h2" /></h2>
  {/if}
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400';
@prop export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white';
-->

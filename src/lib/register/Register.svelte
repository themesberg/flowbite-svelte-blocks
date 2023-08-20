<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let href: string = '';
  export let aClass: string =
    'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
  export let divClass: string =
    'w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700';
</script>

{#if $$slots.top}
  <a {href} class={twMerge(aClass, $$props.class)}>
    <slot name="top" />
  </a>
{/if}
<div class={twMerge(divClass, $$props.classDiv)}>
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let href: string = '';
@prop export let aClass: string =
    'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
@prop export let divClass: string =
    'w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700';
-->

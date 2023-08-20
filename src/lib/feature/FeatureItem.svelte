<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let divClass: string =
    'flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900';
  export let h3Class: string = 'mb-2 text-xl font-bold dark:text-white';
  export let pClass: string = 'text-gray-500 dark:text-gray-400';
</script>

<div>
  {#if $$slots.icon}
    <div class={twMerge(divClass, $$props.class)}>
      <slot name="icon" />
    </div>
  {/if}
  {#if $$slots.h3}
    <h3 class={twMerge(h3Class, $$props.classh3)}><slot name="h3" /></h3>
  {/if}
  {#if $$slots.paragraph}
    <p class={twMerge(pClass, $$props.classp)}><slot name="paragraph" /></p>
  {/if}
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let divClass: string =
    'flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900';
@prop export let h3Class: string = 'mb-2 text-xl font-bold dark:text-white';
@prop export let pClass: string = 'text-gray-500 dark:text-gray-400';
-->

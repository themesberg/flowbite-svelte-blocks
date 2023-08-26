<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'mx-auto max-w-screen-sm text-center lg:mb-16 mb-8';
  export let h2Class: string = 'mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if $$slots.h2}
    <h2 class={twMerge(h2Class, $$props.classH2)}><slot name="h2" /></h2>
  {/if}
  {#if $$slots.paragraph}
    <slot name="paragraph" />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let divClass: string = 'mx-auto max-w-screen-sm text-center lg:mb-16 mb-8';
@prop export let h2Class: string = 'mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
-->

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let h2Class: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
</script>

{#if $$slots.h2}
  <h2 class={twMerge(h2Class, $$props.class)}><slot name="h2" /></h2>
{/if}
{#if $$slots.paragraph}
  <slot name="paragraph" />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let h2Class: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
-->

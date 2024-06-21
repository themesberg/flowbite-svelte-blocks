<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ComponentType, SvelteComponent } from 'svelte';

  export let icon: ComponentType;
  export let figureClass: string = 'max-w-screen-md mx-auto';
  export let figureFooterClass: string = 'flex items-center justify-center mt-6 space-x-3';
</script>

<figure class={twMerge(figureClass, $$props.classFigure)}>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
  <slot></slot>
  {#if $$slots.footer}
    <figcaption class={twMerge(figureFooterClass, $$props.classFigureFooter)}>
      <slot name="footer" />
    </figcaption>
  {/if}
</figure>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let icon: ComponentType;
@prop export let figureClass: string = 'max-w-screen-md mx-auto';
@prop export let figureFooterClass: string = 'flex items-center justify-center mt-6 space-x-3';
-->

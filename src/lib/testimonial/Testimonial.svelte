<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  import type { SvelteComponent } from 'svelte';
  export let icon: typeof SvelteComponent | null = null;
  export let figureClass: string = 'max-w-screen-md mx-auto';
  export let figureFooterClass: string = 'flex items-center justify-center mt-6 space-x-3';
</script>

<figure class={twMerge(figureClass, $$props.classFigure)}>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
  <slot />
  {#if $$slots.footer}
    <figcaption class={twMerge(figureFooterClass, $$props.classFigureFooter)}>
      <slot name="footer" />
    </figcaption>
  {/if}
</figure>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let icon: typeof SvelteComponent | null = null;
@prop export let figureClass: string = 'max-w-screen-md mx-auto';
@prop export let figureFooterClass: string = 'flex items-center justify-center mt-6 space-x-3';
-->

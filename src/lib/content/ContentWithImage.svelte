<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let divClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
  export let imgDivClass: string = 'grid grid-cols-2 gap-4 mt-8';
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if $$slots.h2}
    <h2 class={twMerge(h2Class, $$props.classH2)}><slot name="h2" /></h2>
  {/if}
  <slot />
</div>
{#if $$slots.image}
  <div class={twMerge(imgDivClass, $$props.classImgDiv)}>
    <slot name="image" />
  </div>
{/if}

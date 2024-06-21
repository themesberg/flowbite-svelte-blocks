<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6';
  export let dlClass: string = 'grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <dl class={twMerge(dlClass, $$props.classDl)}>
    <slot></slot>
  </dl>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let divClass: string = 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6';
@prop export let dlClass: string = 'grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white';
-->

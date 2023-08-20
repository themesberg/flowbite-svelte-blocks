<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2';
-->

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let outerDivClass: string = 'overflow-y-auto overflow-x-hidden z-50 md:inset-0 md:h-full';
  export let innerDivClass: string = 'relative p-4 w-full max-w-lg h-full md:h-auto';
  export let contentDivClass: string = 'relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8';
</script>

<div id="info-popup" tabindex="-1" class={twMerge(outerDivClass, $$props.class)}>
  <div class={innerDivClass}>
    <div class={contentDivClass}>
      <slot />
    </div>
  </div>
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let outerDivClass: string = 'overflow-y-auto overflow-x-hidden z-50 md:inset-0 md:h-full';
@prop export let innerDivClass: string = 'relative p-4 w-full max-w-lg h-full md:h-auto';
@prop export let contentDivClass: string = 'relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8';
-->

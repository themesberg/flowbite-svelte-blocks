<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'mx-auto max-w-screen-sm text-center mb-8 lg:mb-16';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    <slot name="label" />
  </h2>
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'mx-auto max-w-screen-sm text-center mb-8 lg:mb-16';
-->

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { Icon } from 'flowbite-svelte-icons';
  export let divClass: string = 'mb-10';
  export let h3Class: string = 'flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <h3 class={twMerge(h3Class, $$props.classH3)}>
    <Icon name="question-circle-solid" size="sm" class="mr-2" />
    <slot name="h3" />
  </h3>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let divClass: string = 'mb-10';
@prop export let h3Class: string = 'flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white';
-->

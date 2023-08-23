<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Icon } from 'flowbite-svelte-icons';
  export let href: string = '/';
  export let classA: string = '';
</script>

<a {href} {...$$restProps} class={twMerge('inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700', classA)}>
  <slot />
  <svelte:component this={Icon} name="chevron-right-solid" size="xs" class={twMerge('ml-2', $$props.class)} />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let href: string = '/';
@prop export let classA: string = '';
-->

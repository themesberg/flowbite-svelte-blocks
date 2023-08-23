<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let articleClass: string = 'p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<article class={twMerge(articleClass, $$props.class)}>
  <slot />
</article>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let articleClass: string = 'p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
-->

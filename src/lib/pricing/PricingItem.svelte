<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let liClass: string = 'flex items-center space-x-3';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<li class={liClass}>
  <svelte:component this={CheckCircleSolid} size="sm" class={twMerge('ml-2', $$props.class)} />
  <slot />
</li>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let liClass: string = 'flex items-center space-x-3';
-->

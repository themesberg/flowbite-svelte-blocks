<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
-->

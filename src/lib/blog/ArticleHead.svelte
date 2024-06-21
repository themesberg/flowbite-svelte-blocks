<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
-->

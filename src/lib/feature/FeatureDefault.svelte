<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let divClass: string = 'space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0';
-->

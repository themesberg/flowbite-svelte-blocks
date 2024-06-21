<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'grid gap-8 lg:grid-cols-2';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let divClass: string = 'grid gap-8 lg:grid-cols-2';
-->

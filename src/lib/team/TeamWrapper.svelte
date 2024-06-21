<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let divClass: string = 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6';
-->

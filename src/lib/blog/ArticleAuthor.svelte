<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let authorDiv: string = 'flex justify-between items-center';
  export let authorImgDiv: string = 'flex items-center space-x-4';
</script>

<div class={twMerge(authorDiv, $$props.class)}>
  <div class={twMerge(authorImgDiv, $$props.classAuthorImgDiv)}>
    <slot name="author"></slot>
  </div>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let authorDiv: string = 'flex justify-between items-center';
@prop export let authorImgDiv: string = 'flex items-center space-x-4';
-->

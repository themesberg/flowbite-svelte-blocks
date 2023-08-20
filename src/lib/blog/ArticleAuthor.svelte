<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let authorDiv: string = 'flex justify-between items-center';
  export let authorImgDiv: string = 'flex items-center space-x-4';
</script>

<div class={twMerge(authorDiv, $$props.class)}>
  <div class={twMerge(authorImgDiv, $$props.classAuthorImgDiv)}>
    <slot name="author" />
  </div>
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let authorDiv: string = 'flex justify-between items-center';
@prop export let authorImgDiv: string = 'flex items-center space-x-4';
-->

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let headerClass: string = 'mx-auto max-w-screen-sm';
  export let divClass: string = 'grid mb-8 lg:mb-12 lg:grid-cols-2';
</script>

{#if $$slots.header}
  <div class={twMerge(headerClass, $$props.class)}>
    <slot name="header"></slot>
  </div>
{/if}
<div class={twMerge(divClass, $$props.classDiv)}>
  <slot></slot>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let headerClass: string = 'mx-auto max-w-screen-sm';
@prop export let divClass: string = 'grid mb-8 lg:mb-12 lg:grid-cols-2';
-->

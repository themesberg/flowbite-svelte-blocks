<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ulClass: string = 'mb-8 space-y-4 text-left';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot></slot>
</ul>
{#if $$slots.btn}
  <slot name="btn"></slot>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let ulClass: string = 'mb-8 space-y-4 text-left';
-->

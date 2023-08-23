<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ulClass: string = 'mb-8 space-y-4 text-left';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>
{#if $$slots.btn}
  <slot name="btn" />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let ulClass: string = 'mb-8 space-y-4 text-left';
-->

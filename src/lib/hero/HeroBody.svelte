<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let hero: 'default' | 'visual' = 'default';
  const divClasses = {
    default: 'px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36',
    visual: ''
  };
</script>

<div {...$$restProps} class={twMerge(divClasses[hero], $$props.class)} class:has-head={$$slots.head}>
  {#if $$slots.head}
    <span class="font-semibold text-gray-400 uppercase"><slot name="head" /></span>
  {/if}

  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let hero: 'default' | 'visual' = 'default';
-->

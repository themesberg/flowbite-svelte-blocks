<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let divClass: string = 'grid gap-8 mb-6 lg:mb-16 md:grid-cols-2';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'grid gap-8 mb-6 lg:mb-16 md:grid-cols-2';
-->

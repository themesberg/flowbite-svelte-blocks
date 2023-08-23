<script lang="ts">
  export let divClass: string = 'hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20';
</script>

<div class={divClass}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Component data
@prop export let divClass: string = 'hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20';
-->

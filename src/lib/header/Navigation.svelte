<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let navClass: string = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
  export let divClass: string =
    'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
</script>

<header>
  <nav {...$$restProps} class={twMerge(navClass, $$props.class)}>
    <div class={twMerge(divClass, $$props.divClass)}>
      <slot />
    </div>
  </nav>
</header>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let navClass: string = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
@prop export let divClass: string =
    'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
-->

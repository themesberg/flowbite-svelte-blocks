<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700';
  export let imgClass: string = 'w-full rounded-lg sm:rounded-none sm:rounded-l-lg';
  export let h3Class: string = 'text-xl font-bold tracking-tight text-gray-900 dark:text-white';
  export let spanClass: string = 'text-gray-500 dark:text-gray-400';

  export let href: string = '';
  export let src: string = '';
  export let alt: string = '';
  export let name: string = '';
  export let jobTitle: string = '';
</script>

<div class={twMerge(divClass, $$props.class)}>
  <a {href}>
    <img class={twMerge(imgClass, $$props.classImg)} {src} {alt} />
  </a>
  <div class="p-5">
    <h3 class={twMerge(h3Class, $$props.classH3)}>
      <a {href}>{name}</a>
    </h3>
    <span class={twMerge(spanClass, $$props.classSpan)}>{jobTitle}</span>
    <slot />
    <ul class="flex space-x-4 sm:mt-0">
      <slot name="social" />
    </ul>
  </div>
</div>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700';
@prop export let imgClass: string = 'w-full rounded-lg sm:rounded-none sm:rounded-l-lg';
@prop export let h3Class: string = 'text-xl font-bold tracking-tight text-gray-900 dark:text-white';
@prop export let spanClass: string = 'text-gray-500 dark:text-gray-400';
@prop export let href: string = '';
@prop export let src: string = '';
@prop export let alt: string = '';
@prop export let name: string = '';
@prop export let jobTitle: string = '';
-->

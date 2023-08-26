<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let aClass: string = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
  export let imgClass: string = 'w-8 h-8 mr-2';
  export let src: string = '';
  export let href: string = '';
  export let alt: string = '';
</script>

<a {href} class={twMerge(aClass, $$props.class)}>
  <img class={twMerge(imgClass, $$props.classImg)} {src} {alt} />
  <slot />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.vercel.app/)
## Props
@prop export let aClass: string = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
@prop export let imgClass: string = 'w-8 h-8 mr-2';
@prop export let src: string = '';
@prop export let href: string = '';
@prop export let alt: string = '';
-->

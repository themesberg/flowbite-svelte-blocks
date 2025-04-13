<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
    h2?: Snippet;
    image?: Snippet;
    ctatype?: 'default' | 'image' | 'heading' | 'none';
    h2Class?: string;
    class?: string;
  }
  let { children, h2, image, ctatype = 'default', h2Class, class:className }: Props = $props()
  // export let ctatype: 'default' | 'image' | 'heading' | 'none' = 'default';
  const ctaClasses = {
    default: {
      divClass: 'max-w-screen-md',
      h2Class: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'
    },
    image: {
      divClass: 'mt-4 md:mt-0',
      h2Class: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'
    },
    heading: {
      divClass: 'mx-auto max-w-screen-sm text-center',
      h2Class: 'mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'
    },
    none: {
      divClass: '',
      h2Class: ''
    }
  };
</script>

{#if image}
  {@render image()}
{/if}
<div class={twMerge(ctaClasses[ctatype]['divClass'], className)}>
  {#if h2}
    <h2 class={twMerge(ctaClasses[ctatype]['h2Class'], h2Class)}>
      {@render h2()}
    </h2>
  {/if}
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let ctatype: 'default' | 'image' | 'heading' | 'none' = 'default';
-->

<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import CompoDescription from './CompoDescription.svelte';
  interface Props{
    dir?: string;
    breadcrumb_title?: string;
    title?: string;
    description?: string;
  }
  let { dir, breadcrumb_title, title, description }: Props = $props();
</script>

<div class="pb-8">
  <Heading class="text-3xl inline-block mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white" tag="h1">
    {title}
  </Heading>

  <CompoDescription>{description}</CompoDescription>
</div>

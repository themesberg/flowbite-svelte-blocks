<script lang="ts">
  export let scheduleName: string = '';
</script>

<div class="max-w-3xl mx-auto text-center">
  <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
    {scheduleName}
  </h2>
  <slot name="subtitle"></slot>
</div>

<div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
  <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
    <slot></slot>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let scheduleName: string = '';
-->

## Example usage

```
<script lang="ts">
  import { Section, Banner } from 'flowbite-svelte-blocks';
  import { CloseButton } from 'flowbite-svelte';
  export let visible = true;
</script>

{#if visible}
  <Banner>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a
        class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
        href="/">limited-time sale</a
      > for Designer Search + Job Board. Unlimited access to over 190K top-ranked candidates and the
      #1 design job board.
    </p>
    <CloseButton
      on:click={() => (visible = false)}
      class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
    />
  </Banner>
{/if}
```
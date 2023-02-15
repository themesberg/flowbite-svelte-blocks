## Example usage


```
<script lang="ts">
  import { Section, Popup } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
</script>

<Popup>
  <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
    <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
    <p>
      The backup created with this export functionnality may contain some sensitive data. We
      suggest you to save this archive in a securised location.
    </p>
  </div>
  <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
    <a href="/" class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
      >Learn more about privacy</a
    >
    <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
      <Button outline color="dark">Cancel</Button>
      <Button color="red">Confirm</Button>
    </div>
  </div>
</Popup>
```
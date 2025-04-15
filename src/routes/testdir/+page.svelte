<script>
  import { Section, Page404 } from '$lib';
  import { Button } from 'flowbite-svelte';
</script>

<Section name="page404">
  <Page404>
    {#snippet h1()}
      404
    {/snippet}
    {#snippet paragraph()}
      <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
      <Button href="/" size="lg" color="red">Back to Homepage</Button>
    {/snippet}
  </Page404>
</Section>
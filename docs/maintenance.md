# Maintenance Pages

[Demo](https://flowbite-svelte-blocks.vercel.app/marketing/maintenance)

## Example usage

```
<script>
  import { Section, Maintenance } from 'flowbite-svelte-blocks';
</script>

<Section name="maintenance">
  <Maintenance>
    <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Our Enterprise administrators are performing scheduled maintenance.
    </svelte:fragment>
  </Maintenance>
</Section>
```
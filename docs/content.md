# Content Sections

[Demo](https://flowbite-svelte-blocks.vercel.app/marketing/content)

## Example usage

```html
<script lang="ts">
  import { Content, ContentWithImage } from 'flowbite-svelte-blocks';
</script>

<ContentWithImage>
  <svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
  <p class="mb-4">
    We are strategists, designers and developers. Innovators and problem solvers. Small enough to be
    simple and quick, but big enough to deliver the scope you want at the pace you need. Small
    enough to be simple and quick, but big enough to deliver the scope you want at the pace you
    need.
  </p>
  <p>
    We are strategists, designers and developers. Innovators and problem solvers. Small enough to be
    simple and quick.
  </p>

  <svelte:fragment slot="image">
    <img
      class="w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
      alt="office content 1"
    />
    <img
      class="mt-4 w-full lg:mt-10 rounded-lg"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      alt="office content 2"
    />
  </svelte:fragment>
</ContentWithImage>
```

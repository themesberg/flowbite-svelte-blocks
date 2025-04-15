<script lang="ts">
  import { Section, ContentWithImage } from '$lib';
</script>

<Section name="contentwithimg">
  <ContentWithImage>
    {#snippet h2()}We didn't reinvent the wheel{/snippet}
    <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

    {#snippet image()}
      <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    {/snippet}
  </ContentWithImage>
</Section>
<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import {
    Breadcrumb,
    BreadcrumbItem,
    Label,
    Input,
    Button,
    Checkbox,
    Heading,
    P,
    A
  } from 'flowbite-svelte';

  const breadcrumb_title = 'Blog Templates';
  const title = 'Blog Templates';
  const dir = 'publisher';
  const description =
    'Get started with a collection of Tailwind CSS blog templates, themes, and article layouts to publish content crafted with built-in SEO optimization.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader 
  category='publisher' 
  title='Tailwind CSS {breadcrumb_title} - Flowbite Blocks in Svelte' 
  {breadcrumb_title}
  {description}
/>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default blog template</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this free blog template to show the content of an article using the Flowbite Typography plugin including the author, post date, and a comments section.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/publisher/blog-templates.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-40 flex items-center'>
  <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>

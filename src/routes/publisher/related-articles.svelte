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

  const breadcrumb_title = 'Related Articles';
  const title = 'Related Articles';
  const dir = 'publisher';
  const description =
    'Use these components to show a list of related and recommended blog posts and articles at the bottom of the main content area of an article or blog post page.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/publisher">{breadcrumb_title}</BreadcrumbItem>
    <BreadcrumbItem>{title}</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1"
    >Tailwind CSS {title} - Flowbite Blocks in Svelte</svelte:fragment
  >
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default related articles</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this example to show a list of related articles after the main content of a blog post to engage users and decrease the bounce rate.
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
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-screen flex items-center'>
  <h1 class="text-6xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>

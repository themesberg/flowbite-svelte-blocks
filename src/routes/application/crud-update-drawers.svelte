<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag } from '../utils';
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
  const breadcrumb_title = 'Table Headers';
  const title = 'Table Headers';
  const dir = 'application';
  const description =
    'Get started with a collection of drawer components that you can use to update existing data sets from your database inside your dashboard.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/application">Application</BreadcrumbItem>
    <BreadcrumbItem>Update Drawers (CRUD)</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1"
    >Tailwind CSS Update Drawers (CRUD) - Flowbite</svelte:fragment
  >
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default drawer</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this free and responsive example of a drawer component to update an existing data set featuring text input fields, select boxes, and textareas.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/application/crud-update-drawers.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-screen flex items-center'>
    
  </Section>
</ExampleDiv>

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
import TableHeader from '$lib/tableheader/TableHeader.svelte';
  const breadcrumb_title = 'Table Headers';
  const title = 'Table Headers';
  const dir = 'application';
  const description =
    'Get started with a collection of modal components with form input elements to create new data models inside your dashboard based on Tailwind CSS.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/application">Application</BreadcrumbItem>
    <BreadcrumbItem>Create Modals (CRUD)</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1"
    >Tailwind CSS Create Modals (CRUD) - Flowbite</svelte:fragment
  >
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default modal</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this free example to show a modal component with a form inside when creating a new instance of a product inside your application.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/application/crud-create-modals.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-screen flex items-center'>
    <TableHeader />
  </Section>
</ExampleDiv>

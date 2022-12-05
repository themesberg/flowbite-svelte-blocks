<script>
  import { Section, Page500 } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = '500 Page - Flowbite Svelte Blocks';
  const title = '500';
  const dir = 'marketing';
  const description =
    'Get started with a collection of 500 status code pages coded with Tailwind CSS to show when a server error is being triggered.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>500 Pages</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS 500 Page - Flowbite-Svelte-Blocks</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default 500 page
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        {description}
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/500.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="page500">
    <Page500>
      <svelte:fragment slot="h1">500</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Internal Server Error.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          We are already working to solve the problem.
        </p>
      </svelte:fragment>
    </Page500>
  </Section>
</ExampleDiv>

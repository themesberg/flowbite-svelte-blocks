<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Cookie';
  const title = 'Cookie';
  const dir = 'marketing';
  const description =
    'Get started with the cookie banner component to interact with the website visitor and enable them to decide whether you can collect their personal data or not.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>Cookie Consent</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS Cookie Consent - Flowbite-Svelte-Blocks</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Cookie banner
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        This banner positioned at the bottom of the page can be used as an example to quickly ask
        for permission to store third-party cookies and collect personal information from your
        website visitors.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/cookie.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

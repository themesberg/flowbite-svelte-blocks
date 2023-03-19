<script>
  import { Section, HeroHeader } from '$lib';
  import {
    ExampleDiv,
    SectionHeader,
    EditOnGithub,
    Airbnb,
    Google,
    Mailchimp,
    Mashable,
    Microsoft,
    Spotify,
    MetaTag
  } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Customer Logos';
  const title = 'Customer Logos';
  const dir = 'marketing';
  const description =
    "This website section can be used as a social proof incentive to convince your potential clients by showcasing popular companies that you've collaborated with.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>Customer Logos</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS Customer Logos - Flowbite Blocks in Svelte</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default example
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example to show a list of logos of the companies that have used your product or
        worked with to provide strong social proof to your website visitors.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/customer-logos.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="logos">
    <HeroHeader>
      <svelte:fragment slot="h2">You’ll be in good company</svelte:fragment>
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Google />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Microsoft />
        </a>

        <a href="/" class="flex justify-center items-center">
          <Spotify />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Mailchimp />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Mashable />
        </a>
      </div></HeroHeader
    >
  </Section>
</ExampleDiv>

<script lang="ts">
  import { Section, Social } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Social proof';
  const title = 'Social proof';
  const dir = 'marketing';
  const description =
    "Get started with this website section to offer social proof to your website visitors by providing statistical numbers about your product's usage worldwide.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>Social Proof</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS Social Proof - Flowbite Blocks in Svelte</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default example
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example of statistical numbers that you can use to showcase the adoption rate of
        your product by the community.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/social-proof.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="social">
    <Social>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
      </div>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">contributors</dd>
      </div>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">organizations</dd>
      </div>
    </Social>
  </Section>
</ExampleDiv>

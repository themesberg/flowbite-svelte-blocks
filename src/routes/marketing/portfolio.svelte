<script lang="ts">
  import { Section, Portfolio, PortfolioItem } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Portfolio';
  const title = 'Portfolio';
  const dir = 'marketing';
  const description =
    'Get started with the project portfolio UI components coded with Tailwind CSS to showcase your personal or company client\'s project specifications and results.';
  const portfolios = [
    {
      customer: 'Alphabet Inc.',
      title: 'Official website',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Microsoft Corp.',
      title: 'Management system',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Adobe Inc.',
      title: 'Logo design',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    }
  ]
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader 
  category='marketing' 
  title='Tailwind CSS {breadcrumb_title} - Flowbite Blocks in Svelte' 
  {breadcrumb_title}
  {description}
/>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default event schedule
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example to show a list of company clients and case study previews inside a website section featuring the client, title of the project, a description and CTA button.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/schedule.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="portfolio" sectionClass='bg-white dark:bg-gray-900 antialiased'>
    <Portfolio title='Our work' subtitle='Crafted with skill and care to help our clients grow their business!'>
      {#each portfolios as item}
        <PortfolioItem {item}/>
      {/each}
    </Portfolio>
  </Section>
</ExampleDiv>

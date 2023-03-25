<script>
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Advanced Tables';
  const title = 'Advanced Tables';
  const dir = 'application';
  const description =
    'Get started with a collection of advanced table components based on multiple layouts and styles to show a complex set of data using rows and columns built with Tailwind CSS.';
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
        Default table
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this free example of a table component with a search bar, filter dropdown, and a dataset of rows and columns to show complex data in your application.
      </p>
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>



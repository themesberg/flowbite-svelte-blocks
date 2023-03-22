<script lang="ts">
  import { Section, Schedule, ScheduleItem } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Event Schedule';
  const title = 'Event Schedule';
  const dir = 'marketing';
  const description =
    'Get started with a collection of website sections coded with Tailwind CSS to show the schedule of an event inside a timeline featuring a title, speaker, and description.';
  const schedule = [
    {
      time: '08:00 - 09:00',
      href: '/',
      title: 'Opening remarks'
    },
    {
      time: '09:00 - 10:00',
      href: '/',
      title: 'Bergside LLC: Controlling the video traffic flows'
    },
    {
      time: '10:00 - 11:00',
      href: '/',
      title: 'Flowbite - An Open Framework for Forensic Watermarking'
    },
    {
      time: '11:00 - 12:00',
      href: '/',
      title: 'Coffee Break'
    },
    {
      time: '12:00 - 13:00',
      href: '/',
      title: 'Scaling your brand from €0 to multimillion euros'
    },
    {
      time: '13:00 - 14:00',
      href: '/',
      title: 'Updates from the Open Source Multimedia community'
    },
    {
      time: '14:00 - 15:00',
      href: '/',
      title: 'Exploring the balance between customer acquisition and retention'
    }
  ]
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS {title} - Flowbite Blocks in Svelte</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default event schedule
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this free example to show a list of workshops for an event using a timeline component and featuring the time and title of the presentation.
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
  <Section name="schedule">
    <Schedule scheduleName='Schedule'>
      <div class="mt-4" slot='subtitle'>
        <a href="/" title=""
          class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
          Learn more about our agenda
          <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      {#each schedule as item}
        <ScheduleItem {item}/>
      {/each}
    </Schedule>
  </Section>
</ExampleDiv>

<script lang="ts">
  import { Section, Popup } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte';
  const breadcrumb_title = 'Popup';
  const title = 'Popup';
  const dir = 'marketing';
  const description =
    'Get started with the popup component to overlay the main website content and showcase advertisement messages, cookie notices, and newsletter sign-ups.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>Popups</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS Popup - Flowbite Blocks in Svelte</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default popup
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example of a popup element to show a simple yes or no type of dialog to your
        website visitor based on the Modal component from Flowbite.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/popup.svelte"
        iconClass="text-gray-500"
      />
    </div>
  </div>
</Section>

<ExampleDiv class="flex items-center justify-center">
  <Popup>
    <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
      <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
      <p>
        The backup created with this export functionnality may contain some sensitive data. We
        suggest you to save this archive in a securised location.
      </p>
    </div>
    <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
      <a href="/" class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >Learn more about privacy</a
      >
      <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
        <Button outline color="dark">Cancel</Button>
        <Button color="red">Confirm</Button>
      </div>
    </div>
  </Popup>
</ExampleDiv>

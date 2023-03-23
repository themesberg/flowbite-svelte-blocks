<script lang="ts">
  import { Section, TableHeader } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Breadcrumb, BreadcrumbItem, Button, Heading, P, Search, Dropdown, DropdownItem, Chevron, DropdownDivider, Checkbox
  } from 'flowbite-svelte';
  const breadcrumb_title = 'Table Headers';
  const title = 'Table Headers';
  const dir = 'application';
  const description =
    'Use the table header component to append options and controls on top of a table component to indicate titles, filters, sorting elements, and other settings.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/application">Application</BreadcrumbItem>
    <BreadcrumbItem>Tabel Headers</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1"
    >Tailwind CSS Table Headers - Flowbite Blocks in Svelte</svelte:fragment
  >
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>



<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default table header</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this free example of a header component that you can position on top of a header to add a search functionality, a CRUD button, table options and filtering results.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/application/table-headers.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-80 flex pt-8'>
    <TableHeader>
      <Search slot='search' size='md'/>
      <Button>
        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
        </svg>
        Add product
      </Button>
      <Button color='light'>
        <Chevron>Actions</Chevron>
      </Button>
      <Dropdown >
        <DropdownItem>Mass Edit</DropdownItem>
        <DropdownDivider/>
        <DropdownItem>Delete all</DropdownItem>
      </Dropdown>
      <Button color='light'>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
        </svg>
        <Chevron>Filter</Chevron>
      </Button>
      <Dropdown class="w-48 p-2 text-sm" >
        <h6 class="mb-3 ml-1 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Apple (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Fitbit (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Dell (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Asus (97)</Checkbox>
        </li>
      </Dropdown>
    </TableHeader>
  </Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Table header with text and button</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        This free example can be used to show a title, description, and CTA button for creating a new item inside the table data.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/application/table-headers.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>


<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-80 flex pt-8'>
    <TableHeader>
      <Search slot='search' size='md'/>
      <Button>
        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
        </svg>
        Add product
      </Button>
      <Button color='light'>
        <Chevron>Actions</Chevron>
      </Button>
      <Dropdown >
        <DropdownItem>Mass Edit</DropdownItem>
        <DropdownDivider/>
        <DropdownItem>Delete all</DropdownItem>
      </Dropdown>
      <Button color='light'>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
        </svg>
        <Chevron>Filter</Chevron>
      </Button>
      <Dropdown class="w-48 p-2 text-sm" >
        <h6 class="mb-3 ml-1 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Apple (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Fitbit (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Dell (56)</Checkbox>
        </li>
        <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Asus (97)</Checkbox>
        </li>
      </Dropdown>
    </TableHeader>
  </Section>
</ExampleDiv>
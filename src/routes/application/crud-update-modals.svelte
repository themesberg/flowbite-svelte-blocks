<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Update Modals (CRUD)';
  const title = 'Crud Success Message';
  const dir = 'application';
  const description =
    'Get started with a collection of modal components based on the CRUD layout to update an existing set of data from the database built with Tailwind CSS.';

</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader 
  category='application' 
  title='Tailwind CSS {breadcrumb_title} - Flowbite Blocks in Svelte' 
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default modal">
  Use this free example of a modal component to update an existing data entry inside the database featuring text field inputs, selects, and a textarea.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass='bg-gray-50 dark:bg-gray-900 h-40 flex items-center'>
  <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>

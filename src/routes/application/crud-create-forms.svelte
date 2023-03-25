<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import {
    Breadcrumb,
    BreadcrumbItem,
    Label,
    Input,
    Button,
    Checkbox,
    Heading,
    P,
    A, Select, Textarea
  } from 'flowbite-svelte';
  const breadcrumb_title = 'Create Forms (CRUD)';
  const title = 'Crud Create Forms';
  const dir = 'application';
  const description =
    'Get started with a collection of forms crafted for the "create" action from the CRUD layouts featuring form elements coded in Tailwind CSS.';
  const handleSubmit = () =>{
    alert('Form submited.')
  }
  let selected;
  let countries = [
    {value:"tv", name: "TV/Monitors"},
    {value:"pc", name: "PC"},
    {value:"phone", name: "Phones"},
  ]
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader 
  category='application' 
  title='Tailwind CSS {breadcrumb_title} - Flowbite Blocks in Svelte' 
  {breadcrumb_title}
  {description}
/>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default form</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this free example of a form based on the CRUD layouts where you can create a new data entry inside your dashboard.
      </P>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/application/crud-create-forms.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="crudcreateform">
    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
    <form on:submit={handleSubmit}>
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <Label for='name' class="mb-2">Product Name</Label>
          <Input type='text' id='name' placeholder='Type product name' required />
        </div>
        <div class="w-full">
          <Label for='brand' class='mb-2'>Brand</Label>
          <Input type='text' id='brand' placeholder='Product brand' required/>
        </div>
        <div class="w-full">
          <Label for='price' class='mb-2'>Price</Label>
          <Input type='text' id='price' placeholder='$29999' required/>
        </div>
        <div class="w-full">
          <Label>Category
            <Select class="mt-2" items={countries} bind:value={selected} required/>
          </Label>
        </div>
        <div class="w-full">
          <Label for='weight' class='mb-2'>Item Weight (kg)</Label>
          <Input type='text' id='weight' placeholder='12' required/>
        </div>
        <div class="sm:col-span-2">
          <Label for="description" class="mb-2">Description</Label>
          <Textarea id="description" placeholder="Your description here" rows="4" name="description" required/>
        </div>
        <Button type='submit' class='w-32'>Add product</Button>
      </div>
    </form>
  </Section>
</ExampleDiv>

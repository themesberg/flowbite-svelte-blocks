# Create Forms (CRUD)

[Demo](https://flowbite-svelte-blocks.vercel.app/application/crud-create-forms)

## Default form

```html
<script>
  import { Label, Input, Button, Select, Textarea } from 'flowbite-svelte';
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

<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
<form on:submit={handleSubmit}>
  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div class="sm:col-span-2">
      <Label for='name' class="mb-2">Product Name</Label>
      <Input type='text' id='name' placeholder='Type product name' />
    </div>
    <div class="w-full">
      <Label for='brand' class='mb-2'>Brand</Label>
      <Input type='text' id='brand' placeholder='Product brand' />
    </div>
    <div class="w-full">
      <Label for='price' class='mb-2'>Price</Label>
      <Input type='text' id='price' placeholder='$29999' />
    </div>
    <div class="w-full">
      <Label>Category
        <Select class="mt-2" items={countries} bind:value={selected} />
      </Label>
    </div>
    <div class="w-full">
      <Label for='weight' class='mb-2'>Item Weight (kg)</Label>
      <Input type='text' id='weight' placeholder='12' />
    </div>
    <div class="sm:col-span-2">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="description" placeholder="Your description here" rows="4" name="description"/>
    </div>
    <Button type='submit' class='w-32'>Add product</Button>
</div>
</form>
  ```
# Create Forms (CRUD)

[Demo](https://flowbite-svelte-blocks.vercel.app/application/crud-create-forms)

## Default form

```html
<script>
  import { Label, Input, Button, Select, Textarea } from 'flowbite-svelte';
  const handleSubmit = () => {
    alert('Form submited.');
  };
  let selected;
  let countries = [
    { value: 'tv', name: 'TV/Monitors' },
    { value: 'pc', name: 'PC' },
    { value: 'phone', name: 'Phones' }
  ];
</script>

<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
<form on:submit="{handleSubmit}">
  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div class="sm:col-span-2">
      <label for="name" class="mb-2">Product Name</label>
      <input type="text" id="name" placeholder="Type product name" />
    </div>
    <div class="w-full">
      <label for="brand" class="mb-2">Brand</label>
      <input type="text" id="brand" placeholder="Product brand" />
    </div>
    <div class="w-full">
      <label for="price" class="mb-2">Price</label>
      <input type="text" id="price" placeholder="$29999" />
    </div>
    <div class="w-full">
      <label
        >Category
        <select class="mt-2" items="{countries}" bind:value="{selected}" />
      </label>
    </div>
    <div class="w-full">
      <label for="weight" class="mb-2">Item Weight (kg)</label>
      <input type="text" id="weight" placeholder="12" />
    </div>
    <div class="sm:col-span-2">
      <label for="description" class="mb-2">Description</label>
      <textarea id="description" placeholder="Your description here" rows="4" name="description" />
    </div>
    <button type="submit" class="w-32">Add product</button>
  </div>
</form>
```

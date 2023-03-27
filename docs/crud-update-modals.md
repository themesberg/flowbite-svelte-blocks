# Crud Update Modals

[Demo](https://flowbite-svelte-blocks.vercel.app/application/crud-update-modals)

## Default update modal

```html
<script lang="ts">
  import { Modal, Button, Input, Label, Select, Textarea } from 'flowbite-svelte'
  let defaultModal = false;
  const handleUpdate = () => {
    alert('Clicked update.');
  };
  const handleDelete = () => {
    alert ('Clicked delete.')
  }
  let selected = 'phone'
  let items = [
    { value: 'tv', name: 'TV/Monitors' },
    { value: 'pc', name: 'PC' },
    { value: 'phone', name: 'Phones' }
  ];
  const productData = {
    name: 'iPad Air Gen 5th Wi-Fi',
    brand: 'Google',
    price: '$399',
    category: 'phone',
    description: 'Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US'
  }
</script>

<div class="flex justify-center m-5">
  <Button on:click={() => (defaultModal = true)}>Update Product</Button>
</div>
<Modal title="Add Product" bind:open={defaultModal} autoclose class="min-w-full">
  <form>
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <Label for="name" class="mb-2">Name</Label>
        <Input type="text" id="name" placeholder="" value='{productData.name}' required />
      </div>
      <div>
        <Label for="brand" class="mb-2">Brand</Label>
        <Input type="text" id="brand" placeholder="" value='{productData.brand}' required />
      </div>
      <div>
        <Label for="price" class="mb-2">Price</Label>
        <Input type="text" id="price" placeholder="" value='{productData.price}' required />
      </div>
      <div>
        <Label
          >Category
          <Select class="mt-2" items={items} bind:value={selected}  required />
        </Label>
      </div>
      <div class="sm:col-span-2">
        <Label for="description" class="mb-2">Description</Label>
        <Textarea
          id="description"
          placeholder="Your description here"
          rows="4"
          name="description"
          required 
          value='{description}'/>
      </div>
      <div class="flex items-center space-x-4">
        <Button type="submit" class="w-64" on:click={handleUpdate}>
          Update product
        </Button>
        <Button type="submit" class="w-52" outline color='red' on:click={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  </form>
</Modal>
```

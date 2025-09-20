<script>
  import { Button, Modal, Checkbox } from 'flowbite-svelte';
  let formModal = false;
</script>

<div class="mt-8 flex justify-center">
  <Button onclick={() => (formModal = true)}>Toggle modal</Button>
</div>
<Modal bind:open={formModal} size="xs" autoclose={false}>
  <form class="flex flex-col space-y-6" action="#" tabindex="-1" aria-hidden="true">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Filter by category</h3>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
      <div class="flex items-center">
        <Checkbox>Apple (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Fitbit (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Dell (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Asus (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Logitech (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>MSI (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Boshch (176)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Sony (234)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Samsung (76)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Canon (49)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Microsoft (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Razor (49)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Emetc (16)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Nvidia (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>HP (234)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>BenQ (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Rockstar (49)</Checkbox>
      </div>
    </div>
    <div class="flex items-center space-x-4 rounded-b dark:border-gray-600">
      <Button>Apply</Button>
      <Button color="light">Reset</Button>
    </div>
  </form>
</Modal>

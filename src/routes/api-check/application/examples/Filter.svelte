<script>
	import { Button, Dropdown, Checkbox, DropdownItem } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>

<div class="mt-8 flex justify-center">
	<Button>Filter by category<ChevronDownOutline class="ml-2 h-3 w-3 text-white dark:text-white" /></Button>
</div>
<Dropdown simple>
	<DropdownItem>
		<Checkbox>Apple (56)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Fitbit (56)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Dell (56)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox checked>Asus (97)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox checked>Logitech (97)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox checked>MSI (97)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox checked>Bosch (176)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Sony (234)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox checked>Samsung (76)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Canon (49)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Microsoft (45)</Checkbox>
	</DropdownItem>
	<DropdownItem>
		<Checkbox>Razor (49)</Checkbox>
	</DropdownItem>
</Dropdown>

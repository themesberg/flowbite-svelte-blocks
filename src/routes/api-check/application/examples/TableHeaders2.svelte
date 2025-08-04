<script lang="ts">
	import { Section, TableHeader } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
</script>

<Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-80 flex justify-between items-center pt-8">
	<TableHeader headerType="textbtn">
		<div>
			<h5 class="mr-3 font-semibold dark:text-white">Flowbite Users</h5>
			<p class="text-gray-500 dark:text-gray-400">Manage all your existing users or add a new one</p>
		</div>
		<Button>
			<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 -ml-1 h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
				><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg
			>
			Add new user
		</Button>
	</TableHeader>
</Section>

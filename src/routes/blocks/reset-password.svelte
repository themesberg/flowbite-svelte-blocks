<script lang="ts">
	import { Section } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Reset Password Forms</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1"
		>Tailwind CSS Reset Password Form - Flowbite-Svelte-Blocks</svelte:fragment
	>
	<svelte:fragment slot="paragraph"
		>Use a collection of reset password forms based on multiple layouts to let your users change
		their password after going through the account recovery email.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default reset password page
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example with an email input and two password input fields to let the user change
				their password after receiving the account recovery email.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/reset-password.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

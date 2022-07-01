<script lang="ts">
	import { Section, ForgotPassword, ForgotPasswordHeader } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../utils/index';
	import { Breadcrumb, BreadcrumbItem, Label, Input } from 'flowbite-svelte';
	import { Home } from 'svelte-heros';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" icon={Home} variation="solid">Blocks</BreadcrumbItem>
		<BreadcrumbItem>Acount Recovery Form</BreadcrumbItem>
	</Breadcrumb>
	<svelte:fragment slot="h1"
		>Tailwind CSS Account Recovery Form - Flowbite-Svelte-Blocks</svelte:fragment
	>
	<svelte:fragment slot="paragraph"
		>Get started with account recovery (aka. forgot password) pages to allow users to reset their
		password using an email based on multiple layouts and styles.</svelte:fragment
	>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
	<div class="grid lg:grid-cols-2">
		<div>
			<h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				Default forgot password page
			</h2>
			<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
				Use this example for users who forgot their password and send a recovery email to their
				address featuring the logo, email input, and submit button.
			</p>
			<EditOnGithub
				size="18"
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/blocks/account-recovery.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="forgotpassword">
		<ForgotPasswordHeader
			src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
			alt="logo"
			href="/"
		>
			Flowbite
		</ForgotPasswordHeader>
		<ForgotPassword>
			<h1
				class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Forgot your password?
			</h1>
			<p class="font-light text-gray-500 dark:text-gray-400">
				Don't fret! Just type in your email and we will send you a code to reset your password!
			</p>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
				<div>
					<Label for="email">Your email</Label>
					<Input type="email" name="email" id="email" placeholder="name@company.com" required />
				</div>
			</form>
		</ForgotPassword>
	</Section>
</ExampleDiv>

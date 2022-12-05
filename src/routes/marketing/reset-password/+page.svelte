<script lang="ts">
	import { Section, Register } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
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
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/reset-password/+page.svelte"
				iconClass="text-gray-500"
			/>
		</div>
	</div>
</Section>

<ExampleDiv>
	<Section name="reset">
		<Register href="/">
			<svelte:fragment slot="top">
				<img
					class="w-8 h-8 mr-2"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
					alt="logo"
				/>
				Flowbite
			</svelte:fragment>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<form class="flex flex-col space-y-6" action="/">
					<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
					<Label class="space-y-2">
						<span>Your email</span>
						<Input type="email" name="email" placeholder="name@company.com" required />
					</Label>
					<Label class="space-y-2">
						<span>Your password</span>
						<Input type="password" name="password" placeholder="•••••" required />
					</Label>
					<Label class="space-y-2">
						<span>Confirm password</span>
						<Input type="password" name="confirm-password" placeholder="•••••" required />
					</Label>
					<div class="flex items-start">
						<Checkbox
							>I accept the <a
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								href="/"
							>
								Terms and Conditions</a
							></Checkbox
						>
					</div>
					<Button type="submit" class="w-full1">Reset passwod</Button>
				</form>
			</div>
		</Register>
	</Section>
</ExampleDiv>

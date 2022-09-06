<script lang="ts">
	import { Section, ForgotPassword, ForgotPasswordHeader } from '$lib';
	import { ExampleDiv, SectionHeader, EditOnGithub } from '../../utils/+server';
	import { Breadcrumb, BreadcrumbItem, Label, Input, Button, Checkbox } from 'flowbite-svelte';
</script>

<SectionHeader>
	<Breadcrumb navClass="flex mb-3">
		<BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
		<BreadcrumbItem href="/marketing">Marketing</BreadcrumbItem>
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
				href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/account-recovery.svelte"
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
					<Label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email</Label
					>
					<Input type="email" name="email" id="email" placeholder="name@company.com" required />
				</div>
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input
							id="terms"
							aria-describedby="terms"
							type="checkbox"
							class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
							required
						/>
					</div>
					<div class="ml-3 text-sm">
						<label for="terms" class="font-light text-gray-500 dark:text-gray-300"
							>I accept the <a
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								href="/">Terms and Conditions</a
							></label
						>
					</div>
				</div>
				<Button
					type="submit"
					class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Reset password</Button
				>
			</form>
		</ForgotPassword>
	</Section>
</ExampleDiv>

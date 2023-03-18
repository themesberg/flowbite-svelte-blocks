<script lang="ts">
  import { Section, ForgotPassword, ForgotPasswordHeader } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag } from '../utils';
  import {
    Breadcrumb,
    BreadcrumbItem,
    Label,
    Input,
    Button,
    Checkbox,
    Heading,
    P,
    A
  } from 'flowbite-svelte';
  const breadcrumb_title = 'Acount Recovery';
  const title = 'Acount Recovery';
  const dir = 'marketing';
  const description =
    'Get started with account recovery (aka. forgot password) pages to allow users to reset their password using an email based on multiple layouts and styles.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>Acount Recovery Form</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1"
    >Tailwind CSS Account Recovery Form - Flowbite Blocks in Svelte</svelte:fragment
  >
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <Heading tag="h2" customSize="text-2xl font-semibold" class="mb-1"
        >Default forgot password page</Heading
      >
      <P size="lg" color="text-gray-500 dark:text-gray-400" class="lg:mb-0  lg:max-w-2xl">
        Use this example for users who forgot their password and send a recovery email to their
        address featuring the logo, email input, and submit button.
      </P>
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
            <Checkbox id="terms" aria-describedby="terms" required
              >I accept the <a
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="/">Terms and Conditions</a
              ></Checkbox
            >
          </div>
        </div>
        <Button type="submit" color="red">Reset password</Button>
      </form>
    </ForgotPassword>
  </Section>
</ExampleDiv>

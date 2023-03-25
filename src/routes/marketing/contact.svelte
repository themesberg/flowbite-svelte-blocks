<script lang="ts">
  import { Section, Contact } from '$lib';
  import { ExampleDiv, SectionHeader, EditOnGithub, MetaTag, DocsLink } from '../utils';
  import { Label, Input, Textarea, Button, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  const breadcrumb_title = 'Contact Form';
  const title = 'Contact';
  const dir = 'marketing';
  const description =
    'The contact section is an important part of your website where the user can reach out to your team by interacting with the form elements and submitting the data.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader>
  <Breadcrumb navClass="flex mb-3">
    <BreadcrumbItem href="/" home>Blocks</BreadcrumbItem>
    <BreadcrumbItem href="/marketing">Marketing UI</BreadcrumbItem>
    <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
  </Breadcrumb>
  <svelte:fragment slot="h1">Tailwind CSS {breadcrumb_title} - Flowbite Blocks in Svelte</svelte:fragment>
  <svelte:fragment slot="paragraph">{description}</svelte:fragment>
</SectionHeader>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Default contact form
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example of a contact form coded with Tailwind CSS including the email, subject, and
        message that can be delivered by clicking on the form submission button.
      </p>
      <EditOnGithub
        size="18"
        href="https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/marketing/contact.svelte"
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="contact">
    <Contact>
      <svelte:fragment slot="h2">Contact Us</svelte:fragment>
      <svelte:fragment slot="paragraph">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our
        Business plan? Let us know.
      </svelte:fragment>
      <form class="space-y-8">
        <div>
          <Label for="email" class="block mb-2">Your email</Label>
          <Input id="email" name="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <Label for="subject" class="block mb-2">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div>
          <Textarea
            id="subject"
            name="subject"
            placeholder="Leave a comment..."
            label="Your message"
          />
        </div>
        <Button>Send message</Button>
      </form>
    </Contact>
  </Section>
</ExampleDiv>

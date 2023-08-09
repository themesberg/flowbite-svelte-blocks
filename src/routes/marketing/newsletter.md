<script lang="ts">
  import { Section, Newsletter } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  import { Input, Button } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  const breadcrumb_title = 'Newsletter Sections';
  const title = 'Newsletter';
  const dir = 'marketing';
  const description =
    'The newsletter component is an important marketing method that you can use to convince website visitors to sign up for additional news from your organization.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default newsletter">
  Use this example as a website section to allow website visitors to sign up for your newsletter
  program featuring an input field and privacy notice.
</SectionBlock>

<ExampleDiv>
  <Section>
    <Newsletter>
      <svelte:fragment slot="h2">Sign up for our newsletter</svelte:fragment>
      <p
        class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
      >
        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
        to sign up with your email.
      </p>
      <form action="/">
        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div class="relative w-full">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              size="lg"
              >
              <Icon name="envelope-solid" slot="left" size="sm" class="text-gray-500 dark:text-gray-400 ml-2" />
            </Input>
          </div>
          <div>
            <Button
              type="submit"
              btnClass="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >Subscribe</Button
            >
          </div>
        </div>
        <div
          class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
        >
          We care about the protection of your data. <a
            href="/"
            class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >Read our Privacy Policy</a
          >.
        </div>
      </form>
    </Newsletter>
  </Section>
</ExampleDiv>

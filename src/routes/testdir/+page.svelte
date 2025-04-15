<script>
  import { Facebook, Instagram, Twitter } from '../utils';
  import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon } from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia">
  <div class="grid gap-12 lg:grid-cols-6 lg:gap-24">
    <div class="col-span-2">
      <FooterBrand href="https://flowbite.com" src="/images/logo.svg" alt="Flowbite Logo" name="Flowbite" aClass="flex mb-6" />
      <p class="text-gray-600 dark:text-gray-400">Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.</p>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
        <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        <FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">Flowbite-Svelte</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">HELP & SUPPORT</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks">GitHub</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks">Gihub</FooterLink>
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks/blob/main/License">LICENSE</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900"><Facebook /></FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900"><Instagram /></FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900"><Twitter /></FooterIcon>
     
    </div>
  </div>
</Footer>
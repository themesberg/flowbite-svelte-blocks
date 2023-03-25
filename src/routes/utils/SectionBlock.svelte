<script lang='ts'>
    import { Section } from '$lib';
    import { EditOnGithub, DocsLink } from '.';
    export let title: string = ''
    export let githubLink: string = ''
    const href = `https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes/${githubLink}`
</script>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        <slot />
      </p>
      <EditOnGithub
        size="18"
        {href}
        iconClass="text-gray-500"
      />
      <DocsLink page="{title.toLowerCase().replace(/\s+/g, '-')}" target="_blank"/>
    </div>
  </div>
</Section>
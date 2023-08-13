<script lang="ts">
  import { MetaTag } from './utils';
  import type { PageData } from './$types';
  import Sectioncompo from './utils/Sectioncompo.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';

  export let data: PageData;

  const title = '';
  const breadcrumb_title = 'Flowbite Svelte Blocks';
  const description =
    'Get started with 250 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.';

  let searchTerm = 'recovery';
  const flattened_posts = Object.values(data.posts).flat()
  $: filteredArray = flattened_posts.filter(obj => obj.meta && obj.meta.breadcrumb_title === "Advanced Tables");
</script>

<MetaTag {breadcrumb_title} {title} {description} withoutLink={true} />
<Sectioncompo {data} section={undefined}>
  <div slot="header" class="grid mt-3 mb-6 lg:gap-8 lg:mt-5 lg:mb-6 xl:grid-cols-3">
    <div class="col-span-2 mb-2 lg:mb-0">
      <h2 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Flowbite Blocks in Svelte</h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
        Get started with 122 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.
      </p>
    </div>
  </div>
</Sectioncompo>


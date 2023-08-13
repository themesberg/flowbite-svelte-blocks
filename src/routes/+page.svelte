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
<Sectioncompo {data} section={undefined}/>


<script module lang="ts">
  import code from './code.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
 
  export { h2, h3, code };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import MetaTag from '../utils/MetaTag.svelte';
  import SectionHeader from '../utils/SectionHeader.svelte';
  import Paging from '../utils/Paging.svelte';

  interface Props {
    children: Snippet;
    title?: string;
    breadcrumb_title?: string;
    dir?: 'application'| 'marketing' | 'publisher' | undefined;
    description?: string;
    category?: string;
  }

  let { children, title, breadcrumb_title, dir, description, category }:Props = $props();

  let divClass = category ? '' : 'mx-auto max-w-8xl lg:px-20 px-8 md:px-auto py-8';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<div class={divClass}>
  <SectionHeader category={dir} {breadcrumb_title} {title} {description} />
  <div id="mainContent">
    {@render children()}
    <Paging />
  </div>
</div>

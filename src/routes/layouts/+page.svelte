<script context="module">
  import code from './code.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  export { h2, h3, code };
</script>

<script>
  import Footer from '../utils/Footer.svelte';
  import MetaTag from '../utils/MetaTag.svelte';
  import Newsletter from '../utils/Newsletter.svelte';
  import PageHeadSection from '../utils/PageHeadSection.svelte';
  import SectionHeader from '../utils/SectionHeader.svelte';
  import Paging from '../utils/Paging.svelte';
  import Toc from '../utils/Toc.svelte';
  import { extract } from './Anchor.svelte';

  export let /** @type {string} */ title;
  export let /** @type {string} */ breadcrumb_title;
  export let /** @type {string} */ component_title = '';
  export let /** @type {string} */ dir;
  export let /** @type {string} */ description;
  export let /** @type {string} */ layout = '';

  // calm down `unused export property` warrning
  layout;
  component_title;
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader category={dir} {breadcrumb_title} {title} {description} />
<div id="mainContent" class="px-4 mx-auto max-w-8xl py-10">
  <slot />
</div>




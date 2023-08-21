<script context="module">
  import code from './code.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  export { h2, h3, code };
</script>

<script>
  import MetaTag from '../utils/MetaTag.svelte';
  import SectionHeader from '../utils/SectionHeader.svelte';
  import Paging from '../utils/Paging.svelte';

  export let /** @type {string} */ title;
  export let /** @type {string} */ breadcrumb_title;
  export let /** @type {string} */ dir;
  export let /** @type {string} */ description;
  export let /** @type {string} */ layout = '';
  export let /** @type {boolean} */ category;

  let divClass = category ? '' : 'mx-auto max-w-8xl lg:px-20 px-8 md:px-auto py-8';
  // calm down `unused export property` warrning
  layout;
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<div id="mainContent" class={divClass}>
  <SectionHeader category={dir} {breadcrumb_title} {title} {description} />
  <slot />
  <Paging />
</div>

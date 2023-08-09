<script context="module">
  import code from './code.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  export { h2, h3, code };
</script>

<script>
  import MetaTag from '../utils/MetaTag.svelte';
  import SectionHeader from '../utils/SectionHeader.svelte';

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




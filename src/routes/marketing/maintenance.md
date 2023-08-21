---
layout: componentLayout
title: Svelte Maintenance Pages - Flowbite Svelte Blocks
breadcrumb_title: Maintenance Pages
no_of_components: 1 free component
dir: marketing
description: Get started with maintenance pages coded with Tailwind CSS to show your users when you are currently working on an update and the website is not accessible.
---

<script>
  import { TableProp, TableDefaultRow } from '../utils'
  import { props as item1} from '../props/Maintenance.json'
  import { props as item2} from '../props/Section.json'
</script>

## Default maintenance page

Use this example to let your users know that you are working on an important update and the website is down for a couple of hours.

```svelte example
<script>
  import { Section, Maintenance } from 'flowbite-svelte-blocks';
</script>

<Section name="maintenance">
  <Maintenance>
    <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
    <svelte:fragment slot="paragraph">Our Enterprise administrators are performing scheduled maintenance.</svelte:fragment>
  </Maintenance>
</Section>
```

## Props

### Maintenance

<TableProp>
<TableDefaultRow items={item1} rowState='hover' />
</TableProp>

### Section

<TableProp>
<TableDefaultRow items={item2} rowState='hover' />
</TableProp>

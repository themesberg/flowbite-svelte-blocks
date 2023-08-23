---
layout: componentLayout
title: Svelte Portfolio - Flowbite Svelte Blocks
breadcrumb_title: Portfolio
no_of_components: 1 free component
dir: marketing
description: Get started with the project portfolio UI components coded with Tailwind CSS to showcase your personal or company client's project specifications and results.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  import componentData1 from '../component-data/Portfolio.json'
  import componentData2 from '../component-data/PortfolioItem.json'
  import componentData3 from '../component-data/Section.json'
</script>

## Default event schedule

Use this example to show a list of company clients and case study previews inside a website section featuring the client, title of the project, a description and CTA button.

```svelte example
<script lang="ts">
  import { Section, Portfolio, PortfolioItem } from 'flowbite-svelte-blocks';

  const portfolios = [
    {
      customer: 'Alphabet Inc.',
      title: 'Official website',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Microsoft Corp.',
      title: 'Management system',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Adobe Inc.',
      title: 'Logo design',
      description: 'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    }
  ];
</script>

<Section name="portfolio" sectionClass="bg-white dark:bg-gray-900 antialiased">
  <Portfolio title="Our work" subtitle="Crafted with skill and care to help our clients grow their business!">
    {#each portfolios as item}
      <PortfolioItem {item} />
    {/each}
  </Portfolio>
</Section>
```

## Component data

### Portfolio

<CompoAttributesViewer componentData={componentData1}/>

### PortfolioItem

<CompoAttributesViewer componentData={componentData2}/>

### Section component

<CompoAttributesViewer componentData={componentData3}/>
